import { BannerDiv, Imgs, Title } from "./style";
import bannerImage from "/office.svg";

const Banner = (props) => {
    return(
        <BannerDiv>
            <Title>Turminha{props.className}</Title>
            <Imgs src={bannerImage}/>
        </BannerDiv>
    )
}

export default Banner;