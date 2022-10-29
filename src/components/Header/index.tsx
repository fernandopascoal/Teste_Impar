import styled from 'styled-components'
import impar from '../../asserts/icons/logo.png'
import backgroundImg from '../../asserts/imgs/backgroundSearch.png'
import { ClimaTempo } from '../../interface/ClimaTempo'
import ClimateHeader from '../ClimateHeader'
import Search from '../Search'

const Container = styled.div`
width: 100%;
height: 320px;
display: flex;
flex-direction: column;
`

const SearchContainer = styled.div`
margin: 83px 0px 0px 20px;
padding-right: 30px;
display: flex;
justify-content: center;
position: relative;
z-index: 5;
`

const Img = styled.img`
    width: 100%;
    min-height: 290px;
    position: absolute;
`



const LogoContainer = styled.div`
width: 100%;
height: 64px;
box-shadow: 0px 3px 6px #00000029;
padding: 0px 23.97px;
background: linear-gradient(272deg, #AE276F 0%, #5F1478 100%);
display: flex;
align-items: center;
justify-content: space-between;
position: relative;
z-index: 10;
`
const Logo = styled.img`
width: 192px;
height: 37px;
position: relative;
z-index: 10;
`
interface Props {
  onSearchPoke: (value: string | undefined) => void
  climate: ClimaTempo
}

const Header = ({onSearchPoke, climate}: Props) => {
  return (
    <Container>
      <Img src={backgroundImg} />
      <LogoContainer>
        <Logo src={impar} alt="Teste Ímpar" />
        <ClimateHeader climate={climate} />
      </LogoContainer>
      <SearchContainer>
        <Search onSearchPoke={onSearchPoke} />
      </SearchContainer>
    </Container>
    )
}

export default Header