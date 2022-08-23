import React, { useEffect, useState } from "react";
import axios from "axios";
import { WEATHER_API_URL, WEATHER_API_KEY } from "../api";

import styled from "styled-components";

const HeaderBar = ({ data }) => {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [responseData, setResponseData] = useState({});

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    });

    const finalAPIEndPoint = `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}&units=imperial`;

    axios.get(finalAPIEndPoint).then((response) => {
      setResponseData(response.data);
    });
  }, []);

  const currentCity = JSON.stringify(responseData.name);

  console.log(responseData);
  return (
    <HeaderStyle>
      <HeaderNavInfo>
        <CurrentCity>{currentCity.slice(1, -1)}</CurrentCity>
        <CurrentTemp>
          {JSON.stringify(Math.round(responseData.main.temp))}°F
        </CurrentTemp>
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
  background-color: lightblue;
  padding: 15px;

  .weather-icon {
    width: 50px;
  }
`;

const HeaderNavInfo = styled.div`
  display: flex;
  align-items: center;
`;

const CurrentCity = styled.div`
  padding: 5px;
`;

const CurrentTemp = styled.div``;
