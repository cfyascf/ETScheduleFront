import { MenuContainer, MenuOptions} from "./styles"
import { Link } from "react-router-dom";

const StudentMenu = () => {
    return (
        <>
            <MenuOptions>
                <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/home'>CALENDÁRIO</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/courses'>MATÉRIAS</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/login'>PERSONAL REPORT</Link>
            </MenuOptions>
        </>
    )
}

export default StudentMenu