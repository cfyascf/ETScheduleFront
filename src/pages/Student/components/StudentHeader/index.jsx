import { StudentContainer, StudentIcon } from "./styles"
import user from "/user.png"

const StudentHeader = () => {
    return (
        <>
            <StudentContainer>
                <StudentIcon src={user}></StudentIcon>
                Fulano
            </StudentContainer>
        </>
    )
}

export default StudentHeader