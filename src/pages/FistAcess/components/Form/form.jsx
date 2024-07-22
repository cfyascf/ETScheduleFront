import {FormContainer, Imgs, Forms, FormGroup, Input, Label, Button} from "./styles"
import logo from "/Bosch_symbol_logo_black_red_1.svg";
import { useState } from "react";
import api from "../../../../services/api";
import { getHeaders } from "../../../../services/headers";
import { useLocation, useNavigate } from 'react-router-dom';

const Form = () => {

    const [fullnameInput, setFullnameInput] = useState('')
    const [birthInput, setBirthInput] = useState('')
    const [passwordInput, setPasswordInput] = useState('')
    const [confimPasswordInput, setconfimPasswordInput] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (event) => {
        event.preventDefault()

        if(fullnameInput == ''){
            toast.error("Full Name is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        if(birthInput == ''){
            toast.error("Your Birthday is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }
        if(passwordInput == ""){
            toast.error("Password is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        if(confimPasswordInput == ''){
            toast.error("Password confirmation is required", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
        }

        if(passwordInput != confimPasswordInput){
            toast.error("Passwords don't match", { 
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"})
        }

        try {
            const headers = getHeaders();
            await api.patch('/user', {
                "birthDate": birthInput,
                "fullName": fullnameInput,
                "password": passwordInput
            }, {
                headers: headers 
            });

            const userInfo = parseJwt();
            
            switch(userInfo['role']) {
                case "admin":
                    navigate("/adm-home")
                    break
                case "instructor":
                    navigate("/instructor-home")
                    break
                case "student":
                    navigate("/student-home")
                    break
            }

        } catch (error) {

            toast.error("error when registering", { 
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light"
            });
            return;
            console.error('Erro ao fazer requisição:', error);
        }
    };


    function parseJwt () {
        var base64Url = localStorage.getItem('@AUTH').split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
    
        return JSON.parse(jsonPayload);
    };


    return(
         <>
            <FormContainer>
                <Forms>
                    <Imgs src={logo} alt="Bosch Logo"/> 
                    <FormGroup>
                        <Label htmlFor="username">Full Name:</Label>
                        <Input id="username" type="text" value={fullnameInput} onChange={(e) => { setFullnameInput(e.target.value) }} name="user"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="birthday">Birthday:</Label>
                        <Input id="birthday" type="date" value={birthInput} onChange={(e) => { setBirthInput(e.target.value) }} name="birthday"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="pwd">Password:</Label>
                        <Input id="pwd" type="password" value={passwordInput} onChange={(e) => { setPasswordInput(e.target.value) }} name="password"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cpwd">Password Confirm:</Label>
                        <Input id="cpwd" type="password" value={confimPasswordInput} onChange={(e) => { setconfimPasswordInput(e.target.value) }} name="cpassword"></Input>
                    </FormGroup>
                    <Button type="submit" onClick={handleSubmit}>Enter</Button>
                </Forms>
            </FormContainer>
         </>
    )
}

export default Form

