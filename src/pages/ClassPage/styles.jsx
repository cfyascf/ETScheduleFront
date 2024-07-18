import styled from "styled-components";

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainContainer = styled.main`
    height: 100vh;
`

const Line = styled.div`
    width: 90%;
    height: 1px;
    background-color: #5a5a5a;
`
const CardsContainer = styled.div`
    display: flex;
    width: 92%;
    gap: 20px;
    flex-wrap: wrap;
    padding-bottom: 30px;
`


export {PageContent, MainContainer, Line, CardsContainer};