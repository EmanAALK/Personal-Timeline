import React from "react";
import backgroundImg from "./media/background.jpeg";
//Components
import EventList from "./components/EventList";

//Styles
import { ThemeProvider } from "styled-components";
import { GlobalStyle, Title } from "./styles";

const theme = {
  backgroundImage: backgroundImg,
  mainColor: "#341909",
  subColor: "#c6a95f",
  margin: "50px",
};

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <div>
          <Title> Eman ALKandari's Timeline </Title>
        </div>
      </ThemeProvider>
      <EventList />
    </div>
  );
}

export default App;
