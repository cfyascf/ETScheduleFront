import React from "react";
import { BannerDiv, Imgs, Title, P } from "./style";
import bannerImage from "/board-funnel.svg";

const Banner = (props) => {
    const { name, instructor, color, opacity } = props;

    return (
        <BannerDiv style={{ backgroundColor: `${color}${Math.floor(opacity * 255).toString(16)}` }}>
            <div>
                <Title>{name}</Title>
                <P>{instructor}</P>
            </div>
            <Imgs src={bannerImage} />
        </BannerDiv>
    );
};

export default Banner;
