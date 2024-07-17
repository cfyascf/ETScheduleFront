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
    gap: 20px;
    flex-wrap: wrap;
`

const PageContentItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
`;

export { MainContainer, PageContent, CardsContainer, PageContentItems };
