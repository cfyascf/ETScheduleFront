import styled from 'styled-components';

const FormContainer = styled.div`
    width: 710px;
    height: 620px;
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
    gap: 20px; 
    width: 100%;
    max-width: 400px;
`;

const FormGroup = styled.p`
    display: flex;
    flex-direction: column;
    gap: 8px; 
    padding-bottom: 20px;
`;

const Input = styled.input`
    padding: 11px;
    width: 550px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
`;

const Button = styled.button`
    margin-top: 3px;
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
    padding-bottom: 20px;
    font-weight: bold;
    font-size: 20px;
`;

const InputColor = styled.input`
    padding: 2px;
    width: 50px;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 2px;
`;

const InputDiv = styled.div`
    padding: 4px;
    width: 550px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

export { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText, InputColor, InputDiv };
