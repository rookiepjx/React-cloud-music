import styled from "styled-components";

export const NewAlbumWrapper = styled.div`
	margin-top: 50px;
	.newAlbum {
		display: flex;
		align-items: center;
		height: 186px;
		margin: 20px 0;
		background-color: #f5f5f5;
		border: 1px solid #d3d3d3;
		.arrow {
			width: 25px;
			height: 25px;
			cursor: pointer;
		}
		.arrow-left {
			background-position: -260px -75px;
		}
		.arrow-right {
			background-position: -295px -75px;
		}
		.content {
			width: 640px;
			height: 150px;
			.ant-carousel .slick-slide {
				height: 150px;
				overflow: hidden;
			}
			.album_item {
				display: flex !important;
				justify-content: space-between;
				align-items: center;
			}
		}
	}
`;
