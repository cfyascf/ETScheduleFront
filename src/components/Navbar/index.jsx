import { NavbarContainer, ColoredLine, NavbarContent, Brand, HomeIcon } from "./styles"
import background from "/bosch_background.png"
import logo from "/bosch_logo.svg"
import home from "/icon_home.png"

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <ColoredLine src={background}></ColoredLine>
                <NavbarContent>
                    <HomeIcon src={home}></HomeIcon>
                    <Brand src={logo}></Brand>
                </NavbarContent>
            </NavbarContainer>
        </>
    )
}

export default Navbar;