import styled from "styled-components";

const BannerDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px;
    width: 100%;
    height: 190px;
    background-color: #E0E2E5;
`
const Imgs = styled.img`
    width: 490px;
    height: 185px;
    object-fit: cover;
`
const Title = styled.h2`
    font-weight: 600;
    padding-left: 150px;
    padding-top: 50px;
    font-size: 2rem;
`

export {BannerDiv, Imgs, Title};