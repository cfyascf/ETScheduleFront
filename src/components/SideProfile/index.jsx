import { BigTitle, ProfileContainer, UserImg, UserInfo, IconImg, TopIcons } from "./styles"
import user from "/user.png"
import logout from "/icon_logout.png"
import arrow from "/icon_arrow.png"

const SideProfile = () => {
    return (
        <>
            <ProfileContainer>
                <TopIcons>
                    <IconImg src={logout}></IconImg>
                    <IconImg src={arrow}></IconImg>
                </TopIcons>
                <UserInfo>
                    <UserImg src={user}></UserImg>
                    <BigTitle>
                        Fulano
                    </BigTitle>
                </UserInfo>
            </ProfileContainer>
        </>
    )
}

export default SideProfile;