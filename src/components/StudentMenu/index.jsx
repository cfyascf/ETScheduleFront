import { MenuContainer, MenuOptions} from "./styles"
import { Link } from "react-router-dom";

const StudentMenu = () => {
    return (
        <>
            <MenuOptions>
                <Link to='/home'>CALENDÁRIO</Link> | <Link to='/courses'>MATÉRIAS</Link> | <Link to='/login'>STATUS</Link>
            </MenuOptions>
        </>
    )
}

export default StudentMenu