import styled from 'styled-components'

const ProfileContainer = styled.div`
    width: 25%;
    background-color: #F0F0F0;
    min-height: 89vh;
    padding: 15px 10px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ProfileIcons = styled.div`
    display: flex;

`

const UserImg = styled.img`
    margin-top: 100px;
    width: 200px;
`

const BigTitle = styled.h2`
    font-weight: 600;
    font-size: 2rem;
`

const TopIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    
`

const IconImg = styled.img`
    width: 35px;
`

export { ProfileContainer, UserInfo, UserImg, BigTitle, ProfileIcons, IconImg, TopIcons }