import React, { useState, useEffect } from "react";
import "./App.css";
import WeatherCard from "./components/WeatherCard/component";

function App() {
  const [query, setQuery] = useState("Sydney, au");
  const [weather, setWeather] = useState({
    temp: null,
    city: null,
    condition: null,
    country: null,
  });

  const data = async (q) => {
    const apiRes = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${q}&units=metric&APPID=146b14eae13cbb3841ed3479114fd951`
    );
    const resJSON = await apiRes.json();
    return resJSON;
  };
  //  data().then((res) => console.log(res.main.temp));
  const handleSearch = (e) => {
    e.preventDefault();
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.sys.country,
      });
    });
  };

  useEffect(() => {
    data(query).then((res) => {
      setWeather({
        temp: res.main.temp,
        city: res.name,
        condition: res.weather[0].main,
        country: res.country,
      });
    });
  }, []);

  return (
    <div className="App">
      <div>
        <WeatherCard
          temp={weather.temp}
          condition={weather.condition}
          city={weather.city}
          country={weather.country}
        />
      </div>

      <div align="center">
        <form>
          <input value={query} onChange={(e) => setQuery(e.target.value)} />
          <button onClick={(e) => handleSearch(e)}>Set City</button>
        </form>
      </div>
    </div>
  );
}

export default App;
