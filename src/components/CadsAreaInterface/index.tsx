import { useMemo, useState } from "react";
import styled from "styled-components";
import useGetPokes from "../../hooks/useGetPaginatedPokes";
import { Pokemons } from "../../interface/Pokemons";
import Pagination from "../Pagination";
import PokeCard from "../PokeCards";


const Container = styled.div`
  margin: 32px 0px 100px 20px;
  padding-right: 30px;
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
`

const CardsArea = styled.div`
  max-width: 1050px;
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
   display: flex;
   justify-content: center;
   flex-wrap: wrap;
   column-gap: 37px;
   row-gap: 38px;

`

const FailFeedback = styled.p`
width: 100%;
height: 40px;
color: #5F1478;
background-color: #ff00002f;
border-radius: 8px;
font-size: 18px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
`
interface Props {
  search: string | undefined;
  resultSearchPokes: Array<Pokemons> | undefined;
}

const CardsAreaInterface = (props: Props) => {
  const [page, setPage] = useState(1)
  const limit = 16
  const data = useGetPokes(page.toString(), limit.toString())

  const pokemons = useMemo(() => {
    return props.search ? props.resultSearchPokes : data?.results
  }, [data, props.resultSearchPokes, props.search])

  return(

     <Container>
      <CardsArea>
        <TopArea>
          <Title>Resultado de busca</Title>
          <NewCardButton>Novo Card</NewCardButton>
        </TopArea>
        <PokeArea>
          {pokemons && pokemons?.length > 0 ? pokemons.map(({name, url}) => (

          <PokeCard key={name} name={name} url={url} />
          )) : <FailFeedback>Não foram encontrados resultados para sua pesquisa!</FailFeedback>}
        </PokeArea>
        {pokemons && pokemons?.length > 0 ?
        <Pagination page={page} onChangePage={setPage} maxCount={data?.count ?? 1154} limit={limit} />
         : null}
      </CardsArea>
     </Container>
  )
}

export default CardsAreaInterface;