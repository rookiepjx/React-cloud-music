import styled from "styled-components";

export const DiscoverWrapper = styled.div`
					.top {
						height: 30px;
						background-color: #c20c0c;
					}
				`;

export const TopMenu = styled.div`
	display: flex;
	padding-left: 180px;
	.item {
		a {
			display: inline-block;
			margin: 2px 18px;
			color: #fff;
			height: 20px;
			line-height: 20px;
			padding: 0 13px;
			&:hover,
			&.active {
				border-radius: 20px;
				background-color: #9b0909;
				text-decoration: none;
			}
		}
	}
`;
