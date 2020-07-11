import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
body{
    background-image:  ${(props) => props.theme.backgroundImage};
    margin: ${(props) => props.theme.margin};
}`;

const Title = styled.h1`
  text-align: center;
  color: ${(props) => props.theme.mainColor};
`;

const EventWrapper = styled.div`
  align-text: center;
  justify-content: center;
  display: flext;
  margin: 40px;
`;

const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flext;
  margin: 30px;
`;

export { GlobalStyle, Title, EventWrapper, ListWrapper };
