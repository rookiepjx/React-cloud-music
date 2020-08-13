import styled from "styled-components";
export const AnchorWrapper = styled.div`
	display: flex;
	margin: 5px 0;
	.left {
	}
	.right {
		padding: 0 5px;
		overflow: hidden;
		.name {
			color: #000;
			font-weight: 500;
			span {
        display: inline-block;
        margin-left:4px;
				width: 11px;
        height: 12px;
        vertical-align:middle;
        background-position: 0 0;
			}
		}
		.info {
			color: #666;
		}
	}
`;
