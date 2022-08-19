import * as React from "react";
import styled from "styled-components";

const CurrentWeather = () => {
  return (
    <Weather>
      <Top>
        <div>
          <City>Belgrade</City>
          <WeatherDescription>Sunny</WeatherDescription>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png"></img>
      </Top>
      <Bottom>
        <Temperature>18°C</Temperature>
        <Details>
          <div className="parameter-row">
            <span className="parameter-label top details">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label border">Feels Like</span>
            <span className="parameter-value"> 22°C</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label border">Wind</span>
            <span className="parameter-value"> 2 m/s</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label border">Humidity</span>
            <span className="parameter-value"> 15%</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label border">Pressure</span>
            <span className="parameter-value"> 15 hPa</span>
          </div>
        </Details>
      </Bottom>
    </Weather>
  );
};

export default CurrentWeather;

const Weather = styled.div`
  width: 300px;
  border-radius: 6px;
  box-shadow: 10px -2px 20px 2px rgb(0 0 0 / 30%);
  color: #fff;
  background-color: #333;
  margin: 20px auto 0 auto;
  padding: 0 20px 20px 20px;
`;

const Top = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .weather-icon {
    width: 100px;
  }
`;

const City = styled.p`
  font-weight: 600;
  font-size: 18px;
  line-height: 1;
  margin: 0;
  letter-spacing: 1px;
`;

const WeatherDescription = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  margin: 0;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Temperature = styled.p`
  font-weight: 600;
  font-size: 70px;
  width: auto;
  letter-spacing: -5px;
  margin: 10px 0;
`;

const Details = styled.div`
  width: 100%;
  padding-left: 20px;

  .parameter-row {
    display: flex;
    justify-content: space-between;

    padding-left: 2px;
  }

  .parameter-label {
    text-align: left;
    font-weight: 400;
    font-size: 12px;
  }

  .parameter-label.border {
    border-left: 1px solid white;
    height: 20px;
    padding-left: 5px;
  }

  .parameter-label.details {
    font-weight: 750;
    margin-bottom: 5px;
  }

  .parameter-label.top {
    width: 100%;
    border-bottom: 1px solid white;
  }

  .parameter-value {
    text-align: right;
    font-weight: 600;
    font-size: 12px;
  }
`;
