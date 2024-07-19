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
    width: 100%;
    flex-wrap: wrap;
    justify-content: center;
    padding-bottom: 30px;
    padding-top: 20px;

`

const CardsOutside = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

export { PageContent, MainContainer, Line, CardsContainer, CardsOutside };
