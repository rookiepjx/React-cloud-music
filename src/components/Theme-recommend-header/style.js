import styled from "styled-components";

export const HotRecommendHeaderWrapper = styled.div`
	height: 33px;
	padding: 0 10px 4px 34px;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 2px solid #c10d0c;
	background-position: -225px -156px;
	.left {
		display: flex;
		align-items: center;
		.title {
			font-size: 20px;
			font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
			margin-right: 20px;
			position: relative;
		}

		.keywords {
			display: flex;
			a {
				text-decoration: none;
			}
			.item {
				.divider {
					margin: 0 15px;
					color: #ccc;
				}
				:last-of-type span {
					display: none;
				}
			}
		}
	}
	.right {
		display: flex;
		align-items: center;
		a {
			text-decoration: none;
		}
		.icon {
			display: inline-block;
			width: 12px;
			height: 12px;
			margin-left: 10px;
			background-position: 0 -240px;
		}
	}
`;
