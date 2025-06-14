# 🌦️ Weather App

A simple, beginner-friendly web app that shows real-time weather information for any city using open APIs.

---
---

## 🚀 Live Demo

[🔗 View Live Demo](https://meet-pramanikk.github.io/Weather-app/)

---

## 🔧 Features

- 🌍 Search for any city worldwide  
- 📌 Automatically fetches latitude & longitude using Maps.co  
- 🌡️ Displays temperature in Celsius  
- ⛅ Shows weather condition with matching emoji  
- 🚫 Error handling for invalid city names  
- ⚡ Fast and responsive, using vanilla JavaScript  


## 🛠️ Tech Stack

- **HTML**
- **CSS**
- **JavaScript**
- **APIs Used**:
  - [Maps.co Geocoding API](https://geocode.maps.co/)
  - [Open-Meteo API](https://open-meteo.com/)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/weather-app.git
cd weather-app
````

Then open `index.html` in your browser or run a local server (e.g., Live Server in VS Code).

---

## 🔍 How It Works

1. User enters a city name.
2. The app uses Maps.co API to convert the city to geographic coordinates.
3. These coordinates are passed to the Open-Meteo API.
4. The response includes:

   * Temperature in °C
   * Weather code
5. The weather code is mapped to a descriptive condition and emoji.
6. Results are displayed in the UI. If an error occurs, it’s shown to the user.

---

## 📊 Example API Usage

### 🗺️ Maps.co (Geocoding)

**Endpoint**

```
https://geocode.maps.co/search?q=Delhi
```

**Sample Response**

```json
[
  {
    "lat": "28.6517178",
    "lon": "77.2219388",
    "display_name": "Delhi, India"
  }
]
```

---

### 🌐 Open-Meteo (Current Weather)

**Endpoint**

```
https://api.open-meteo.com/v1/forecast?latitude=28.6517&longitude=77.2219&current_weather=true
```

**Sample Response**

```json
{
  "current_weather": {
    "temperature": 35.6,
    "weathercode": 2
  }
}
```

---

## ⚠️ Limitations

* Only exact city names work reliably
* No support for location autocomplete
* First city match is used if there are multiple (e.g., Springfield)
* No support for weather forecast (only current data)
* No GPS or "use my location" functionality
* Smaller or rural locations may not return results
* Works best with English city names

---

## 💡 Future Improvements

* Add location autocomplete
* Support GPS-based location
* Add weather forecast (3-day or 7-day)
* Add toggle for °C/°F
* Add weather icons or animated backgrounds
* Improve UI styling and mobile responsiveness
* Add dark mode toggle

---
