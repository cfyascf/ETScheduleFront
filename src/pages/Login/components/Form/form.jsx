import {FormContainer, Imgs, Forms, FormGroup, Input, Label, Button} from "./styles"
import logo from "/Bosch_symbol_logo_black_red_1.svg";
import { useEffect, useState } from "react"


const Form = () => {

    const [usernameValue, setUsername] = useState('')
    const [passwordValue, setPassword] = useState('')


    const doLogin = async () => {
        try {
            const response = await api.post(`http://localhost:8080/api/v1/login/confirm`, {
                username: usernameValue,
                password: passwordValue
            })
            console.log(response);

        } catch (error) {
            console.log(error);
        }
    }


    return(
         <>
            <FormContainer>
                <Forms>
                    <Imgs src={logo} alt="Bosch Logo"/> 
                    <FormGroup>
                        <Label htmlFor="username">Username:</Label>
                        <Input id="username" type="text" value={usernameValue} onChange={(e) => { setUsername(e.target.value) }} name="user"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="pwd">Password:</Label>
                        <Input id="pwd" type="password" value={passwordValue} onChange={(e) => { setPassword(e.target.value) }} name="password"></Input>
                    </FormGroup>
                    <Button type="button" onClick={doLogin} >Login</Button>
                </Forms>
            </FormContainer>
         </>
    )
}

export default Form

