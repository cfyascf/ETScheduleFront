import {FormContainer, Imgs, Forms, FormGroup, Input, Label, Button} from "./styles"
import logo from "/Bosch_symbol_logo_black_red_1.svg";

const Form = () => {
    return(
         <>
            <FormContainer>
                <Forms>
                    <Imgs src={logo} alt="Bosch Logo"/> 
                    <FormGroup>
                        <Label htmlFor="username">Full Name:</Label>
                        <Input id="username" type="text" name="user"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="birthday">Birthday:</Label>
                        <Input id="birthday" type="date" name="birthday"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="pwd">Password:</Label>
                        <Input id="pwd" type="password" name="password"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="cpwd">Password Confirm:</Label>
                        <Input id="cpwd" type="password" name="cpassword"></Input>
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Forms>
            </FormContainer>
         </>
    )
}

export default Form

