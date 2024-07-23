import styled from 'styled-components';

const FormContainer = styled.div`
<<<<<<< HEAD
    width: 31vw;
    height: 70vh;
=======
    width: 30%;
    height: 75%;
>>>>>>> feat-gabi
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
<<<<<<< HEAD
    margin-bottom:10px;
=======
    margin-bottom: 10px;
>>>>>>> feat-gabi
`;

const Forms = styled.form`
    display: flex;
    flex-direction: column;
<<<<<<< HEAD
    width: 100%;
    max-width: 400px;
=======
    gap: 10px; 
    width: 78%;
>>>>>>> feat-gabi
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
<<<<<<< HEAD
    margin-top: 10px;
    padding: 7px;
    width: 150px;
=======
    margin-top: 20px;
    padding: 12px;
    width: 35%;
>>>>>>> feat-gabi
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
