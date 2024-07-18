import styled from "styled-components";

const MainContainer = styled.main`
    height: 100vh;
`

const PageContent = styled.div`
    display: flex;
    align-items: center;
    height: 92.5vh;
    gap: 100px;
    justify-content: center;
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
    width: 600px;
    align-self: center;
`;

export { MainContainer, PageContent, PageContentItems, Imgs};