import styled from "styled-components";

export const SongsListWrapper = styled.div`
	position: relative;
	width: 558px;
	height: 262px;
	padding: 0 0 2px 2px;
	overflow-y: auto;
	/* 阻止滚动冒泡 */
	overscroll-behavior: contain;

	::-webkit-scrollbar {
		background: #000;
		width: 6px;
	}
	/* 滚动条滑块 */
	::-webkit-scrollbar-thumb {
		width: 6px;
		background: #404040;
		border-radius: 10px;
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
	}
	/* 滚动条轨道 */
	::-webkit-scrollbar-track {
		box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.1);
		background: #000;
		border-radius: 10px;
	}

	.song_item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 28px;
		line-height: 28px;
		padding: 0 8px 0 25px;
		color: #ccc;

		&:hover {
			background-color: rgba(0, 0, 0, 0.6);
			color: #fff;
		}
		&.active {
			background-color: rgba(0, 0, 0, 0.6);

			::before {
				content: "";
				width: 10px;
				height: 13px;
				position: absolute;
				left: 8px;
				background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
			}
		}

		.item_right {
			display: flex;
			align-items: center;

			.singer {
				width: 100px;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
			}
			.duration {
				width: 60px;
			}
			.link {
				width: 20px;
				height: 14px;
				background-position: -80px 0px;

				&:hover {
					background-position: -80px -20px;
				}
			}
		}
	}
`;
