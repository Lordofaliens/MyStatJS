const body = document.querySelector('body');


let weather = {
    "apikey" : "0e07cb3d499cd9822b16ebc34139fd33",
    fetchWeather: function (city){
        const backgroundUrl = "https://source.unsplash.com/1600x900/?"+city+"-best-places";
        body.style.backgroundImage = `url(${backgroundUrl})`;
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=metric&appid=0e07cb3d499cd9822b16ebc34139fd33")
        .then((response) => {
            if(!response.ok){
                alert("No weather found.");
                throw new Error("No weather found.");
            }
            return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
    displayWeather: function (data) {
        console.log(data)
        const { name } = data;
        const { icon, description } = data.weather[0];
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name,icon,description,temp,humidity,speed);
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
        document.querySelector(".description").innerText = description;
        document.querySelector(".temp").innerText = temp + "°C";
        document.querySelector(".humidity").innerText ="Humidity: " + humidity + "%";  
        document.querySelector(".wind").innerText ="Wind speed: " + speed + " km/h";
    }
};
document.querySelector(".search button").addEventListener("click", function () {
    weather.fetchWeather(document.querySelector(".search-bar").value);
});
addEventListener("keyup", function (event) {
    if (event.key == "Enter") {
        weather.search();
    }
});
weather.fetchWeather("Kyiv");    