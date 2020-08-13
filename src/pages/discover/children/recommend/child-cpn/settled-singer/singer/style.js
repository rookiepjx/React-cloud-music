import styled from "styled-components";

export const SingerWrapper = styled.div`
	display: flex;
	width: 210px;
	height: 62px;
	margin: 10px 0;
	.right {
		display: flex;
		flex-direction: column;
		justify-content: space-evenly;
		padding:0 12px;
		background-color: #fafafa;
		border: 1px solid #d3d3d3;
		border-left: none;
		.name {
			color: #333;
			font-size: 14px;
			font-weight: 700;
		}
		.right_box {
			.info {
				color: #666;
				font-size: 12px;
				width: 120px;
			}
		}
	}
`;
