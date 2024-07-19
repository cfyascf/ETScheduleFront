import styled from 'styled-components'

export const Modal=  styled.div `
    display: flex;
    position: fixed;
    z-index: 9999;
    margin: auto;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.6);
    width: 100%;
    height: 100%;
    align-items: center;
`

export const ModalContainer = styled.div `
    display: flex;
    margin: auto;
    width: 100%;
    max-width: 550px;
    background-color: aliceblue;
    padding: 20px;
    border-radius: 6px;
    box-shadow: 0 0 10px (0,0,0,0.081);
    z-index: 10000;
    align-items: center;
    flex-direction: column;
`

export const ImgsIcon = styled.img`
    width: 7%;
    align-self: flex-end;
    object-fit: cover;
    cursor: pointer;
`

export const Title = styled.h2 `
    font-size: 2rem;
    padding-bottom: 20px;
`

export const FormGroup = styled.div`
    display: flex;
    width: 80%;
    flex-direction: column;
    gap: 8px; 
    padding-bottom: 20px;
`;

export const Label = styled.label`
    font-size: 17.4px;
    color: #333;
`;

export const Input = styled.input`
    padding: 11px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

export const Button = styled.button`
    margin-top: 3%;
    padding: 2%;
    margin-bottom: 3%;
    width: 25%;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    align-self: center;

    &:hover {
        background-color: #0056b3;
    }
`;

