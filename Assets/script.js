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

// past search displays
function clearSearch(){
    var previousSearch
}
