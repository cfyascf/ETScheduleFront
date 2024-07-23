import styled from 'styled-components'


const ProfileContainer = styled.div`
    width: 25%;
    background-color: #F0F0F0;
    min-height: 92.5vh;
    padding: 15px 10px;
`

const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 15px;
`

const ProfileIcons = styled.div`
    display: flex;

`

const UserImg = styled.img`
    margin-top: 30px;
    width: 100px;
`

const BigTitle = styled.h2`
    font-weight: 600;
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 10px;
    margin-top: 20px;
`
const UserTitle = styled.h3`
    font-size: 1rem;
    font-weight: 400;
`
const LitleInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const TopIcons = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const IconImg = styled.img`
    width: 35px;
`


export { ProfileContainer, UserInfo, UserImg, BigTitle, ProfileIcons, IconImg, TopIcons ,UserTitle,LitleInfo }