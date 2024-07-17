import styled from "styled-components";

const MainContainer = styled.main`
    height: 100vh;
    display: flex;
    flex-direction: column; 
`;

const PageContent = styled.div`
    display: flex;
`;

const CardsContainer = styled.div`
    display: flex;
    flex-direction: column; 
    gap: 20px;
`

export { MainContainer, PageContent, CardsContainer };
