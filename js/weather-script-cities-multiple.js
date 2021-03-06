const key = '24d10e4fb421418e6e7fc7ee3e891b4c';

function weatherData() {
	fetch('https://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743' + '&appid=' + key)

	.then(function(resp) { return resp.json() }) // Convert data to json
	.then(function(data) {
		getWeatherData(data);
	})
	.catch(function() {
		// catch any errors
	});
}
function getWeatherData( d ) {
	var celcius = Math.round(parseFloat(d.main.temp)-273.15);
	var fahrenheit = Math.round(((parseFloat(d.main.temp)-273.15)*1.8)+32);
	var description = d.weather[0].description;
	var weatherMain = d.weather[0].main;
	var humidity = d.main.temp;
	var windSpeed = d.wind.speed;

	document.getElementById('description').innerHTML = description;
	document.getElementById('temp').innerHTML = celcius + '&deg;';
	document.getElementById('location').innerHTML = d.name;
	document.getElementById('humidity').innerHTML = humidity;
	document.getElementById('windSpeed').innerHTML = windSpeed;
	document.getElementById('main').innerHTML = weatherMain;

	if( description.indexOf('rain') > 0 ) {
		document.body.className = 'rainy';
	} else if( description.indexOf('cloud') > 0 ) {
		document.body.className = 'cloudy';
 	} else if( description.indexOf('sunny') > 0 ) {
		document.body.className = 'sunny';
	} else {
		document.body.className = 'clear';
	}
}
window.onload = function() {
	weatherData();
}
