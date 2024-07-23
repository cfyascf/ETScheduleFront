import styled from 'styled-components';

const FormContainer = styled.div`
<<<<<<< HEAD
    width: 30vw;
    height: 75vh;
=======
    width: 34%;
    height: 78%;
>>>>>>> feat-gabi
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
<<<<<<< HEAD
=======
    gap: 10px; 
>>>>>>> feat-gabi
    width: 100%;
    padding: 50px;

`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
<<<<<<< HEAD
    padding-bottom: 10px;
=======
    width: 100%;
    gap: 10px; 
    padding-bottom: 15px;
>>>>>>> feat-gabi
`;

const Input = styled.input`
    height: 42px;
<<<<<<< HEAD
    padding: 5px;
    width: 25vw;
=======
    padding: 11px;
    width: 537px;
>>>>>>> feat-gabi
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Label = styled.label`
    font-size: 16px;
    color: #333;
`;

const Button = styled.button`
    margin-top: 10px;
<<<<<<< HEAD
    padding: 7px;
=======
    padding: 12px;
>>>>>>> feat-gabi
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
    padding-bottom: 10px;
    font-weight: bold;
    font-size: 20px;
`;


export { FormContainer, Forms, FormGroup, Input, Label, Button, FormItems, ColoredText};
