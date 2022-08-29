import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";

import styled from "styled-components";

const HeaderBar = ({ data }) => {
  const [responseData, setResponseData] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    navigator.geolocation.getCurrentPosition(function (position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      const finalAPIEndPoint = `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`;

      axios.get(finalAPIEndPoint).then((response) => {
        setIsLoading(false);
        setResponseData(response.data);
      });
    });
  }, []);

  console.log(responseData);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <HeaderStyle>
      <HeaderNavInfo>
        <CurrentCity>{responseData.name}</CurrentCity>
        <CurrentTemp>{Math.round(responseData.main.temp)}°F</CurrentTemp>
      </HeaderNavInfo>
      <img
        alt="weather"
        className="weather-icon"
        src={`icons/${responseData.weather[0].icon}.png`}
      ></img>
    </HeaderStyle>
  );
};

export default HeaderBar;

const HeaderStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: transparent;
  padding: 15px;
  color: white;
  .weather-icon {
    width: 50px;
  }
`;

const HeaderNavInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentCity = styled.div`
  font-weight: 700;
  padding: 5px;
`;

const CurrentTemp = styled.div`
  font-weight: 700;
`;
