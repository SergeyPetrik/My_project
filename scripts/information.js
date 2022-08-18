let geoLat = "47.8167";
let geoLon = "35.1833";

const getGeoOptions = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  
  function success(pos) {
    const crd = pos.coords;
  
    console.log('Your current position is:');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    geoLat = crd.latitude;
    geoLon = crd.longitude;
    geoLat = geoLat.toString().slice(0,7);
    geoLon = geoLon.toString().slice(0,7);
    makeRequest();
  }
  
  function error(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    makeRequest();
  }
  
  navigator.geolocation.getCurrentPosition(success, error, getGeoOptions);
  
  let makeRequest = function(){
    let requestURL = "https://api.openweathermap.org/data/2.5/weather?lat=&lon=&lang=en&units=metric&APPID=d59951a1c70f57c7363455002a848d1b";
    requestURL = requestURL.slice(0, requestURL.indexOf("lat=") + 4) + geoLat + requestURL.slice(requestURL.indexOf("lat=") + 4);
    requestURL = requestURL.slice(0, requestURL.indexOf("lon=") + 4) + geoLon + requestURL.slice(requestURL.indexOf("lon=") + 4);

    (async () => {
    let response = await fetch(requestURL);
    let commits = await response.json(); // читаем ответ в формате JSON
    console.log(commits);
    let weatherCity = commits.name;
    let weatherCountry = commits.sys.country;
    let weatherTemp = commits.main.temp;
    let weatherTempFeel = commits.main.feels_like;
    let weatherHum = commits.main.humidity;
    let weatherPress = commits.main.pressure;
    let weatherCond = commits.weather[0].main;
    let weatherCondGroup = commits.weather[0].description;
    let weatherIcon = commits.weather[0].icon;
    let weatherWind = commits.wind.speed;
    let weatherGust = commits.wind.gust;
    let weatherDir = commits.wind.deg;
    document.querySelector(".weather-block_city").innerHTML = "Weather forecast for: " + weatherCity + " ," + weatherCountry;
    document.querySelector(".weather-info_left").innerHTML = "Temperature: " + weatherTemp + " °C <br>";
    document.querySelector(".weather-info_left").innerHTML += "Feels like: " + weatherTempFeel + " °C <br>";
    document.querySelector(".weather-info_left").innerHTML += "Humidity: " +weatherHum + " %<br>";
    document.querySelector(".weather-info_left").innerHTML += "Pressur: " + weatherPress + " HPa";
    document.querySelector(".weather-info_right").innerHTML += weatherCond.charAt(0).toUpperCase() + weatherCond.slice(1) + "<br>";
    document.querySelector(".weather-info_right").innerHTML += weatherCondGroup.charAt(0).toUpperCase() + weatherCondGroup.slice(1) + "<br>";
    document.querySelector(".weather-info_right").innerHTML += "Wind: " +weatherWind + " m/s<br>";
    document.querySelector(".weather-info_right").innerHTML += "Gust: " +weatherGust + "m/s<br>";
    document.querySelector(".weather-info__icon").style = "background-image: url('http://openweathermap.org/img/wn/"+ weatherIcon +"@2x.png');";
    document.querySelector(".weather-info__wind-dir").style = "transform: rotate(" + weatherDir + "deg);";
})()
  }