import styled from 'styled-components';

const CardContainer = styled.div`
    border-radius: 8px;
    background-color: #f2f2f2;
 	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.158);
 	margin: 20px;
 	width: 270px;
 	display: flex;
 	flex-direction: column;
 	align-items: center;
 	justify-content: center;
 	text-align: center;
	transition: transform 0.3s ease, box-shadow 0.3s ease;

	&:hover {
		transform: scale(1.08);
		box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
	}
`;

const CardColor = styled.div`
 	width: 100%;
	height: 80px;
	background-color: blue;
	border-top-right-radius: 8px;
	border-top-left-radius: 8px;
	margin-bottom: 20px;
`;

const CardP = styled.p`
 	font-size: 18px;
 	line-height: 1.5;
 	margin-bottom: 20px;
`

export { CardContainer, CardColor, CardP };