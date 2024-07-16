import { NavbarContainer, ColoredLine } from "./styles"
import background from "/bosch_background.png"

const Navbar = () => {
    return (
        <>
            <NavbarContainer>
                <ColoredLine src={background}></ColoredLine>
            </NavbarContainer>
        </>
    )
}

export default Navbar;