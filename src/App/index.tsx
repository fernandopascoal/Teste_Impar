import styled from "styled-components";
import CardsAreaInterface from "../components/CadsAreaInterface";
import Header from "../components/Header";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`



const App = () => {
  return (
    <AppContainer>  
      <Header />
      <CardsAreaInterface />
      
    </AppContainer>
  );
}

export default App;










