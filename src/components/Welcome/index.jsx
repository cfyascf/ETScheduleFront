import { ColoredText, MenuContainer, WelcomeText } from "../Welcome/styles"

const Welcome = () => {
    return (
        <>
            <MenuContainer>
                <WelcomeText>
                    Seja bem-vindo(a), <ColoredText> Fulano</ColoredText>!
                </WelcomeText>
            </MenuContainer>
        </>
    )
}

export default Welcome