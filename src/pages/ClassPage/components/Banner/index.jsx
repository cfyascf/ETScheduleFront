import { BannerDiv, Imgs, Title } from "./style";
import bannerImage from "/office.svg";

const Banner = (props) => {
    return(
        <BannerDiv>
            <Title>{props.name}</Title>
            <Imgs src={bannerImage}/>
        </BannerDiv>
    )
}

export default Banner;