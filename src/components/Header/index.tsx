import styled from 'styled-components'
import impar from '../../asserts/icons/logo.png'
import backgroundImg from '../../asserts/imgs/backgroundSearch.png'
import Search from '../Search'

const Container = styled.div`
margin: 0px;
width: 100%;
height: 320px;
position: relative;
display: flex;
flex-direction: column;

`

const SearchContainer = styled.div`
width: 100%;
margin-top: 83px;
display: flex;
justify-content: center;
position: relative;
z-index: 10;
`

const Img = styled.img`
    width: 100%;
    position: absolute;
`



const LogoContainer = styled.div`
width: 100%;
height: 64px;
box-shadow: 0px 3px 6px #00000029;
background: linear-gradient(272deg, #AE276F 0%, #5F1478 100%);
display: flex;
align-items: center;
position: relative;
z-index: 10;
`
const Logo = styled.img`
width: 192px;
height: 37px;
margin-left: 23.97px;
position: relative;
z-index: 10;
`


const Header = () => {
  return (
    <Container>
      <Img src={backgroundImg} />
      <LogoContainer>
        <Logo src={impar} alt="Teste Ímpar" />
      </LogoContainer>
      <SearchContainer>
        <Search />
      </SearchContainer>
    </Container>
    )
}

export default Header