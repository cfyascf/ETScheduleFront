import { CardContainer, CardColor, CardP, CardH5 } from "./styles"

const Card = (props) => {
    return (
        <CardContainer>
            <CardColor></CardColor>
            <CardP>{props.course}</CardP>
            <CardH5>{props.name}</CardH5>
        </CardContainer>
    );
};

export default Card;
