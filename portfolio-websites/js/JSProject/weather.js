const apikey = "9dde4b38b484d8b051677bbea775b3ff";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".weather-search input");
const searchbtn = document.querySelector(".weather-search button");
const weathericon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiurl + city + `&appid=${apikey}`);

  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";

    if (data.weather[0].main == "Clouds") {
      weathericon.src = "images/projects img/JS Images/Weather img/cloud.png";
    } else if (data.weather[0].main == "Clear") {
      weathericon.src = "images/projects img/JS Images/Weather img/clear.png";
    } else if (data.weather[0].main == "Rain") {
      weathericon.src = "images/projects img/JS Images/Weather img/rain.png";
    } else if (data.weather[0].main == "Snow") {
      weathericon.src = "images/projects img/JS Images/Weather img/snow.png";
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}
searchbtn.addEventListener("click", () => {
  checkWeather(searchbox.value);
});
