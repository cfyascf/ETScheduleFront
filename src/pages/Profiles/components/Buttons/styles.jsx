import styled from "styled-components";

const OptionsContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
`;

const PathContainer = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #f2f2f2;
    padding: 20px;
    margin: 50px;
    height: 100px;
    width: 300px;
    border-radius: 10px;
    gap: 20px;
`

const Path = styled.a `
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    font-size: 1.3rem;
    color: rgb(32,32,32)
`;

const Imgs = styled.img `
    height: 70px;
`

export {
    OptionsContainer, Path, PathContainer, Imgs
}