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
	padding: 0 0 0 22px;

	h3 {
		color: #e2e2e2;
		font-weight: 700;
	}

	.operators {
		button {
			background: transparent;
			color: #9b9b9b;
			cursor: pointer;
		}
		button:hover {
			color: #e2e2e2;
			.favor {
				background-position: -24px -20px;
			}

			.remove {
				background-position: -51px -20px;
			}
		}

		.icon {
			display: inline-block;
			width: 16px;
			height: 16px;
			position: relative;
			top: 4px;
			right: 2px;
		}

		.favor {
			background-position: -24px 0;
		}

		.remove {
			background-position: -51px 0;
			width: 13px;
		}
	}
`;

export const HeaderRight = styled.div`
	flex: 1;
	text-align: center;
	color: #fff;
	font-size: 14px;
	display: flex;
	justify-content: center;

	.songName {
		width: 300px;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}

	.close::after {
		position: absolute;
		content: "+";
		right: 14px;
		top: -2px;
		transform: rotate(-45deg);
		font-size: 20px;
	}
`;
