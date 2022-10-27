import styled from "styled-components";


const Container = styled.div`
margin-top: 32px;
width: 100%;
display: flex;
align-items: center;
`

const CardsArea = styled.div`
max-width: 1046px;
width: 100%;
background-color: red;
`


const CardsAreaInterface = () => {
  return(
    <Container>
      <CardsArea>
        <p>teste</p>
      </CardsArea>
    </Container>
  )
}

export default CardsAreaInterface;