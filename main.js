var submitButton = document.getElementById('submit');
var goBackButton = document.getElementById('go-back');
var textBox = document.getElementById('textbox');
var city = document.getElementById('city');
var enterCity = document.getElementById('enter-city');
var cityName = document.createElement('h2');
var currentTemp = document.getElementById('current-temp');
var temp = document.getElementById('temp');
var feelsLike = document.getElementById('feels-like');
var feelsTemp = document.getElementById('feels-temp');
var minTemp = document.getElementById('min-temp');
var minNum = document.getElementById('min-num');
var maxTemp = document.getElementById('max-temp');
var maxNum = document.getElementById('max-num');
var humidity = document.getElementById('humidity');
var humidNum = document.getElementById('humid-num');
var wind = document.getElementById('wind');
var windNum = document.getElementById('wind-num');
var gifBox = document.getElementById('gif');
var form = document.getElementById('form');
var gif = document.createElement('img');

submitButton.addEventListener('click', submitHandleClick);
goBackButton.addEventListener('click', goBackHandleClick);

function submitHandleClick() {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    data: {
      q: city.value,
      units: "imperial",
      appid: "5565e1f156c4507739babb68ef645172"
    },
    success: function (data) {
      enterCity.classList.add('hidden');
      city.classList.add('hidden');
      submitButton.classList.add('hidden');
      currentTemp.classList.remove('hidden');
      temp.classList.remove('hidden');
      feelsLike.classList.remove('hidden');
      feelsTemp.classList.remove('hidden');
      minTemp.classList.remove('hidden');
      minNum.classList.remove('hidden');
      maxTemp.classList.remove('hidden');
      maxNum.classList.remove('hidden');
      humidity.classList.remove('hidden');
      humidNum.classList.remove('hidden');
      wind.classList.remove('hidden');
      windNum.classList.remove('hidden');
      temp.textContent = data["main"]["temp"] + "°F";
      feelsTemp.textContent = data["main"]["feels_like"] + "°F";
      minNum.textContent = data["main"]["temp_min"] + "°F";
      maxNum.textContent = data["main"]["temp_max"] + "°F";
      humidNum.textContent = data["main"]["humidity"] + "%";
      windNum.textContent = data["wind"]["speed"] + "mph";
      gifBox.classList.remove('hidden');
      goBackButton.classList.remove('hidden');
      cityName.textContent = city.value;
      cityName.classList.add('p-grow-30');
      textBox.append(cityName);
      if (data["main"]["temp"] < 32) {
        freezingCold();
      }
      if (data["main"]["temp"] <= 50 && data["main"]["temp"] >= 32) {
        chillyOutside();
      }
      if (data["main"]["temp"] <= 70 && data["main"]["temp"] >= 50) {
        coolWeather();
      }
      if (data["main"]["temp"] <= 80 && data["main"]["temp"] >= 70) {
        greatWeather();
      }
      if (data["main"]["temp"] <= 90 && data["main"]["temp"] >= 80) {
        hotWeather();
      }
      if (data["main"]["temp"] > 90) {
        superHot();
      }
    },
    error: function () {
      console.error("error")
    }
  });
}
function freezingCold() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: "GET",
    data: {
      q: "jim carrey freezing movie",
      "api_key": "1HVmYfFmPXlqbDQcjCutEprNI8I02kIZ"
    },
    success: function (data) {
      gif.src = data.data[4].images.downsized.url;
      gif.classList.add('gif');
      gifBox.append(gif);
    },
    error: function () {
      console.error("error")
    }
  })
}
function chillyOutside() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: "GET",
    data: {
      q: "cold weather",
      "api_key": "1HVmYfFmPXlqbDQcjCutEprNI8I02kIZ"
    },
    success: function (data) {
      gif.src = data.data[6].images.downsized.url;
      gif.classList.add('gif');
      gifBox.append(gif);
    },
    error: function () {
      console.error("error")
    }
  })
}
function coolWeather() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: "GET",
    data: {
      q: "robert redford agree nod",
      "api_key": "1HVmYfFmPXlqbDQcjCutEprNI8I02kIZ"
    },
    success: function (data) {
      gif.src = data.data[1].images.downsized.url;
      gif.classList.add('gif');
      gifBox.append(gif);
    },
    error: function () {
      console.error("error")
    }
  })
}
function greatWeather() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: "GET",
    data: {
      q: "beautiful day",
      "api_key": "1HVmYfFmPXlqbDQcjCutEprNI8I02kIZ"
    },
    success: function (data) {
      gif.src = data.data[4].images.downsized.url;
      gif.classList.add('gif');
      gifBox.append(gif);
    },
    error: function () {
      console.error("error")
    }
  })
}
function hotWeather() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: "GET",
    data: {
      q: "hot weather",
      "api_key": "1HVmYfFmPXlqbDQcjCutEprNI8I02kIZ"
    },
    success: function (data) {
      gif.src = data.data[2].images.downsized.url;
      gif.classList.add('gif');
      gifBox.append(gif);
    },
    error: function () {
      console.error("error")
    }
  })
}
function superHot() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search",
    method: "GET",
    data: {
      q: "sweating",
      "api_key": "1HVmYfFmPXlqbDQcjCutEprNI8I02kIZ"
    },
    success: function (data) {
      gif.src = data.data[0].images.downsized.url;
      gif.classList.add('gif');
      gifBox.append(gif);
    },
    error: function () {
      console.error("error")
    }
  })
}
function goBackHandleClick() {
  cityName.remove();
  gif.remove();
  enterCity.classList.remove('hidden');
  city.classList.remove('hidden');
  submitButton.classList.remove('hidden');
  currentTemp.classList.add('hidden');
  temp.classList.add('hidden');
  feelsLike.classList.add('hidden');
  feelsTemp.classList.add('hidden');
  minTemp.classList.add('hidden');
  minNum.classList.add('hidden');
  maxTemp.classList.add('hidden');
  maxNum.classList.add('hidden');
  humidity.classList.add('hidden');
  humidNum.classList.add('hidden');
  wind.classList.add('hidden');
  windNum.classList.add('hidden');
  gifBox.classList.add('hidden');
  goBackButton.classList.add('hidden');
  city.value = "";
}
