import {FormContainer, Imgs, Forms, FormGroup, Input, Label, Button} from "./styles"
import logo from "/Bosch_symbol_logo_black_red_1.svg";

const Form = () => {
    return(
         <>
            <FormContainer>
                <Forms>
                    <Imgs src={logo} alt="Bosch Logo"/> 
                    <FormGroup>
                        <Label htmlFor="username">Usuário:</Label>
                        <Input id="username" type="text" name="user"></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="pwd">Senha:</Label>
                        <Input id="pwd" type="password" name="password"></Input>
                    </FormGroup>
                    <Button type="submit">Entrar</Button>
                </Forms>
            </FormContainer>
         </>
    )
}

export default Form

