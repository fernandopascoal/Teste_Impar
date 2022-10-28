import { useState } from 'react';
import styled from 'styled-components';
import searchIcon from '../../asserts/icons/lupa.svg'




const SearchContainer = styled.div`
max-width: 1046px;
width: 100%;
height: 75px;
background-color: white;
border-radius: 8px;
padding-left: 28px;
padding-right: 25px;
display: flex;
`



const SearchInput = styled.input`
width: 100%;
height: 100%;
outline: none;
border: none;
font-size: 24px;
color: #757575;
font-weight: 300;
`

const SearchButton = styled.button`
    background-color: white;
    border: none;
    cursor: pointer;
`

interface Props {
  onSearchPoke: (value: string | undefined) => void
}

const Search = ({onSearchPoke}: Props) => {
  const [inputValeu, setInputValue] = useState<string | undefined>()

  return (  
    <SearchContainer>
      <SearchInput placeholder='Digite aqui sua busca...' value={inputValeu} onChange={(e) => setInputValue(e.target.value)} />
      <SearchButton onClick={() => onSearchPoke(inputValeu)}>
        <img src={searchIcon} alt="" />
      </SearchButton>
    </SearchContainer>
       
    )
}

export default Search;