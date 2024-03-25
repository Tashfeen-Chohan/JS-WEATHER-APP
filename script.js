let temp = document.querySelector(".temp");
let city = document.querySelector(".city");
let humidity = document.querySelector(".humidity");
let wind = document.querySelector(".wind");
let searchBox = document.getElementById("searchBox");
let searchBtn = document.getElementById("searchBtn");
let weatherIcon = document.querySelector(".weatherIcon");

let apiKey = "9716b28e239dd4121015286c643fd739";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}&q=`;

async function checkWeather(cityName) {
  let response = await fetch(apiUrl + cityName);
  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    let data = await response.json();
    console.log(data);

    temp.innerHTML = Math.round(data.main.temp) + "°c";
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.temp + " %";
    wind.innerHTML = data.wind.speed + " km/h";

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "images/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
    searchBox.value = "";
  }
}

// checkWeather()

searchBtn.addEventListener("click", function () {
  checkWeather(searchBox.value);
  // console.log(searchBox.value)
});

searchBox.addEventListener("keypress", function (e) {
  if (e.keyCode === 13) {
    checkWeather(searchBox.value);
  }
});
