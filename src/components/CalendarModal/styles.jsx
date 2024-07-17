import styled from 'styled-components'

export const Modal=  styled.div `
    position: fixed;
    z-index: 9999;
    margin: auto;
    top: 0;

    background-color: rgba(0,0,0,0.6);
    width: 100vw;
    height: 100vh;
`

export const ModalContainer = styled.div `

    margin: auto;
    width: 95%;
    max-width: 500px;
    margin-top: 15%;

    background-color: aliceblue;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 0 10px (0,0,0,0.081);
    z-index: 10000;
`

export const Title = styled.h2 `
    font-size: 2rem;
`
