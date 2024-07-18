import styled from "styled-components";

const MainContainer = styled.main`
    height: 100vh;
`

const PageContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 12%;
    height: 92.5vh;
`

const PageContentItems = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-left: 100px;
    padding-right: 100px;
`;

const Imgs = styled.img`
    width: 550px;
    align-self: center;
    margin-bottom: 55px;
`;

export { MainContainer, PageContent, PageContentItems, Imgs};