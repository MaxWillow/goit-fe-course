export default function getGeoPosition() {
  const options = {
    timeout: 5000,
    maximumAge: 1800000, //30 mins
  };

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}
