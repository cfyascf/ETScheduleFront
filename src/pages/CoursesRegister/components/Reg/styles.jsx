import styled from 'styled-components';

const FormContainer = styled.div`
    width: 35vw;
    height: 78vh;
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
    gap: 8px; 
    padding-bottom: 10px;
`;

const Input = styled.input`
    height: 42px;
    padding: 5px;
    width: 28vw;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Select = styled.select`
    padding: 5px;
    width: 28vw;
    height: 42px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
`;

const Button = styled.a`
    margin-top: 3px;
    padding: 7px;
    width: 150px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-size: 16px;
    align-self: center;
    text-align: center;
    text-decorations: none;

    &:hover {
        background-color: #0056b3;
    }
`;

const ColoredText = styled.div`
    background: linear-gradient(to right, #ED0007, #9E2896, #513B84, #345299, #007BC0, #18837e, #00884A);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
`;

const InputColor = styled.input`
    padding: 2px;
    width: 3vw;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 2px;
`;

const InputDiv = styled.div`
    padding: 2px;
    width: 28vw;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

export { FormContainer, Forms, FormGroup, Input, Select, Label, Button, FormItems, ColoredText, InputDiv ,InputColor};
