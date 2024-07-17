import { IconImg, ProfileContainer, TopIcons } from "./styles"
import logout from "/icon_logout.png"
import arrow from "/icon_arrow_right.png"

const SideProfileClose = ({ toggleProfile }) => {
    return (
        <>
            <ProfileContainer>
                <TopIcons>
                    <IconImg src={arrow} onClick={toggleProfile}></IconImg>
                    <IconImg src={logout}></IconImg>
                </TopIcons>
            </ProfileContainer>
        </>
    )
}

export default SideProfileClose