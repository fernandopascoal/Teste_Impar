import styled from "styled-components";
import PokeCard from "../PokeCards";


const Container = styled.div`
  margin-top: 32px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const CardsArea = styled.div`
  max-width: 1046px;
  width: 100%;
`
const TopArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

const Title = styled.p`
  color: #5F1478;
  font-size: 32px;
`
const NewCardButton = styled.button`
  background-color: #E76316;
  width: 173px;
  height: 48px;
  font-size: 18px;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  box-shadow: 0px 3px 6px #92207242;
  cursor: pointer;
`

const PokeArea = styled.div`
   margin-top: 36px;
   width: 100%;
`


const CardsAreaInterface = () => {
  return(
    <Container>
      <CardsArea>
        <TopArea>
          <Title>Resultado de busca</Title>
          <NewCardButton>Novo Card</NewCardButton>
        </TopArea>
        <PokeArea>
          <PokeCard />
        </PokeArea>
      </CardsArea>
    </Container>
  )
}

export default CardsAreaInterface;