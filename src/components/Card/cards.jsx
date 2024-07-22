import { CardContainer, CardColor, CardP, CardH5 } from "./styles"

const Card = (props) => {
    return (
        <CardContainer>
            <CardColor style={{ backgroundColor: props.color }}></CardColor>
            <CardP>{props.name}</CardP>
            <CardH5>{props.instructor}</CardH5>  
            <CardH5>Semestre: {props.semester}°</CardH5>  
        </CardContainer>
    );
};

export default Card;
