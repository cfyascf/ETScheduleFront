import styled from "styled-components";

const CardContainer = styled.div`
    border-radius: 8px;
    background-color: #f2f2f2;
 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.158);
 	margin: 20px;
	width: 16%;
 	display: flex;
 	align-items: center;
 	justify-content: space-around;
 	text-align: center;
	padding: 15px;
	transition: 300ms;

    &:hover {
        transform: scale(1.03);
		box-shadow: 0 8px 12px 0 rgba(0, 0, 0, 0.158);
    }
`

const CardP = styled.p`
 	font-size: 15.5px;
	font-weight: bold;
	margin-top: 3.2px;
	align-self: center;
`

const UserImage = styled.img`
	width: 45px;
`

export {CardContainer, CardP, UserImage}

