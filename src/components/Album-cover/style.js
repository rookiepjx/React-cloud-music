import styled from "styled-components";

export const AlbumCoverWrapper = styled.div`
	width: ${(props) => props.width + "px"};
	font-size: 12px;

	.album_img {
		position: relative;
		width: ${(props) => props.width + "px"};
		height: ${(props) => props.size + "px"};
		margin-top: 12px;
		.img {
			width: ${(props) => props.size + "px"};
			height: ${(props) => props.size + "px"};
		}
		.cover {
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			background-position: 0 ${(props) => props.bgp};
		}
	}
	.album_info {
		width: ${(props) => props.size + "px"};
		.album_name {
			/* display: inline; */
			color: #000;
		}
		.album_artist_name {
			color: #666;
		}
	}
`;
