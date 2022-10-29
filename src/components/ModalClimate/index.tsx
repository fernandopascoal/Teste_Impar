import styled from "styled-components"
import { ClimaTempo } from "../../interface/ClimaTempo"
import { format } from "date-fns"

const Container = styled.div`
    width: 100%;
    border: 1px solid #E76316;
    box-shadow: 0px 3px 6px #E763162E;
    position: absolute;
    border-radius: 8px;
    top: 55px;
    background-color: #F6F4F6;
    z-index: 10;
    padding: 16px;
`
const ButtonContainer = styled.div`
display: flex;
justify-content: end;
width: 100%;
margin-bottom: 10px;
`
const CloseButton = styled.button`
width: 25px;
height: 25px;
border-radius: 100%;
font-size: 20px;
color: #5F1478;
border: 1px solid #5F1478;
font-weight: 700;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;
&:hover{
    background-color: #5F1478;
    color: white;
}
`
const Locale = styled.p`
color: #5F1478;
font-size: 34px;
font-weight: 700;
text-align: center;
margin-bottom: 20px;
`

const Img = styled.img`
width: 70px;
`

const Temperature = styled.p`
color: #5F1478;
font-size: 32px;
font-weight: 700;
text-align: end;
`
const TextDate = styled.p`
color: #5F1478;
font-size: 16px;
font-weight: 400;
text-align: center;
`
const InfoContainer = styled.div`
margin-top: 20px;
display: flex;
justify-content: space-between;
`

const ImgContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const TempContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: end;
`

const Condition= styled.p`
color: #5F1478;
font-size: 16px;
font-weight: 400;
margin-top: 10px;
`

const Sensation= styled.p`
color: #5F1478;
font-size: 16px;
font-weight: 400;
margin-top: 10px;
`

interface Props {
    climate: ClimaTempo;
    infoClimate: {
        id: string;
        condition: string;
        icon: string;
    } | undefined;
    onCloseModal: (value: boolean) => void;
}


const ModalClimate = (props: Props) => {
    const formatDate = (date: string) => {
        if(date) {
            return format(new Date(date), 'dd/MM/yyyy')
        }
    }
    console.log(props.climate)
    return (
        <Container>
            <ButtonContainer>
                <CloseButton onClick={() => props.onCloseModal(false)}>x</CloseButton>
            </ButtonContainer>
            
            <Locale>{props.climate.name}/{props.climate.state}</Locale>
            <TextDate>{formatDate(props.climate.data.date)}</TextDate>
            <InfoContainer>
                <ImgContainer>
                    <Img src={props.infoClimate?.icon ?? ''} alt="" />
                    <Condition>{props.climate.data.condition}</Condition>
                </ImgContainer>
                <TempContainer>
                    <Temperature>{props.climate.data.temperature}º</Temperature>
                    <Sensation>Sensação termica: {props.climate.data.sensation}º</Sensation> 
                    
                </TempContainer>
            </InfoContainer>
           
        </Container>
    )
}

export default ModalClimate