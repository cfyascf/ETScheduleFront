import styled from 'styled-components';

const FormContainer = styled.div`
    width: 32vw;
    height: 570px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 22px;
`;

const FormItems = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 30px;
  
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px; 
    width: 100%;
    max-width: 400px;
`;

const FormGroup = styled.div `
    display: flex;
    flex-direction: column;
    gap: 20px; 
    padding-bottom: 20px;
    width: 28vw;
`;

const Input = styled.input`
    padding: 11px;
    width: 28vw;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
`;

const Button = styled.button`
    margin-top: 20px;
    padding: 12px;
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

const ColoredText = styled.div`
    background: linear-gradient(to right, #ED0007, #9E2896, #513B84, #345299, #007BC0, #18837e, #00884A);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    padding-bottom: 30px;
    font-weight: bold;
    font-size: 20px;
    width: 28vw;
    text-align: center;
`;

const CheckboxArea = styled.div`
    display: flex;
    flex-direction: row;
    width: 28vw;

`


export { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, CheckboxArea };
