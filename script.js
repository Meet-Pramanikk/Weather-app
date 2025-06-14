const cityInput = document.getElementById("cityInput");
const searchBtn = document.getElementById("searchBtn");
const locationText = document.getElementById("location");
const temperatureText = document.getElementById("temperature");
const conditionText = document.getElementById("condition");
const weatherBox = document.getElementById("weatherBox");
const errorText = document.getElementById("error");


searchBtn.addEventListener("click", async () => {
  const city = cityInput.value.trim();
  if (!city) {
    alert("Please enter a city name.");
    return;
  }

  try {

    const geoRes = await fetch(`https://geocode.maps.co/search?q=${encodeURIComponent(city)}`);
    const geoData = await geoRes.json();

    if (!geoData.length) {
      errorText.classList.remove("d-none");
      weatherBox.classList.add("d-none");
      return;
    }

    const lat = geoData[0].lat;
    const lon = geoData[0].lon;

  
    const weatherRes = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`);
    const weatherData = await weatherRes.json();

    const temp = weatherData.current_weather.temperature;
    const code = weatherData.current_weather.weathercode;

 
    locationText.textContent = geoData[0].display_name;
    temperatureText.textContent = `${temp} °C`;
    conditionText.textContent = mapCode(code);
    weatherBox.classList.remove("d-none");
    errorText.classList.add("d-none");

  } catch (error) {
    console.error(error);
    errorText.classList.remove("d-none");
    weatherBox.classList.add("d-none");
  }
});

function mapCode(code) {
  const codes = {
    0: "Clear sky ☀️",
    1: "Mainly clear 🌤️",
    2: "Partly cloudy ⛅",
    3: "Overcast ☁️",
    45: "Fog 🌫️",
    48: "Fog 🌫️",
    51: "Drizzle 🌧️",
    61: "Rain 🌦️",
    71: "Snow ❄️",
    95: "Thunderstorm ⛈️",
    99: "Heavy storm ⚡"
  };
  return codes[code] || "Unknown";}