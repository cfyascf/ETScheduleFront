import { ColoredText, MenuContainer, WelcomeText } from "../Welcome/styles"
import { useContext } from 'react';
import { UserContext } from '../../services/userContext';

const Welcome = () => {

    const { currentUser } = useContext(UserContext);

    return (                                                                                    
        <>
            <MenuContainer>
                <WelcomeText>
                    Welcome,<ColoredText>{currentUser.fullName}</ColoredText>!
                </WelcomeText>
            </MenuContainer>
        </>
    )
}

export default Welcome