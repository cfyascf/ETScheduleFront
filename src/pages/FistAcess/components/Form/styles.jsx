import styled from 'styled-components';

const FormContainer = styled.div`
    width: 31vw;
    height: 70vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 22px;
    box-shadow: 0 0 23px 20px #08080824;
`;

const Imgs = styled.img`
    width: 220px;
    align-self: center;
    margin-bottom:10px;
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 400px;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    padding-bottom: 10px;
`;

const Input = styled.input`
    width: 28vw;
    padding: 7px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
`;

const FormDivCompac = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`;

const Button = styled.button`
    margin-top: 10px;
    padding: 7px;
    width: 150px;
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

export { FormContainer, Imgs, Forms, FormGroup, Input, Label, Button, FormDivCompac };
