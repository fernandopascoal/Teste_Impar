import { useMemo, useState } from "react";
import styled from "styled-components";
import CardsAreaInterface from "../components/CadsAreaInterface";
import Header from "../components/Header";
import useGetAllPokes from "../hooks/useGetAllPokes";
import useGetTemperature from "../hooks/useGetTemperature";
import { ClimaTempo } from "../interface/ClimaTempo";

const AppContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const App = () => {

  const data = useGetAllPokes()
  const [search, setSearch] = useState<string | undefined>()

  const climate = useGetTemperature()



  const resultPokes = useMemo(() => {
    const result = data?.results.filter(({name}) => name.includes(search ?? ''))

    return result
  }, [data?.results, search])

  return (
    <AppContainer>  
      <Header onSearchPoke={setSearch} climate={climate as ClimaTempo} />
      <CardsAreaInterface search={search} resultSearchPokes={resultPokes} />
      
    </AppContainer>
  );
}

export default App;










