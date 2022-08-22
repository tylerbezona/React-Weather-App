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

    const finalAPIEndPoint = `${WEATHER_API_URL}/weather?lat=${latitude}&lon=${longitude}&appid=${WEATHER_API_KEY}`;

    axios.get(finalAPIEndPoint).then((response) => {
      setResponseData(response.data);
    });
  }, []);

  return <HeaderStyle> {responseData.name} </HeaderStyle>;
};

export default HeaderBar;

const HeaderStyle = styled.div`
  background-color: lightcoral;
  padding: 15px;
`;
