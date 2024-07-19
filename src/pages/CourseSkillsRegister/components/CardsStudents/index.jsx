import { CardContainer, CardP, UserImage } from "./styles"
import user from "/user.png";

const CardStudents = (props) => {
    return(
        <CardContainer>
            <UserImage src={user}/>
            <CardP>{props.name}</CardP>
        </CardContainer>
    )
}

export default CardStudents