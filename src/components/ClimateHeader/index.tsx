import styled from "styled-components"
import useGetCurrentClimate from "../../hooks/useGetCurrentClimate"
import { ClimaTempo } from "../../interface/ClimaTempo"
import { format } from "date-fns"
import ModalClimate from "../ModalClimate"
import { useState } from "react"

const Content = styled.div`
position: relative;
width: 400px;
display: flex;
justify-content: end;
`

const Container = styled.button`
height: 100%;
display: flex;
justify-items: center;
justify-content: center;
align-items: center;
gap: 10px;
background-color: transparent;
border: none;
cursor: pointer;
`

const Temperature = styled.p`
color: white;
font-size: 20px;
font-weight: 700;
text-align: end;
`
const TextDate = styled.p`
color: white;
font-size: 12px;
font-weight: 300;
`

interface Props {
    climate: ClimaTempo
}


const ClimateHeader = ({climate}: Props) => {
    const [showModal, setShowModal] = useState(false)
    const infoClimate = useGetCurrentClimate(climate?.data.icon ?? '')
    const formatDate = (date: string) => {
        if(date) {
            return format(new Date(date), 'dd/MM/yyyy')
        }
    }
    return (
        <Content>
            <Container onClick={() => setShowModal(!showModal)}>     
                <img src={infoClimate?.icon ?? ''} alt="" />
                <div>
                    <Temperature>{climate?.data.temperature}º</Temperature>
                    <TextDate>{formatDate(climate?.data.date)}</TextDate>
                </div>   
            </Container>
            {showModal ? <ModalClimate climate={climate} infoClimate={infoClimate} onCloseModal={setShowModal} /> : null}
        </Content>
    )
}

export default ClimateHeader