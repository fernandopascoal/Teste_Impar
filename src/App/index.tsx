import { useMemo, useState } from "react";
import styled from "styled-components";
import CardsAreaInterface from "../components/CadsAreaInterface";
import Header from "../components/Header";
import useGetAllPokes from "../hooks/useGetAllPokes";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`



const App = () => {

  const data = useGetAllPokes()
  const [search, setSearch] = useState<string | undefined>()

  const resultPokes = useMemo(() => {
    const result = data?.results.filter(({name}) => name.includes(search ?? ''))

    return result
  }, [data?.results, search])

  console.log(resultPokes)

  return (
    <AppContainer>  
      <Header onSearchPoke={setSearch} />
      <CardsAreaInterface search={search} resultSearchPokes={resultPokes} />
      
    </AppContainer>
  );
}

export default App;










