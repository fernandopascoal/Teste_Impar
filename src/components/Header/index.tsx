import styled from 'styled-components'
import impar from '../../asserts/icons/logo.png'

const Container = styled.div`
margin: 0px;
width: 100%;
background: linear-gradient(272deg, #AE276F 0%, #5F1478 100%);
height: 64px;
display: flex;
align-items: center;
`

const Logo = styled.img`
width: 192px;
height: 37px;
margin-left: 23.97px;;
`


const Header = () => {
    return (
        <Container>
          <Logo src={impar} alt="Teste Ímpar" />
        </Container>
    )
}

export default Header