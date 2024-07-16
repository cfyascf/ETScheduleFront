import styled from 'styled-components'

const ProfileContainer = styled.div`
    width: 25%;
    background-color: #F0F0F0;
    min-height: 89vh;
`
const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const UserImg = styled.img`
    width: 200px;
`

export {ProfileContainer, UserInfo, UserImg}