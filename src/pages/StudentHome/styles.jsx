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
`
const Information = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    width: 100%;
`
 
export {MainContainer, PageContent, TopContent, Information}