import { useState } from "react";
import styled from "styled-components";
import GlobalStyle from "./components/globalStyles";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import HeaderBar from "./components/header";

import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );
    const forecastFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=imperial`
    );

    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forecastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecast({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => console.log(err));
  };
  // console.log(currentWeather);
  // console.log(forecast);

  return (
    <Container>
      <GlobalStyle />
      <HeaderBar data={currentWeather} />

      <Search onSearchChange={handleOnSearchChange} />
      {currentWeather && <CurrentWeather data={currentWeather} />}
    </Container>
  );
}

export default App;

const Container = styled.div`
  /* max-width: 1080px; */
  margin: 20px auto;
`;
