
const apiKey = "f0a04b60d18b51680fa0f228858ce21b"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?&appid=f0a04b60d18b51680fa0f228858ce21b&units=metric&q="
const searchBox = document.querySelector(".pesquisa input")
const searchBtn = document.querySelector(".pesquisa button")
const weatherIcon = document.querySelector(".clima-icon")

async function checkWeather(cidade) {
    const response = await fetch(apiUrl + cidade + '&appid=${apiKey}');

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".clima").style.display = "none"
    }

    var data = await response.json();


    console.log(data)

    document.querySelector(".cidade").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidade").innerHTML = data.main.humidity + "%";
    document.querySelector(".vento").innerHTML = data.wind.speed + "Km/h";


    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "img/clouds.png"
    } else if (data.weather[0].main == "Clear") {
        weatherIcon.src = "img/clear.png";
    } else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "img/rain.png";
    } else if (data.weather[0].main == "Drizzle") {
        weatherIcon.src = "img/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
        weatherIcon.src = "img/mist.png";
    } else if (data.weather[0].main == "Snow") {
        weatherIcon.src = "img/snow.png";
    }

    document.querySelector(".clima").style.display = "block"
    document.querySelector(".error").style.display = "none"

}


searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})
