import styled from "styled-components";

const MenuContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px 30px;
    width: 100%;
`

const WelcomeText = styled.div`
    font-size: 1.5rem;
    display: flex;

`

const ColoredText = styled.div`
    background: linear-gradient(to right, #ED0007, #9E2896, #513B84, #345299, #007BC0, #18837e, #00884A);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    
`

export {WelcomeText, ColoredText, MenuContainer}