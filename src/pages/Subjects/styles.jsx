import styled from "styled-components";

const MainContainer = styled.main`
    height: 100vh;
`

const PageContent = styled.div`
    display: flex;
    
`

const SkillsContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    gap: 40px;
`

const DescriptionContent = styled.div`
    background-color: #f0f0f0;
    border-radius: 10px;
    width: 80%;
    padding: 30px;
`

const Title = styled.h2`
    font-weight: 600;
    margin-bottom: 10px;
`

export {MainContainer, PageContent, SkillsContent, DescriptionContent, Title}