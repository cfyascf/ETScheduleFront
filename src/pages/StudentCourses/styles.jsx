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
    padding-bottom: 30px;
`

const PageContentItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 80px;
    padding-right: 80px;
`

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
`

export { MainContainer, PageContent, CardsContainer, PageContentItems, TopContent};
