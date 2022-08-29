import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import styled from "styled-components";

const Forecast = ({ data }) => {
  const weekDays = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const dayInAWeek = new Date().getDay();
  const forecastDays = weekDays
    .slice(dayInAWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInAWeek));

  console.log(forecastDays);
  return (
    <Container>
      {/* <Title>FORECAST</Title> */}
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <DailyItem>
                  <img
                    alt="weather"
                    className="item-small"
                    src={`icons/${item.weather[0].icon}.png`}
                  />
                  <label className="day">{forecastDays[idx]}</label>
                  <label className="description">
                    {item.weather[0].description}
                  </label>
                  <label className="min-max">
                    {Math.round(item.main.temp_min)}°F
                  </label>
                </DailyItem>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <DailyDetailsGrid>
                <DailyDetailsGridItem>
                  <label>Pressure:</label>
                  <label>{item.main.pressure}</label>
                </DailyDetailsGridItem>
                <DailyDetailsGridItem>
                  <label>Humidity:</label>
                  <label>{item.main.humidity}%</label>
                </DailyDetailsGridItem>
                <DailyDetailsGridItem>
                  <label>Clouds:</label>
                  <label>{item.clouds.all}</label>
                </DailyDetailsGridItem>
                <DailyDetailsGridItem>
                  <label>Wind:</label>
                  <label>{Math.round(item.wind.speed)}Mph</label>
                </DailyDetailsGridItem>
                <DailyDetailsGridItem>
                  <label>Sea Level:</label>
                  <label>{item.main.sea_level}ft</label>
                </DailyDetailsGridItem>
                <DailyDetailsGridItem>
                  <label>Feels like:</label>
                  <label>{Math.round(item.main.feels_like)}°F</label>
                </DailyDetailsGridItem>
              </DailyDetailsGrid>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
};

export default Forecast;

const Container = styled.div`
  display: flex;
  justify-content: center;
  /* flex-direction: row-reverse; */
  opacity: 85%;
  margin-top: 20px;
`;

const Title = styled.label`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  font-size: 30px;
  font-weight: 900;
  color: #333;
`;

const DailyItem = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  /* width: 70%; */
  color: white;
  flex-direction: row;
  align-items: center;
  background-color: #333;
  border-radius: 15px;
  height: 40px;
  margin: 5px;
  font-size: 14px;
  padding: 5px 20px;
  cursor: pointer;

  .item-small {
    width: 40px;
  }

  .day {
    flex: 1 1;
    font-weight: 600;
    margin-left: 15px;
  }

  .description {
    flex: 1 1;
    margin-right: 15px;
    text-align: right;
    color: white;
  }

  .min-max {
    color: white;
  }
`;

const DailyDetailsGrid = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 5px;
  border-radius: 10px;
  background-color: #333;

  /* display: grid;
  grid-row-gap: 0;
  grid-column-gap: 15px;
  column-gap: 15px;
  row-gap: 0;
  flex: 1 1;
  grid-template-columns: auto auto;
  pad: 5px 15px;
  background-color: #333;
  border-radius: 15px;
  padding: 5px; */
  /* width: 71%; */
`;

const DailyDetailsGridItem = styled.div`
  display: flex;
  align-items: center;
  height: 30px;
  justify-content: space-between;

  label:first-child {
    color: White;
  }

  label:last-child {
    color: lightgrey;
  }
`;
