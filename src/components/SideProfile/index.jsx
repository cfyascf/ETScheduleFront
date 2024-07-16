import { BigTitle, ProfileContainer, UserImg, UserInfo } from "./styles"
import user from "/user.png"

const SideProfile = () => {
    return (
        <>
            <ProfileContainer>
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