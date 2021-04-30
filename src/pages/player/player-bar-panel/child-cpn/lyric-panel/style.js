import styled from "styled-components";

export const LyricPanelWrapper = styled.div`
	position: relative;
	flex: 1;
	height: 262px;
	overflow-y: scroll;

	&::-webkit-scrollbar {
		display: none;
	}

	.lyric_item {
		height: 32px;
		line-height: 32px;
		text-align: center;
		color: #fff;
		word-wrap: break-word;
		transform: translateZ(0);

		&.active {
			color: skyblue;
		}
	}
`;
