import { FooterContainer, ColoredLine } from "./styles"
import background from "/bosch_background.png"

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <ColoredLine src={background}></ColoredLine>
            </FooterContainer>
        </>
    )
}

export default Footer