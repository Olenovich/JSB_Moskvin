async function getWeather() {
  const cityInput = document.getElementById('cityInput');
  const cityName = cityInput.value.trim();

  if (!cityName) {
    alert('Please enter a city name');
    return;
  }

  try {
    // Отримання координат міста
    const coordinatesResponse = await fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=90a632febc1a6c257a3292db192bb50b`);
    const coordinatesData = await coordinatesResponse.json();

    if (!coordinatesData || coordinatesData.length === 0) {
      alert('City not found');
      return;
    }

    const { lat, lon } = coordinatesData[0];

    // Отримання погоди за координатами
    const weatherResponse = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=90a632febc1a6c257a3292db192bb50b`);
    const weatherData = await weatherResponse.json();

    // Вивід інформації на сторінку
    displayWeatherInfo(weatherData);
  } catch (error) {
    console.error('Error fetching weather data:', error);
    alert('Error fetching weather data. Please try again later.');
  }
}

function displayWeatherInfo(weatherData) {
  const weatherWidget = document.getElementById('weather-widget');
  weatherWidget.innerHTML = `
    <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
    <p>Temperature: ${weatherData.main.temp}°C</p>
    <p>Weather: ${weatherData.weather[0].description}</p>
    <p>Humidity: ${weatherData.main.humidity}%</p>
    <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
  `;
}
