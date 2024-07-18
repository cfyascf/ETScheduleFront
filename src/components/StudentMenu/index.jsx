import { MenuContainer, MenuOptions} from "./styles"

const StudentMenu = () => {
    return (
        <>
            <MenuContainer>
                <MenuOptions>
                    <a>CALENDAR</a> | <a>COURSES</a> | <a>NOTIFICATIONS</a>
                </MenuOptions>
            </MenuContainer>
        </>
    )
}

export default StudentMenu