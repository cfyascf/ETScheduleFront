import { NavbarContainer, ColoredLine, NavbarContent, Brand } from "./styles"
import background from "/bosch_background.png"
import logo from "/bosch_logo.svg"

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <ColoredLine src={background}></ColoredLine>
                <NavbarContent>
                    <Brand src={logo}></Brand>
                </NavbarContent>
            </NavbarContainer>
        </>
    )
}

export default Navbar;