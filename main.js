var submitButton = document.getElementById('submit');
var goBackButton = document.getElementById('go-back');
var textBox = document.getElementById('textbox');
var text = document.getElementById('text');
var city = document.getElementById('city');
var cityName = document.createElement('h2');
var currentTemp = document.getElementById('current-temp');
var temp = document.getElementById('temp');
var feelsLike = document.getElementById('feels-like');
var feelsTemp = document.getElementById('feels-temp');
var gifBox = document.getElementById('gif');
var gif = document.createElement('img');

submitButton.addEventListener('click', submitHandleClick);
goBackButton.addEventListener('click', goBackHandleClick);

function submitHandleClick() {
  $.ajax({
    url: "http://api.openweathermap.org/data/2.5/weather",
    method: "GET",
    data: {
      q: text.value,
      units: "imperial",
      appid: "5565e1f156c4507739babb68ef645172"
    },
    success: function (data) {
      city.classList.add('hidden');
      text.classList.add('hidden');
      submitButton.classList.add('hidden');
      currentTemp.classList.remove('hidden');
      temp.classList.remove('hidden');
      feelsLike.classList.remove('hidden');
      feelsTemp.classList.remove('hidden');
      temp.textContent = data["main"]["temp"] + "°F";
      feelsTemp.textContent = data["main"]["feels_like"] + "°F";
      gifBox.classList.remove('hidden');
      goBackButton.classList.remove('hidden');
      cityName.textContent = text.value;
      cityName.classList.add('p-grow-30');
      textBox.append(cityName);
      if (data["main"]["temp"] < 32) {
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
      if (data["main"]["temp"] <= 50 && data["main"]["temp"] >= 32) {
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
      if (data["main"]["temp"] <= 70 && data["main"]["temp"] >= 50) {
        $.ajax({
          url: "http://api.giphy.com/v1/gifs/search",
          method: "GET",
          data: {
            q: "robert redford agree nod",
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
      if (data["main"]["temp"] <= 80 && data["main"]["temp"] >= 70) {
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
      if (data["main"]["temp"] <= 90 && data["main"]["temp"] >= 80) {
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
      if (data["main"]["temp"] > 90) {
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
    },
    error: function () {
      console.error("error")
    }
  });
}

function goBackHandleClick() {
  cityName.remove();
  gif.remove();
  city.classList.remove('hidden');
  text.classList.remove('hidden');
  submitButton.classList.remove('hidden');
  currentTemp.classList.add('hidden');
  temp.classList.add('hidden');
  feelsLike.classList.add('hidden');
  feelsTemp.classList.add('hidden');
  gifBox.classList.add('hidden');
  goBackButton.classList.add('hidden');
  text.value = "";
}
