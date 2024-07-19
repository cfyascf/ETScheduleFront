import { MenuContainer, MenuOptions} from "./styles"
import { Link } from "react-router-dom";

const AdmMenu = () => {
    return (
        <>
            <MenuOptions>
                <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/adm-home'>COURSES</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/courses'>SUBJECTS</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/login'>CLASSES</Link>
            </MenuOptions>
        </>
    )
}

export default AdmMenu