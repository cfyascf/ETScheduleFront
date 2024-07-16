import { ProfileContainer, UserImg, UserInfo } from "./styles"
import user from "/user.png"

const SideProfile = () => {
    return (
        <>
            <ProfileContainer>
                <UserInfo>
                    <UserImg src={user}>

                    </UserImg>
                    Fulano
                </UserInfo>
            </ProfileContainer>
        </>
    )
}

export default SideProfile;