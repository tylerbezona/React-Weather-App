import styled from "styled-components";
import GlobalStyle from "./components/globalStyles";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";

function App() {
  const handleOnSearchChange = (searchData) => {
    console.log(searchData);
  };

  return (
    <Container>
      <GlobalStyle />
      <Search onSearchChange={handleOnSearchChange} />
      <CurrentWeather />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1080px;
  margin: 20px auto;
`;
