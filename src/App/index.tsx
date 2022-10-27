import Header from "../components/Header";
import styled from 'styled-components';



export const Container = styled.div`
  margin: 0px;
  padding: 0px;
`;


const App = () => {
  return (
    <div className="App">  
      <Container>
        <Header />
      </Container>     
    </div>
  );
}

export default App;










