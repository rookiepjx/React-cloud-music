import styled from "styled-components";

export const SongsCoverWrapper = styled.div`
	width: 140px;
	padding: 20px 0;
	.cover {
		position: relative;
		.cover_img {
			width: 140px;
			height: 140px;
		}
		/* 封面反光效果 */
		.cover_bottom {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			background-position: 0 0;
			/* 底部播放量 */
			.info {
				display: flex;
				justify-content: space-between;
				align-items: center;
				padding: 0 10px;
				position: absolute;
				bottom: 0;
				left: 0;
				right: 0;
				background-position: 0 -537px;
				color: #ccc;
				height: 27px;
				.earphone {
					margin-right: 5px;
					display: inline-block;
					width: 14px;
					height: 11px;
					background-position: 0 -24px;
				}
				.play {
					display: inline-block;
					width: 16px;
					height: 17px;
					background-position: 0 0;
				}
			}
		}
	}

	.album_name {
		width: 140px;
		font-size: 14px;
		color: #000;
		margin-top: 5px;
	}
`;
