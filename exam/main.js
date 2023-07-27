class App {
    static searchBtn = document.getElementById('song-search-button');
    static searchInput = document.getElementById('song-search-input');
    static sortRate = document.getElementById('sort-rate');
    static setDefault = document.getElementById('set-default');
    static openWatchListBtn = document.getElementById('open-listenlist');
    static clearWatchListBtn = document.getElementById('clear-listenlist');
    static setRandom = document.getElementById('set-random');

    errorHandler = false;

    static DEFAULT_SEARCH = localStorage.getItem("defaultSearch") || "eminem";
    static API_KEY = "49273a57efmsh2df79fb35b49464p14ccd9jsn4012a2bc4752";
    static HOST = "deezerdevs-deezer.p.rapidapi.com";
    static SEARCH_URL = 'https://deezerdevs-deezer.p.rapidapi.com/search?q=';
    static DEFAULT_HEADERS = {
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': this.HOST
    }

    constructor () {
        App.sortRate.onclick = () => this.sortByRank();
        App.setDefault.onclick = () => this.setDef();
        App.openWatchListBtn.onclick = () => this.openWL();
        App.clearWatchListBtn.onclick = () => this.clearWL();
        App.searchBtn.onclick = () => this.renderData("full","searchInLocal");
        window.onload = () => this.renderData("full","dataInLocal");
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async searchAPIget () {
        const url = App.SEARCH_URL + App.searchInput.value;
        const options = {
            method: 'GET',
            headers: App.DEFAULT_HEADERS
        };
        console.log(url)
        App.searchInput.value = ""; 
        try {
            const response = await fetch(url, options);
            return (await response.json()).data;
        } catch (error) {
            console.error(error);
        }
    }

    async sendDataToLocal () {
        localStorage.setItem("dataInLocal","[]");
        if(localStorage.getItem("searchInLocal")) localStorage.setItem("dataInLocal",localStorage.getItem("searchInLocal"));
    }

    async sendSearchToLocal () {
        const dataFromAPI = await this.searchAPIget();
        console.log(dataFromAPI)
        if(!Array.isArray(dataFromAPI)) {
            this.errorHandler = true;
        } else {
            this.errorHandler = false;
        }
        if(!this.errorHandler)
        {
            let searchDataToLocal = [];
            dataFromAPI.forEach(element => {
                searchDataToLocal.push({id: element?.id, title : element?.title, artist: element?.artist.name, album: element?.album.title, rank: element?.rank, preview: element?.preview})
            });
            console.log(searchDataToLocal)
            localStorage.setItem("searchInLocal",JSON.stringify(searchDataToLocal));
        }  
    }

    async changeListenLater(elem, action) {
        let prevData = localStorage.getItem("listenLater") ? JSON.parse(localStorage.getItem("listenLater")) : [];
        const keys = prevData.map(elem=>elem.id);
        if(!keys.includes(elem.key)&&action=="add") {
            prevData.push(elem);
        } else if(keys.includes(elem.id)&&action=="delete") {
            prevData = prevData.filter(element => element.id!=elem.id);
        }
        localStorage.setItem("listenLater",JSON.stringify(prevData));
        const songs = JSON.parse(localStorage.getItem("searchInLocal"));
        this.outputSongItem(songs,'songs-container');
        localStorage.setItem('searchInLocal',JSON.stringify(songs));
        const randomIndex = this.getRandomNumber(0, songs.length-1);
        console.log(randomIndex,"INDEX")
        $("#random-song-container").empty();
        $("#random-song-container").append($("<p>").attr('id', 'random-song-title').text("Random song from the list"));
        $("#random-song-container").append($("<div>").attr('id', 'set-random'));
        this.outputSongItem([songs[randomIndex]],'set-random');
    }

    outputSongItem(elems, containerName) {
        var starSymbol = '&#9733;';
        const listenLater = localStorage.getItem("listenLater") ? (JSON.parse(localStorage.getItem("listenLater"))).map(elem => elem.id) : [];
        $(`#${containerName}`).empty();
        elems.forEach(element => {
            let isLater = false;
            if (listenLater.includes(element?.id)) isLater = true;
            var filmElement = $("<div>").addClass("song-container");
            filmElement.append($("<audio controls>").attr("src", element?.preview).addClass("song-audio"));
            var descriptionElement = $("<div>").addClass("song-description-container");
            descriptionElement.append($("<p>").text(element?.title).addClass("song-title"));
            descriptionElement.append($("<p>").text(element?.artist).addClass("song-artist"));
            descriptionElement.append($("<p>").text(element?.album).addClass("song-album"));
            var rankYearElement = $("<p>").addClass("song-rank-year");
            rankYearElement.append($("<span>").html(starSymbol + " " + element?.rank).addClass("song-rank"));
            if (!isLater) rankYearElement.append($("<button>").text("Add to Listen Later").addClass("song-watchlater-btn").click(() => { this.changeListenLater(element, "add") }));
            else rankYearElement.append($("<button>").text("Delete from Listen Later").addClass("song-watchlater-btn").click(() => { this.changeListenLater(element, "delete") }));
            descriptionElement.append(rankYearElement);
            filmElement.append(descriptionElement);
            $(`#${containerName}`).append(filmElement);
        });
    }

    async sortByRank() {
        let prevData = localStorage.getItem("searchInLocal") ? JSON.parse(localStorage.getItem("searchInLocal")) : [];
        prevData.sort(function(a, b) {
            return a.rank - b.rank;
        });
        console.log(prevData,"SORTED")
        localStorage.setItem("searchInLocal", JSON.stringify(prevData));
        await this.renderData("notfull","searchInLocal");
    }


    setDef() {
        localStorage.setItem("dataInLocal", localStorage.getItem("searchInLocal"))
    }

    openWL() {
        $("#songs-container").empty();
        $("#random-song-container").empty();
        const songs = localStorage.getItem("listenLater") ? JSON.parse(localStorage.getItem("listenLater")) : [];
        this.outputSongItem(songs,'songs-container');
        localStorage.setItem('searchInLocal',JSON.stringify(songs));
        if(songs.length>0) {
            $("#random-song-container").append($("<p>").attr('id', 'random-song-title').text("Listen to the random song from the list"));
            const randomIndex = this.getRandomNumber(0, songs.length-1);
            $("#random-song-container").append($("<div>").attr('id', 'set-random'));
            this.outputSongItem([songs[randomIndex]],'set-random');
        } else {
            localStorage.setItem("searchInLocal","[]");
            $("#songs-container").empty();
            $("#songs-container").append($("<p>").addClass('error-title').text("We found nothing for you, but sometimes nothing is better than something"));
        }
    }

    clearWL() {
        localStorage.setItem("listenLater","[]");
        this.setDef();
        window.location.reload(true);
    }

    async renderData(props0, props1) {
        if(props0=="full") {
            if (props1 == "dataInLocal") {
                if (!localStorage.getItem("dataInLocal")) await this.sendDataToLocal();
            } else {
                await this.sendSearchToLocal();
            }
        }
        
        $("#random-song-container").empty();
        if(!this.errorHandler)
        {
            const songs = JSON.parse(localStorage.getItem(props1));
            this.outputSongItem(songs,'songs-container');
            localStorage.setItem('searchInLocal',JSON.stringify(songs));
            if(songs.length>0) {
                $("#random-song-container").append($("<p>").attr('id', 'random-song-title').text("Listen to the random song from the list"));
                const randomIndex = this.getRandomNumber(0, songs.length-1);
                $("#random-song-container").append($("<div>").attr('id', 'set-random'));
                this.outputSongItem([songs[randomIndex]],'set-random');
            } else {
                localStorage.setItem("searchInLocal","[]");
                $("#songs-container").empty();
                $("#songs-container").append($("<p>").addClass('error-title').text("We found absolutely nothing for you, but sometimes nothing is better than something"));
            }
        } else {
            localStorage.setItem("searchInLocal","[]");
            $("#songs-container").empty();
            $("#songs-container").append($("<p>").addClass('error-title').text("Whoa, whoa, whoa... hold your horses! You're zooming ahead, but let's take a breather. Take a moment to enter your input correctly and give me time to proceed with the answer. Let's give it another shot!"));
            $("#songs-container").append($("<p>").addClass('error-title').html("P.S API is free, so just go and watch some &nbsp;<a href=\"https://www.netflix.com/ua-en/\">Netflix</a>"));
        }
    }
}

new App();