import { Link } from "react-router-dom"
import { MenuOptions } from "./styles"

const InstructorMenu = () => {
    return (
        <>
            <MenuOptions>
                <Link style={{ textDecoration: "none", color: "black" }} to='/instructor-home'>COURSES</Link> |
                <Link style={{ textDecoration: "none", color: "black" }} to='/instructor-classes'>CLASSES</Link>
            </MenuOptions>
        </>
    )
}

export default InstructorMenu