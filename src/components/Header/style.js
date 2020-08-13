import styled from "styled-components";

export const HeaderWrapper = styled.div`
	height: 75px;
	color: #cccccc;
	background-color: #242424;
	font-size: 14px;

	.content {
		height: 70px;

		display: flex;
		justify-content: space-between;
	}
	.divider {
		height: 5px;
		background-color: #c20c0c;
	}
`;

export const HeaderLeft = styled.div`
	display: flex;
	/* 网易云音乐logo */
	.logo {
		display: block;
		width: 178px;
		height: 69px;
		background-position: 0 0;
		/* 隐藏logo的文字 */
		text-indent: -9999px;
	}

	/* a标签列表 */
	.a_list {
		display: flex;
		line-height: 70px;

		/* 单个a标签 */
		.a_item {
			position: relative;
			a {
				display: block;
				padding: 0 20px;
				text-decoration: none;
				color: #ccc;
			}
			/* 最后一个a标签 */
			:last-of-type a {
				position: relative;
				::after {
					position: absolute;
					content: "";
					width: 28px;
					height: 19px;
					background-image: url(${require("@/assets/img/sprite_01.png")});
					background-position: -190px 0;
					top: 20px;
					right: -15px;
				}
			}
			/* 悬浮和激活的a标签 */
			&:hover a,
			a.active {
				background-color: #000;
				color: #fff;
      }
      /* 激活的a标签下面的icon */
			.active .icon {
				position: absolute;
				display: inline-block;
				width: 12px;
				height: 7px;
				bottom: -1px;
				left: 50%;
				transform: translate(-50%, 0);
				background-position: -226px 0;
			}
		}
	}
`;

export const HeaderRight = styled.div`
					display: flex;
					align-items: center;
					font-size: 12px;

					/* 搜索框 */
					.search {
						width: 158px;
						height: 32px;
						border-radius: 16px;
					}
					/* 搜索框placeholder属性 */
					input {
						&::placeholder {
							font-size: 12px;
							color: #9b9b9b;
						}
					}
					/* 创作者中心按钮 */
					.creator_btn {
						/* display: block; */
						width: 90px;
						height: 32px;
						line-height: 32px;
						border: 1px solid #666;
						border-radius: 16px;
						margin: 0 10px;
						background-color: transparent;
						color: #ccc;
						cursor: pointer;
						&:hover.creator_btn {
							border-color: #fff;
						}
					}

					/* 登录 */
					.login {
						display: block;
						color: #ccc;
						&:hover.login {
							color: #fff;
							text-decoration: none;
						}
					}
				`;
