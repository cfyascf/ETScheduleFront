import { BigTitle, ProfileContainer, UserImg, UserInfo, IconImg, TopIcons, UserTitle , LitleInfo} from "./styles"
import user from "/userProfile.png"
import logout from "/icon_logout.png"
import arrow from "/icon_arrow_left.png"
import { Link } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../../services/userContext';

const SideProfileOpen = ({ toggleProfile}) => {

    const { currentUser } = useContext(UserContext);
    return (
        <>
            <ProfileContainer>
                <TopIcons>
                    <Link to="/">
                        <IconImg src={logout}></IconImg>
                    </Link>
                    <IconImg src={arrow} onClick={toggleProfile}></IconImg>
                </TopIcons>
                <UserInfo>
                    <UserImg src={user}></UserImg>
                    <BigTitle>
                    {currentUser.fullName}
                    </BigTitle>
                    <LitleInfo>
                        <UserTitle>
                            Date of Birth: {currentUser.birthDate}
                        </UserTitle>
                    </LitleInfo>
                </UserInfo>
            </ProfileContainer>
        </>
    )
}

export default SideProfileOpen;