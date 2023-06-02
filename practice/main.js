class App {
    static searchBtn = document.getElementById('film-search-button');
    static searchInput = document.getElementById('film-search-input');
    static setDefault = document.getElementById('set-default');
    static openWatchListBtn = document.getElementById('open-watchlist');
    static clearWatchListBtn = document.getElementById('clear-watchlist');
    static setRandom = document.getElementById('set-random');

    static DEFAULT_SEARCH = localStorage.getItem("defaultSearch") || "XXX";
    static API_KEY = "2b386cf600msh1dfb6e048cf656dp180a91jsn7a58fcbbed6f";
    static SEARCH_URL = 'https://online-movie-database.p.rapidapi.com/auto-complete?q=';
    static DEFAULT_HEADERS = {
        'X-RapidAPI-Key': this.API_KEY,
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com'
    }

    constructor () {
        App.setDefault.onclick = () => this.setDef();
        App.openWatchListBtn.onclick = () => this.openWL();
        App.clearWatchListBtn.onclick = () => this.clearWL();
        App.searchBtn.onclick = () => this.renderData("searchInLocal");
        window.onload = () => this.renderData("dataInLocal");
    }

    getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    async searchAPIget () {
        const url = App.SEARCH_URL + searchInput.value;
        const options = {
            method: 'GET',
            headers: App.DEFAULT_HEADERS
        };
        console.log(url)
        searchInput.value = ""; 
        try {
            const response = await fetch(url, options);
            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    sendDataToLocal () {
        localStorage.setItem("dataInLocal",localStorage.getItem("searchInLocal"));
    }

    async sendSearchToLocal () {
        const dataFromAPI = await this.searchAPIget();
        let searchDataToLocal = [];
        dataFromAPI.d.forEach(element => {
            searchDataToLocal.push({key: element.id, name : element.l, source: element.q, rank: element.rank, actors: element.s, year: element.y, image: element.i?.imageUrl})
        });
        console.log(searchDataToLocal)
        localStorage.setItem("searchInLocal",JSON.stringify(searchDataToLocal));
    }

    async changeWatchLater(elem, action) {
        let prevData = localStorage.getItem("watchLater") ? JSON.parse(localStorage.getItem("watchLater")) : [];
        const keys = prevData.map(elem=>elem.key);
        if(!keys.includes(elem.key)&&action=="add") 
        {
            prevData.push(elem);
        }else if(keys.includes(elem.key)&&action=="delete") 
        {
            prevData = prevData.filter(element => element.key!=elem.key);
        }
        localStorage.setItem("watchLater",JSON.stringify(prevData));
        await this.renderData("dataInLocal");
    }

    outputFilmItem(elems,containerName) {
        var starSymbol = '&#9733;';
        const watchLater = (JSON.parse(localStorage.getItem("watchLater"))).map(elem=>elem.key) || [];
        $(`#${containerName}`).empty();
        elems.forEach(element => {
            let isLater = false;
            if(watchLater.includes(element?.key)) isLater = true;
            var filmElement = $("<div>").addClass("film-container");
            if (element?.image) filmElement.append($("<img>").attr("src", element?.image).addClass("film-image"));
            var descriptionElement = $("<div>").addClass("film-description-container");
            descriptionElement.append($("<p>").text(element?.name).addClass("film-name"));
            descriptionElement.append($("<p>").text(element?.actors).addClass("film-actors"));
            descriptionElement.append($("<p>").text(element?.source).addClass("film-source"));
            var rankYearElement = $("<p>").addClass("film-rank-year");
            rankYearElement.append($("<span>").html(starSymbol + " " + element?.rank).addClass("film-rank"));
            if(!isLater) rankYearElement.append($("<button>").text("Add to Watch Later").addClass("film-watchlater-btn").click(()=>{this.changeWatchLater(element,"add")}));
            else rankYearElement.append($("<button>").text("Delete from Watch Later").addClass("film-watchlater-btn").click(()=>{this.changeWatchLater(element,"delete")}));
            rankYearElement.append($("<span>").text(element?.year).addClass("film-year"));
            descriptionElement.append(rankYearElement);
            filmElement.append(descriptionElement);
            $(`#${containerName}`).append(filmElement);
        });
    }

    async renderData(props) {
        if (props == "dataInLocal") {
            if (!localStorage.getItem("dataInLocal")) await this.sendDataToLocal();
        } else {
            await this.sendSearchToLocal();
        }
        const films = JSON.parse(localStorage.getItem(props));
        this.outputFilmItem(films,'films-container');
        localStorage.setItem('searchInLocal',JSON.stringify(films));
        const randomIndex = this.getRandomNumber(0, films.length-1);
        console.log(randomIndex,"INDEX")
        $("#random-film-container").empty();
        $("#random-film-container").append($("<p>").attr('id', 'random-film-title').text("Random film from series"));
        $("#random-film-container").append($("<div>").attr('id', 'set-random'));
        this.outputFilmItem([films[randomIndex]],'set-random');
    }

    setDef () {
        localStorage.setItem("dataInLocal", localStorage.getItem("searchInLocal"))
    }

    openWL () {
        $("#films-container").empty();
        $("#random-film-container").empty();
        const films = localStorage.getItem("watchLater") ? JSON.parse(localStorage.getItem("watchLater")) : [];
        this.outputFilmItem(films,'films-container');
        localStorage.setItem('searchInLocal',JSON.stringify(films));
    }

    clearWL () {
        localStorage.setItem("watchLater","[]");
        window.location.reload(true);
    }
}

new App();