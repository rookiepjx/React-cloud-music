import styled from "styled-components";

export const SongInfoWrapper = styled.div`
	display: flex;
	padding: 47px 30px 40px 39px;
`;

export const InfoLeft = styled.div`
	width: 206px;
	height: 206px;
	position: relative;

	.img {
		margin: 33px;
	}

	.coverMsk {
		position: absolute;
		display: block;
		width: 206px;
		height: 205px;
		top: -4px;
		left: -4px;
		background-position: -140px -580px;
	}

	.player_link {
		margin-top: 20px;
		text-align: center;

		.music_icon {
			vertical-align: -4px;
			display: inline-block;
			width: 16px;
			height: 16px;
			background-position: -34px -863px;
		}

		a {
			color: #0c73c2;

			text-decoration: underline;
		}
	}
`;

export const InfoRight = styled.div`
	flex: 1;
	margin-left: 20px;

	.songTitle {
		i {
			display: inline-block;
			width: 54px;
			height: 24px;
			background-position: 0 -463px;
			vertical-align: -2px;
		}
		.songName {
			font-size: 24px;
			font-weight: 400;
			margin-left: 10px;
		}
	}

	.singer {
		color: #999;
		margin-top: 6px;
		.name {
			margin-left: 4px;
			color: #0c73c2;
		}
	}

	.operationBar {
		display: flex;
		align-items: center;
		margin-top: 10px;

		.play {
			display: flex;
			align-items: center;
			margin-right: 5px;

			.play-icon {
				display: inline-block;
				height: 31px;
				line-height: 31px;
				background-position: right -428px;
				&:hover {
					background-position: right -510px;
				}

				.play {
					color: #fff;
					display: flex;
					align-items: center;
					padding: 0 7px 0 7px;
					background-position: 0 -387px;
					&:hover {
						background-position: 0 -469px;
						i {
							background-position: -28px -1622px;
						}
					}

					i {
						display: inline-block;
						width: 20px;
						height: 18px;
						margin: -2px 2px 0;
						background-position: 0 -1622px;
					}
				}
			}

			.add-icon {
				display: inline-block;
				width: 31px;
				height: 31px;
				margin-left: -3px;
				padding-right: 0;
				background-position: 0 -1588px;
				text-indent: -9999px;
				&:hover {
					background-position: -40px -1588px;
				}
			}
		}

		.item {
			display: inline-block;
			height: 31px;
			margin-right: 6px;
			padding-right: 5px;
			background-position: right -1020px;
			&:hover {
				background-position: right -1106px;
			}

			.icon {
				display: inline-block;
				height: 31px;
				line-height: 31px;
				padding: 0 7px 0 28px;
				font-family: simsun;
			}

			.favor-icon {
				background-position: 0 -977px;
				&:hover {
					background-position: 0 -1063px;
				}
			}

			.share-icon {
				background-position: 0 -1225px;
				&:hover {
					background-position: 0 -1268px;
				}
			}

			.download-icon {
				background-position: 0 -2761px;
				&:hover {
					background-position: 0 -2805px;
				}
			}

			.comment-icon {
				background-position: 0 -1465px;
				&:hover {
					background-position: 0 -1508px;
				}
			}
		}
	}

	.lyrics_item {
		margin: 6px 0;
	}

	.expand {
		span {
			color: #0c73c2;
			cursor: pointer;
			.arrow {
				display: inline-block;
				width: 11px;
				height: 8px;
				background-position: ${(props) =>
					props.expand ? `-45px -520px` : `-65px -520px`};
			}
		}
	}

	.footer {
		margin-top: 20px;
		float: right;
		a {
			color: #999;
			text-decoration: underline;
			margin-right: 4px;
		}
	}
`;
