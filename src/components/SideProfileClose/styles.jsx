import styled from 'styled-components'

const ProfileContainer = styled.div`
    width: 4%;
    background-color: #F0F0F0;
    min-height: 92.5vh;
    padding: 15px 10px;
`

const TopIcons = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const IconImg = styled.img`
    width: 35px;
`

export {ProfileContainer, TopIcons, IconImg}