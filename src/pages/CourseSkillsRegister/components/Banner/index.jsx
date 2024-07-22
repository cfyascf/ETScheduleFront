import React from "react";
import { BannerDiv, Imgs, Title, P } from "./style";
import bannerImage from "/board-funnel.svg";

const Banner = (props) => {
    const { opacity } = props;

    return (
        <BannerDiv style={{ backgroundColor: `${props.color}${Math.floor(opacity * 255).toString(16)}` }}>
            <div>
                <Title>{props.name}</Title>
                <P>{props.instructor}</P>
            </div>
            <Imgs src={bannerImage} />
        </BannerDiv>
    );
};

export default Banner;
