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
    padding: 20px 20px;
`
const Information = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5vh;
    width: 100%;
`
const AllGraphics = styled.div`
    display:flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
    align-items: center;
`
 
const RadarContainer = styled.div`
    display:flex;
    flex-direction: row;
`

export {MainContainer, PageContent, TopContent, Information,AllGraphics,RadarContainer}