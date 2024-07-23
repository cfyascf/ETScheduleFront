import styled from 'styled-components';

const FormContainer = styled.div`
    width: 30%;
    height: 75%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 22px;
    box-shadow: 0 0 23px 20px #08080824;
`;

const Imgs = styled.img`
    width: 200px;
    align-self: center;
    margin-bottom: 10px;
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    width: 78%;
`;

const FormGroup = styled.p`
    display: flex;
    flex-direction: column;
    gap: 10px; 
    padding-bottom: 20px;
`;

const Input = styled.input`
    padding: 11px;
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
    width: 35%;
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

export { FormContainer, Imgs, Forms, FormGroup, Input, Label, Button };
