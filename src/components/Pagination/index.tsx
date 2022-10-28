import styled from "styled-components"

const Container = styled.div`
display: flex;
margin: 30px 0px;
width: 100%;
justify-content: end;
gap: 10px;
`

const Button = styled.button`
width: 40px;
height: 40px;
border-radius: 8px;
border: none;
background-color: #E76316;
color: white;
font-weight: bold;
font-size: 18px;
cursor: pointer;
`

const Display = styled.p`
width: 40px;
height: 40px;
border-radius: 8px;
border: 1px solid #E4E4E4;
color: #5F1478;
font-weight: 600;
font-size: 18px;
display: flex;
justify-content: center;
align-items: center;
`

interface PaginationProps {
page: number;
onChangePage: (value: number) => void;
maxCount: number
limit: number
}

const Pagination = (props: PaginationProps) => {

const lastPage = props.maxCount - props.limit

const handleNextPage = () => {
    if(props.page >= 1 && props.page <= lastPage) {
        props.onChangePage(props.page + props.limit) 
    }
}

const handlePreviousPage = () => {
    if(props.page >= 17 && props.page <= props.maxCount) {
        props.onChangePage(props.page - props.limit) 
        
    }
}

const renderPage = (page: number) => {
    const displayPage = page / props.limit
    return Math.ceil(displayPage)
}

return (
        <Container>
            <Button onClick={() => handlePreviousPage()}>{'<'}</Button>
            <Display>{renderPage(props.page)}</Display>
            <Button onClick={() => handleNextPage()}>{'>'}</Button>
        </Container>
    )
}

export default Pagination;