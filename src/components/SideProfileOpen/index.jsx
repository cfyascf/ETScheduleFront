import { BigTitle, ProfileContainer, UserImg, UserInfo, IconImg, TopIcons, UserTitle , LitleInfo} from "./styles"
import user from "/userProfile.png"
import logout from "/icon_logout.png"
import arrow from "/icon_arrow_left.png"
import { Link } from "react-router-dom";

const SideProfileOpen = ({ toggleProfile}) => {
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
                        Fulano
                    </BigTitle>
                    <LitleInfo>
                        <UserTitle>
                            Date of Birth: 09/06/2003
                        </UserTitle>
                        <UserTitle>
                            Class: DTA1
                        </UserTitle>
                    </LitleInfo>
                </UserInfo>
            </ProfileContainer>
        </>
    )
}

export default SideProfileOpen;