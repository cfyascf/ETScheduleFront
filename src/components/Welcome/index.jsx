import { ColoredText, MenuContainer, WelcomeText } from "../Welcome/styles"

const Welcome = () => {
    return (                                                                                    
        <>
            <MenuContainer>
                <WelcomeText>
                    Welcome, <ColoredText> Fulano</ColoredText>!
                </WelcomeText>
            </MenuContainer>
        </>
    )
}

export default Welcome