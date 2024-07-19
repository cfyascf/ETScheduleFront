import { CardContainer, CardColor, CardP} from "./styles"

const ClassCard = (props) => {
    return (
        <CardContainer>
            <CardColor></CardColor>
            <CardP>{props.class}</CardP>
        </CardContainer>
    );
};

export default ClassCard;
