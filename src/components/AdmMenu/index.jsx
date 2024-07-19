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
                }}to='/adm-subjects'>SUBJECTS</Link> | <Link style={{
                    textDecoration: "none",
                    color: "black"
                }}to='/adm-classes'>CLASSES</Link>
            </MenuOptions>
        </>
    )
}

export default AdmMenu