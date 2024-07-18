import styled from "styled-components";

const MainContainer = styled.main`
    height: 100vh;
`

const PageContent = styled.div`
    display: flex;
`

const TopContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    padding: 10px 20px;
`

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
    padding-left: 80px;
    padding-right: 80px;
`;

export {MainContainer, PageContent, TopContent, CardsContainer, PageContentItems}