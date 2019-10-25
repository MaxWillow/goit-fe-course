import './styles.css';

import setPNotifySettings from './js/PNotify';
import getGeoPosition from './js/getGeoPosition';
import fetchWeather from './js/fetchWeather';

getGeoPosition()
  .then(location => {
    return {
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    };
  })
  .then(coords => {
    fetchWeather(coords);
  })
  .catch(error => {
    setPNotifySettings();
  });

const refs = {
  input: document.querySelector('input[name="city"]'),
  button: document.querySelector('button[type="submit"]'),
};

let inputCity;

refs.input.addEventListener('input', handleInput);
refs.button.addEventListener('click', handleClick);

function handleInput() {
  inputCity = refs.input.value;
}

function handleClick(event) {
  event.preventDefault();
  fetchWeather(inputCity);
  refs.input.value = '';
}
