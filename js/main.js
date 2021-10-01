// const axios = require('axios');
const zip = document.getElementById('zip');
const submit = document.getElementById('submit');
const errorMsgDiv = document.getElementById('errorMsgDiv');
const weatherDataDiv = document.getElementById('weatherDataDiv');
const city = document.getElementById('city');
const icon = document.getElementById('icon');
const condition = document.getElementById('condition');
const tempF = document.getElementById('tempF');
const tempC = document.getElementById('tempC');
const tempK = document.getElementById('tempK');


var previousZips = {};

submit.addEventListener('click', validateZip);

function validateZip() {
    if (!isNaN(zip.value) && zip.value.length == 5) {
        getWeather(zip.value);
    } else {
        noWeather();
    }
}

function getWeather(zipCode) {    
    axios.get("https://api.openweathermap.org/data/2.5/weather", {
            params: {
                zip: zipCode,
                appid: "267b2d4d75d3015cabf24d3269591e19"
            }
        })
        .then(function (response) {
            parseData(response.data);
            console.log(response);
            yesWeather();
        })

        .catch(function (error) {
            // handle error
            console.log(error);
            noWeather();
        });
}

function parseData(weatherData) {
    city.innerHTML = weatherData.name;
    icon.src = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;
    icon.alt = weatherData.weather[0].description;
    condition.innerHTML = weatherData.weather[0].main;
    tempF.innerHTML = toDegreeF(weatherData.main.temp);
    tempC.innerHTML = toDegreeC(weatherData.main.temp);
    tempK.innerHTML = Math.round(weatherData.main.temp * 10) / 10;
    
}

function noWeather() {
    console.log("Invalid ZIP Code.");
    errorMsgDiv.style = "display: block;";
    weatherDataDiv.style = "display: none;";
}

function yesWeather() {
    console.log("Data retrieved.");
    errorMsgDiv.style = "display: none;";
    weatherDataDiv.style = "display: block;";
}

function toDegreeC(kelvinTemp) {
    return Math.round(kelvinTemp - 273.15);
}

function toDegreeF(kelvinTemp) {
    return Math.round(((kelvinTemp - 273.15) * (9 / 5)) + 32);
}

// // Want to use async/await? Add the `async` keyword to your outer function/method.
// async function getUser() {
//   try {
//     const response = await axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40508,us&appid=267b2d4d75d3015cabf24d3269591e19');
//     console.log(response);
//     // const testObj = JSON.parse(response.data)
//     test.innerHTML = response.data.name;
//   } catch (error) {
//     console.error(error);
//   }
// }