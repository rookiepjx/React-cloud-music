import styled from "styled-components";

export const PanelHeaderWrapper = styled.div`
	position: relative;
	display: flex;
	height: 41px;
	line-height: 41px;
	background: url(${require("@/assets/img/playpanel_bg.png")}) 0 0;
`;

export const HeaderLeft = styled.div`
	display: flex;
	justify-content: space-between;
	width: 553px;
	padding: 0 22px;

	h3 {
		color: #e2e2e2;
		font-weight: 700;
	}
`;

export const HeaderRight = styled.div`
	flex: 1;
	text-align: center;
	color: #fff;
	font-size: 14px;

	.close::after {
		position: absolute;
		content: "+";
		right: 14px;
		top: -2px;
		transform: rotate(-45deg);
    font-size:20px;
	}
`;
