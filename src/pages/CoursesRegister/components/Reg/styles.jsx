import styled from 'styled-components';

const FormContainer = styled.div`
<<<<<<< HEAD
    width: 35vw;
    height: 78vh;
=======
    width: 36%;
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
    width: 85%;
    flex-direction: column;
`;

const Forms = styled.form`
    display: flex;
<<<<<<< HEAD
    flex-direction: column; 
=======
    flex-direction: column;
>>>>>>> feat-gabi
    width: 100%;
    align-items: center;
`;

const FormGroup = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    align-items: center;
    gap: 8px; 
    padding-bottom: 10px;
`;

const Input = styled.input`
<<<<<<< HEAD
    height: 42px;
    padding: 5px;
    width: 28vw;
=======
    padding: 11px;
    width: 100%;
>>>>>>> feat-gabi
    border: 1px solid #ccc;
    border-radius: 10px;
`;

const Select = styled.select`
<<<<<<< HEAD
    padding: 5px;
    width: 28vw;
    height: 42px;
=======
    padding: 11px;
    width: 100%;
>>>>>>> feat-gabi
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
<<<<<<< HEAD
    padding: 2px;
    width: 28vw;
=======
    padding: 4px;
    width: 100%;
>>>>>>> feat-gabi
    border: 1px solid #ccc;
    border-radius: 10px;
`;

export { FormContainer, Forms, FormGroup, Input, Select, Label, Button, FormItems, ColoredText, InputDiv ,InputColor};
