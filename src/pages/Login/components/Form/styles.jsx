import styled from 'styled-components';

const FormContainer = styled.div`
    width: 28vw;
    height: 55vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F2F2F2;
    border-radius: 22px;
    box-shadow: 0 0 23px 20px #08080824;
`;

const Imgs = styled.img`
    width: 12vw;
    align-self: center;
    margin-bottom: 20px;
`;

const Forms = styled.form`
    display: flex;
<<<<<<< HEAD
    flex-direction: column; 
=======
    flex-direction: column;
    align-items: center;
    gap: 20px; 
>>>>>>> feat-gabi
    width: 100%;
`;

const FormInput = styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;
`

const FormGroup = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    padding-bottom: 20px;
`;

const Input = styled.input`
    width: 20vw;
    padding: 11px;
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
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

export { FormContainer, Imgs, Forms, FormGroup, Input, Label, Button,FormInput };
