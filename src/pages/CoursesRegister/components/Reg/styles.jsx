import styled from 'styled-components';

const FormContainer = styled.div`
    width: 36%;
    height: 78%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 22px;
`;

const FormItems = styled.div`
    display: flex;
    align-items: center;
    width: 85%;
    flex-direction: column;
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    gap: 8px; 
    padding-bottom: 20px;
`;

const Input = styled.input`
    padding: 11px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Select = styled.select`
    padding: 11px;
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
    align-self: flex-start;
`;

const Button = styled.a`
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
    text-align: center;
    text-decoration: none;

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
    width: 100%;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

export { FormContainer, Forms, FormGroup, Input, Select, Label, Button, FormItems, ColoredText, InputDiv ,InputColor};
