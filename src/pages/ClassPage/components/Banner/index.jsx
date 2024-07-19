import { BannerDiv, Imgs, Title } from "./style";
import bannerImage from "/office.svg";

const Banner = () => {
    return(
        <BannerDiv>
            <Title>Soluções Digitais 1</Title>
            <Imgs src={bannerImage}/>
        </BannerDiv>
    )
}

export default Banner;