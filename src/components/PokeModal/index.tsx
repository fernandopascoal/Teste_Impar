import styled from "styled-components"
import useGetPoke from "../../hooks/useGetPoke"

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
width: 550px;
border-radius: 8px;
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

const ImgsArea = styled.div`
 width: 100%;
 display: flex;
 justify-content: center;
 align-items: center;
 gap: 20px;
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

const Img = styled.img`
width: 150px;
`

const Title = styled.p`
color: #5F1478;
font-size: 34px;
font-weight: 700;
text-align: center;
margin-top: 25px;
text-transform: capitalize;
`

const Divider = styled.div`
border:1px solid #00000010;
background-color: #00000010;
opacity: 0.40;
height: 1px;
width: 100%;
margin-top: 28.11px;
`

const InfoArea = styled.div`
display: flex;
margin-top: 20px;
gap: 40px;
`

const Labels = styled.p`
color: #5F1478;
font-size: 18px;
font-weight: 700;
text-transform: capitalize;
display: flex;
gap: 4px;
margin-bottom: 5px;
align-items: center;
`
const Values = styled.span`
color: #263238;
font-size: 15px;
display: flex;
gap: 5px;
`

interface Props {
    url: string | undefined
    onCloseUrlShowModal: (value: string | undefined) => void; 
}

const PokeModal = ({url, onCloseUrlShowModal}: Props) => {
    
  const data = useGetPoke(url ?? '')

  console.log(data)
    return (
        <Container>
            <Modal>
                <ButtonContainer>
                    <CloseButtonTop onClick={() => onCloseUrlShowModal(undefined)}>x</CloseButtonTop>
                </ButtonContainer>  
                <ImgsArea>
                    <ImgContainer>
                        <Img src={data?.sprites.front_default ?? ''} alt="Front Poke"  />
                    </ImgContainer>  
                    <ImgContainer>
                        <Img src={data?.sprites.back_default ?? ''} alt="back Poke" />
                    </ImgContainer>    
                </ImgsArea>
                <Title>{data?.name}</Title> 
                <Divider />
                <InfoArea>
                    <div>
                        <Labels>
                            Pokedex: 
                            <Values>{data?.id}</Values>
                        </Labels>
                        <Labels>
                            Peso: 
                            <Values>{data?.weight}kg</Values>
                        </Labels>
                        <Labels>
                            Tipo: 
                            <Values>{data?.types.map(({type}) => <span>{type.name}</span>)}</Values>
                        </Labels>
                    </div>
                    <div>
                        {data?.stats.map(({stat, base_stat}) => (
                            <Labels>
                                {stat.name}:
                                <Values>{base_stat}</Values>
                            </Labels>
                        ))}
                    </div>
                </InfoArea>
            </Modal>
        </Container>
    )
}

export default PokeModal