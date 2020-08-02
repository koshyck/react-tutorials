import React from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  return (
    <div className="App">
      <div>
        <WeatherCard temp={-20} condition="Cloudy" city="London" country="GB" />
      </div>
      div className="App">
      <div>
        <WeatherCard
          temp={10}
          condition="Haze"
          city="Sydney"
          country="Australia"
        />
      </div>
      div className="App">
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
