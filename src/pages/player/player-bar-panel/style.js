import styled from "styled-components";

export const PlayerBarPanelWrapper = styled.div`
	position: absolute;
	left: 50%;
	transform: translateX(-50%);
	bottom: 47px;
	width: 980px;
	height: 301px;
	overflow: hidden;
	border-radius: 6px 6px 0 0;
	color: #e2e2e2;


	.main {
		position: relative;
		display: flex;
		height: 310px;
		overflow: hidden;
		background: url(${require("@/assets/img/playpanel_bg.png")}) -1014px 0 repeat-y;

		.img {
			position: absolute;
			width: 980px;
			top: -360px;
			opacity: 0.2;
			/* 图片毛玻璃 */
			filter: blur(8px);
		}
	}
`;
