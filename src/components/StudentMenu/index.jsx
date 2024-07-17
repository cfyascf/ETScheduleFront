import { ColoredText, MenuContainer, MenuOptions, WelcomeText } from "./styles"

const StudentMenu = () => {
    return (
        <>
            <MenuContainer>
                <WelcomeText>
                    Seja bem-vindo(a), <ColoredText> Fulano</ColoredText>!
                </WelcomeText>
                <MenuOptions>
                    <a>CALENDÁRIO</a> | <a>MATÉRIAS</a> | <a>NOTIFICAÇÕES</a>
                </MenuOptions>
            </MenuContainer>
        </>
    )
}

export default StudentMenu