import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const data = async () => {
    const apiRes = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=Sydney&country=Aus&units=metric&APPID=146b14eae13cbb3841ed3479114fd951"
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  data().then((res) => console.log(res.main.temp));
  return (
    <div className="App">
      <div>
        <WeatherCard temp={-20} condition="Cloudy" city="London" country="GB" />
      </div>
      <div>
        <WeatherCard
          temp={10}
          condition="Haze"
          city="Sydney"
          country="Australia"
        />
      </div>
      <div>
        <WeatherCard
          temp={40}
          condition="Sunny"
          city="Melbourne"
          country="Australia"
        />
      </div>
    </div>
  );
}

export default App;
