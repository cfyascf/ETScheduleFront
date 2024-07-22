import { BigTitle, ProfileContainer, UserImg, UserInfo, IconImg, TopIcons, UserTitle , LitleInfo, RootContainer, CreateContainer, IconCreate} from "./styles"
import user from "/userProfile.png"
import logout from "/icon_logout.png"
import arrow from "/icon_arrow_left.png"
import event from "/calendar.png"
import books from "/books.png"
import lesson from "/teacher.png"
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom"

const SideProfileOpenInstro = ({ toggleProfileInstro}) => {
    const location = useLocation();
    const currentUser = location.state.user;
    console.log(currentUser)

    return (
        <>
            <ProfileContainer>
                <TopIcons>
                    <Link to="/">
                        <IconImg src={logout}></IconImg>
                    </Link>
                    <IconImg src={arrow} onClick={toggleProfileInstro}></IconImg>
                </TopIcons>
                <UserInfo>
                    <UserImg src={user}></UserImg>
                    <BigTitle>
                        { currentUser.fullname }
                    </BigTitle>
                    <LitleInfo>
                        <UserTitle>
                            Date of Birth: { currentUser.birthDate }
                        </UserTitle>
                    </LitleInfo>
                    <CreateContainer>
                        <RootContainer>
                            <Link to="/register-event" style={{textDecoration:"none", color: "black" , display: "flex", flexDirection: "row", gap: '10px'}}>
                                <IconCreate src={event} />
                                <UserTitle>Create Event</UserTitle>
                            </Link>
                        </RootContainer>
                        <RootContainer>
                            <Link to="/courses-register" style={{textDecoration:"none", color: "black", display: "flex", flexDirection: "row", gap: '10px'}}>
                                <IconCreate src={books} />
                                <UserTitle>Create Courses</UserTitle>
                            </Link>
                        </RootContainer>
                        <RootContainer>
                            <Link to="/register-lesson" style={{textDecoration:"none", color: "black", display: "flex", flexDirection: "row", gap: '10px'}}>
                                <IconCreate src={lesson} />
                                <UserTitle>Create Lesson</UserTitle>
                            </Link>
                        </RootContainer>
                    </CreateContainer>
                </UserInfo>
            </ProfileContainer>
        </>
    )
}

export default SideProfileOpenInstro;