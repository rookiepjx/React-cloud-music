import styled from "styled-components";

export const PlayerBarWrapper = styled.div`
	position: fixed;
	left: 0;
	right: 0;
	bottom: 0;
	height: 53px;
	background-position: 0 0;
	background-repeat: repeat;
	.content {
		display: flex;
		/* justify-content: space-between; */
		align-items: center;
		height: 47px;
		position: absolute;
		bottom: 0;
		left: 50%;
		transform: translateX(-50%);
	}
	/* .attach_bar{
    position:absolute;
    right:10px;
    top:-8px;
    width:65px;
    height:15px;
    background-position:0 -385px;
  } */
`;

export const ControlBar = styled.div`
	display: flex;
	align-items: center;
	.prev,
	.next {
		width: 28px;
		height: 28px;
		cursor: pointer;
	}
	.prev {
		background-position: 0 -130px;
		&:hover.prev {
			background-position: -30px -130px;
		}
	}
	.next {
		background-position: -80px -130px;
		&:hover.next {
			background-position: -110px -130px;
		}
	}
	.play {
		width: 36px;
		height: 36px;
		margin: 0 8px;
		cursor: pointer;
		background-position: 0 ${(props) => (props.isPlaying ? "-165px" : "-204px")};
		&:hover.play {
			background-position: -40px
				${(props) => (props.isPlaying ? "-165px" : "-204px")};
		}
	}
`;
export const PlayBar = styled.div`
	display: flex;
	align-items: center;
	width: 642px;
	height: 34px;
	margin-left: 20px;
	.image {
		img {
			width: 34px;
			height: 34px;
			border-radius: 5px;
		}
	}
	.info {
		flex: 1;
		margin-left: 10px;
		.song {
			position: relative;
			top: 5px;
			height: 20px;
			.song-name {
				display: inline-block;
				max-width: 260px;
				overflow: hidden;
				margin-left: 10px;
				a {
					color: #e1e1e1;
				}
			}
			.mv a {
				display: inline-block;
				width: 18px;
				height: 18px;
				margin-left: 2px;
				vertical-align: -2px;
				background-position: 0 -58px;
				cursor: pointer;
				&:hover {
					background-position: -20px -58px;
				}
			}
			.singer-name {
				display: inline-block;
				max-width: 200px;
				margin-left: 10px;
				a {
					color: #9b9b9b;
				}
			}
		}
		.progress {
			display: flex;
			align-items: center;
			.ant-slider {
				width: 493px;
				margin-right: 10px;

				.ant-slider-rail {
					height: 9px;
					background: url(${require("@/assets/img/progress_bar.png")}) right 0;
				}

				.ant-slider-track {
					height: 9px;
					background: url(${require("@/assets/img/progress_bar.png")}) left -66px;
				}

				.ant-slider-handle {
					width: 22px;
					height: 24px;
					border: none;
					margin-top: -7px;
					background: url(${require("@/assets/img/sprite_icon.png")}) 0 -250px;
				}
			}
			.time {
				margin-left: 10px;
				.current-time {
					color: #e1e1e1;
				}
				.duration-time {
					color: #797979;
				}
				.divider {
					color: #797979;
					margin: 0 5px;
				}
			}
		}
	}
`;

export const OperationBar = styled.div`
	display: flex;
	align-items: center;
	.btn {
		width: 25px;
		height: 25px;
		cursor: pointer;
	}
	.favor {
		background-position: -88px -163px;
		&:hover {
			background-position: -88px -189px;
		}
	}

	.share {
		background-position: -114px -163px;
		&:hover {
			background-position: -114px -189px;
		}
	}
	.right {
		position: relative;
		width: 126px;
		padding-left: 13px;
		background-position: -147px -248px;
		.volume {
			background-position: -2px -248px;
			&:hover {
				background-position: -31px -248px;
			}
		}

		.loop {
			background-position: ${(props) => {
				switch (props.playMode) {
					case 0:
						return "-3px -344px";
					case 1:
						return "-66px -248px";
					case 2:
						return "-66px -344px";
					default:
						return "-3px -344px";
				}
			}};
			&:hover {
				background-position: ${(props) => {
					switch (props.playMode) {
						case 0:
							return "-33px -344px";
						case 1:
							return "-93px -248px";
						case 2:
							return "-93px -344px";
						default:
							return "-33px -344px";
					}
				}};
			}
		}

		.playlist {
			position:absolute;
			width: 59px;
			background-position: -42px -68px;
			&:hover {
				background-position: -42px -98px;
			}
			a{
				padding-left:15px;
			}
		}
	}
`;
