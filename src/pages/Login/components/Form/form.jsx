import {FormContainer, Imgs, Forms, FormGroup, Input, Label, Button} from "./styles"
import logo from "/Bosch_symbol_logo_black_red_1.svg";

const Form = () => {
    return(
         <>
            <FormContainer>
                <Forms>
                    <Imgs src={logo} alt="Bosch Logo"/> 
                    <FormGroup>
                        <Label htmlFor="username">Username:</Label>
                        <Input id="username" type="text" name="user"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="pwd">Password:</Label>
                        <Input id="pwd" type="password" name="password"></Input>
                    </FormGroup>
                    <Button type="submit">Login</Button>
                </Forms>
            </FormContainer>
         </>
    )
}

export default Form

