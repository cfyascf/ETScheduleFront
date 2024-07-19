import styled from "styled-components";

const PageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const MainContainer = styled.main`
    height: 100vh;
`

const LineDiv = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 6px;
    padding-bottom: 50px;
    padding-top: 30px;
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
`

const CardsOutside = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
`

const SectionTitle = styled.p`
    font-weight: 600;
    font-size: 1.4rem;
    align-self: flex-start;
    padding-left: 120px;
`

const ImgsIcon = styled.img`
    width: 1.5%;
    object-fit: cover;
`

export { PageContent, MainContainer, Line, CardsContainer, CardsOutside, LineDiv, SectionTitle, ImgsIcon };
