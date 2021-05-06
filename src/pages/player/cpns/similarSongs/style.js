import styled from "styled-components";

export const SimilarSongsWrapper = styled.div`
	margin-top: 40px;
	.songItem {
		display: flex;
		justify-content: space-between;
		align-items: center;

		margin-bottom: 6px;
		min-width: 0;
		.songInfo {
			width: 156px;
			.singer {
				color: #999;
			}
		}
		.operations {
			.item {
				display: inline-block;
				width: 10px;
				height: 11px;
			}

			.play {
				background-position: -69px -455px;
				margin-right: 10px;
			}

			.add {
				background-position: -87px -454px;
			}
		}
	}
	.appDownload {
		margin-top: 20px;
		.devices {
			display: flex;
			justify-content: space-between;
			.item {
				height: 58px;
			}
			.ios {
				width: 42px;
				background-position: 0 -390px;
				&:hover {
					background-position: 0 -470px;
				}
			}
			.pc {
				width: 62px;
				background-position: -70px -390px;
				&:hover {
					background-position: -70px -470px;
				}
			}
			.android {
				width: 42px;
				background-position: -160px -390px;
				&:hover {
					background-position: -160px -470px;
				}
			}
		}
	}
	.syncAlbum {
		color: #999;
		margin-top: 40px;
	}
	.songProfile {
		margin-top: 40px;
	}
`;
