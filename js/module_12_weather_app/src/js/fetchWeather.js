export default function fetchWeather(coordinates) {
  const refs = {
    weatherStatus: document.querySelector('#weather'),
    weatherIcon: document.querySelector('.icon'),
    location: document.querySelector('span[data-field="location"]'),
    temperature: document.querySelector('span[data-field="temp"]'),
    humidity: document.querySelector('span[data-field="humidity"]'),
    wind: document.querySelector('span[data-field="wind"]'),
    conditions: document.querySelector('span[data-field="conditions"]'),
  };

  const BASE_URL = 'http://api.weatherstack.com/current';
  const ACCESS_KEY = '76f52b79ada08087aad4412affff8aa1';

  if (typeof coordinates === 'object') {
    return fetch(
      `${BASE_URL}?access_key=${ACCESS_KEY}&query=${coordinates.latitude},${coordinates.longitude}`,
    )
      .then(res => res.json())
      .then(data => renderWeather(data));
  }

  if (typeof coordinates === 'string') {
    return fetch(`${BASE_URL}?access_key=${ACCESS_KEY}&query=${coordinates}`)
      .then(res => res.json())
      .then(data => renderWeather(data));
  }

  function renderWeather(data) {
    refs.location.innerHTML = data.location.name;
    refs.temperature.innerHTML = data.current.temperature + '&#8451';
    refs.humidity.innerHTML = data.current.humidity + '%';
    refs.wind.innerHTML = data.current.wind_speed + ' kph';
    refs.conditions.innerHTML = data.current.weather_descriptions;
    refs.weatherIcon.src = data.current.weather_icons;
    refs.weatherIcon.alt = data.current.weather_descriptions;
    refs.weatherStatus.classList.remove('is-hidden');
  }
}
