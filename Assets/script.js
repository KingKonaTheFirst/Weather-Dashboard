const apiKey = "1fde3780da74ea092aa736114ad5c0d3";

var city = "";

var input = document.getElementById("input");

//current day weahter
var currentTempEl = document.getElementById("current-temp");

var currentUviEl = document.getElementById("current-uvi");

var currentWindEl = document.getElementById("current-wind");

var currentHumEl = document.getElementById("current-humidity");

var currentDateEl = document.getElementById("current-date");

var currentCityEl = document.getElementById("city-name");

var entry = document.createElement("li");

var previousSearch = {};

var previousSearchContainer = document.getElementById("past-searches");

// past search displays
function clearSearch() {
  var previousSearch;
}

function previousSearchScreen() {
  previousSearchContainer.textContent = "";
  for (var search in previousSearch) {
    console.log(search);
    var previousSearchButt = document.createElement("button");
    previousSearchButt.setAttribute("content", search);

  }
}
var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${userInput}&appid=${apiKey}&units=imperial`
    fetch(apiUrl)
      .then(function (response) {
        //  Conditional for the the response.status.
        if (response.status !== 200) {
          // Place the response.status on the page.
        }
        return response.json();
      })
