
let cityInput = document.querySelector('#city');
let day = document.querySelector('.day')
let date_year = document.querySelector('.date');
let time = document.querySelector('.time');
let temp = document.querySelector('.temp');
let max_temp = document.querySelector('.max-temp');
let min_temp = document.querySelector('.min-temp');
let windSpeed = document.querySelector('.wind-speed');
let humidity = document.querySelector('.humidity');
let pressure = document.querySelector('.pressure');
let sunrise_time = document.querySelector('.sunrise-time');
let sunset_time = document.querySelector('.sunset-time');
let weather_status = document.querySelector('.weather-status');
let image = document.querySelector('.image');


document.addEventListener('keyup', showWeather);
function showWeather(e) {

  if (e.keyCode === 13) {
    let city = cityInput.value;

    const xhttp = new XMLHttpRequest;
    xhttp.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=05e9679fb33ea07d94dd8fa6b5ca9f85&units=metric`, true);

    xhttp.onload = function () {

      if (xhttp.readyState === 4 && xhttp.status === 200) {
        displayResult(JSON.parse(xhttp.responseText));
      }
    }
    xhttp.send();
  }
}

function displayResult(data) {
  let date = new Date();
  let localTime = date.getTime();
  let localOffset = date.getTimezoneOffset() * 60000;
  let utc = localTime + localOffset;
  let utcTime = utc + 1000 * data.timezone;
  let newCity = new Date(utcTime);

  let msunrise = new Date(data.sys.sunrise * 1000).getMinutes();
  let msunset = new Date(data.sys.sunset * 1000).getMinutes();
  let hsunrise = new Date(data.sys.sunrise * 1000).getHours();
  let hsunset = new Date(data.sys.sunset * 1000).getHours();


  let cityHour = newCity.getHours();
  let cityMinute = newCity.getMinutes();

  if (cityHour < 10) {
    time.innerHTML = `0${cityHour}:${cityMinute}h`;
  } else {
    time.innerHTML = `${cityHour}:${cityMinute}h`;
  }
  if (cityMinute < 10) {
    time.innerHTML = `${cityHour}: 0${cityMinute}h`;
  } else {
    time.innerHTML = `${cityHour}:${cityMinute}h`;
  }

  temp.innerHTML = `${Math.round(data.main.temp)} &deg;C`;
  console.log(data);
  max_temp.innerHTML = `Max: ${Math.round(data.main.temp_max)} &deg;C`
  min_temp.innerHTML = `Min: ${Math.round(data.main.temp_min)} &deg;C`

  windSpeed.innerHTML = `${data.wind.speed} km/h`;
  humidity.innerHTML = `${data.main.humidity} %`;
  pressure.innerHTML = `${data.main.pressure} hPa`;

  if (hsunrise < 10) {
    sunrise_time.innerHTML = `0 ${hsunrise} : ${msunrise} h`;
  } else {
    sunrise_time.innerHTML = ` ${hsunrise} : ${msunrise} h`;
  }
  if (hsunset < 10) {
    sunset_time.innerHTML = `0 ${hsunset} : ${msunset}  h`;
  } else {
    sunset_time.innerHTML = `${hsunset} : ${msunset}  h`;
  }

  weather_status.innerHTML = `Weather Status: ${data.weather[0].description}`

  let curentStatus = data.weather[0].description;

  if (curentStatus.includes("clear sky")) {
    image.innerHTML = ` <img src="theme/img/clearSky.png" alt="image" class="image"></img>`;
  } 
  else if (curentStatus.includes("few clouds")) {
    image.innerHTML = ` <img src="theme/img/fewClouds.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("scattered clouds")) {
    image.innerHTML = ` <img src="theme/img/scatteredClouds.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("broken clouds")) {
    image.innerHTML = ` <img src="theme/img/brokenClouds.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("shower rain")) {
    image.innerHTML = ` <img src="theme/img/showerRain.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("rain")) {
    image.innerHTML = ` <img src="theme/img/rain.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("thunderstorm")) {
    image.innerHTML = ` <img src="theme/img/thunderstorm.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("snow")) {
    image.innerHTML = ` <img src="theme/img/snow.png" alt="image" class="image"></img>`;
  }
  else if (curentStatus.includes("mist")) {
    image.innerHTML = ` <img src="theme/img/mist.png" alt="image" class="image"></img>`;
  }
  
  let days= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  day.innerHTML = days[newCity.getDay()];
  date_year.innerHTML = ` ${months[newCity.getMonth()]} ${newCity.getUTCDate()}, ${newCity.getFullYear()}`;
  

}




