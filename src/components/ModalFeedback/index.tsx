import styled from "styled-components"

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background-color: #0000005c;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 100;
`

const Modal = styled.div`
width: 438px;
height: 434px;
background-color: white;
box-shadow: 0px 3px 6px #00000029;
padding: 50px 49px 33px 49px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
`

const ButtonContainer = styled.div`
display: flex;
justify-content: end;
width: 100%;
margin-bottom: 10px;
`
const CloseButtonTop = styled.button`
width: 34px;
height: 34px;
border-radius: 100%;
font-size: 20px;
color: white;
border: none;
background-color: #E76316;
position: absolute;
top: -15px;
right: -15px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover{
    background-color: #fc4700;
}
`

const ImgContainer = styled.div`
 width:159px;
 height: 159px;
 border-radius: 100%;
 background-color: #DB25250F;
 border: 6px solid #E4E4E4;
 display: flex;
 justify-content: center;
 align-items: center;
`

const Simbol = styled.p`
width: 60px;
height: 60px;
border-radius: 100%;
font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
color: #DB2525;
font-size: 50px;
font-weight: 700;
text-align: center;
display: flex;
justify-content: center;
align-items: center;
`

const Title = styled.p`
color: #DB2525;
font-size: 34px;
font-weight: 700;
text-align: center;
margin-top: 25px;
`

const Feedback = styled.p`
color: #454545;
font-size: 12px;
font-weight: 700;
text-align: center;
margin-top: 13px;
text-transform: uppercase;
`

const Divider = styled.div`
border:1px solid #00000010;
background-color: #00000010;
opacity: 0.40;
height: 1px;
width: 100%;
margin-top: 28.11px;
`

const CloseButton = styled.button`
width: 100%;
height: 48px;
border-radius: 8px;
border: 1px solid #DB2525;
background-color: white;
font-size: 18px;
font-weight: 700;
color: #DB2525;
display: flex;
justify-content: center;
align-items: center;
margin-top: 22.89px;
cursor: pointer;
&:hover{
    background-color: #DB2525;
    color: white;
}
`

interface Props {
    onCloseModal: (value: boolean) => void;
}


const ModalFeedback = ({onCloseModal}: Props) => {

    return (
        <Container>
            <Modal>
            <ButtonContainer>
                <CloseButtonTop onClick={() => onCloseModal(false)}>x</CloseButtonTop>
            </ButtonContainer>
            <ImgContainer>
            <Simbol>i</Simbol>
            </ImgContainer>
            <Title>Lamentamos!</Title>
            <Feedback>Essa função ainda não foi implementada</Feedback>
            <Divider />
            <CloseButton onClick={() => onCloseModal(false)}>Fechar</CloseButton>
            </Modal>
        </Container>
    )
}

export default ModalFeedback