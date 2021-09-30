// const axios = require('axios');
const zip = document.getElementById('zip');
const button = document.getElementById('button');
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const condition = document.getElementById('condition');
const other = document.getElementById('other');

var previousZips = {};

// updatePage();
button.addEventListener('click', updatePage);

function updatePage() {
    axios.get('https://api.openweathermap.org/data/2.5/weather?zip=40508,us&appid=267b2d4d75d3015cabf24d3269591e19')
        .then(function (response) {
            // handle success
            console.log(response);
            city.innerHTML = response.data.name;
            temp.innerHTML = response.data.main.temp;
            condition.innerHTML = response.data.weather[0].description;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
}

// // Optionally the request above could also be done as
// axios.get('/user', {
//     params: {
//       ID: 12345
//     }
//   })
//   .then(function (response) {
//     console.log(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//   })
//   .then(function () {
//     // always executed
//   });  

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