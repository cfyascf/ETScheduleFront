import { BannerDiv, Imgs, Title, P } from "./style";
import bannerImage from "/board-funnel.svg";

const Banner = (props) => {
    return(
        <BannerDiv style={{
            backgroundColor: props.color
        }}>
            <div>
                <Title>{props.name}</Title>
                <P>{props.instructor}</P>
            </div>
            
            <Imgs src={bannerImage}/>
        </BannerDiv>
    )
}

export default Banner;