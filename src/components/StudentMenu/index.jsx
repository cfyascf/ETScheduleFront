import { MenuContainer, MenuOptions} from "./styles"
import { Link } from "react-router-dom";

const StudentMenu = () => {
    return (
        <>
            <MenuOptions>
                <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/student-home'>CALENDAR</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/courses'>COURSES</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/personal-report'>PERSONAL REPORT</Link>
            </MenuOptions>
        </>
    )
}

export default StudentMenu