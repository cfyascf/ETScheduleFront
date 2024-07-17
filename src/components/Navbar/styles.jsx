import styled from 'styled-components'

const NavbarContainer = styled.div `
    width: 100%;
    height: 6.5vh;

    display: flex;
    flex-direction: column;
    border-bottom: 1px solid rgba(0, 0, 0, 0.15);
`

const ColoredLine = styled.img `
    width: 100%;
    height: 1vh;
    object-fit: cover;
`

const NavbarContent = styled.div `
    width: 100%;
    height: 5.5vh;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 30px 0px 30px;
`

const Brand = styled.img `
    width: 150px;
`

export { NavbarContainer, ColoredLine, NavbarContent, Brand }

