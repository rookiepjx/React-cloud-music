import styled from "styled-components";

export const FooterWrapper = styled.div`
					height: 178px;
					color: #666;
					border-top: 1px solid #d3d3d3;
					background-color: #f2f2f2;
					/* 内容区 */
					.content {
						display: flex;
						justify-content: space-between;
						align-items: center;
					}
				`;

export const FooterLeft = styled.div`
					line-height: 24px;
					padding-top: 15px;
					/* 链接 */
					.link {
						color: #999;
          }
          /* 分割线 */
          .divider{
            margin:0 10px;
            color:#999;
          }
				`;

export const FooterRight = styled.ul`
	display: flex;

	.item {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-right: 50px;

		.link {
			display: block;
			width: 50px;
			height: 45px;
			text-indent:-9999px;

			background-image: url(${require("@/assets/img/sprite_footer_02.png")});
			background-size: 110px 450px;
		}

		:nth-child(1) .link {
			background-position: -60px -101px;
		}
		:nth-child(2) .link {
			background-position: 0 0;
		}
		:nth-child(2) .link {
			background-position: -60px -50px;
		}
		:nth-child(2) .link {
			background-position: 0 -101px;
		}

		.title {
			margin-top: 5px;
			display: block;
			width: 52px;
			height: 10px;
			background-image: url(${require("@/assets/img/sprite_footer_01.png")});
			background-size: 180px 100px;
		}

		:nth-child(1) .title {
			background-position: -1px -90px;
		}
		:nth-child(2) .title {
			background-position: 0 0;
			margin-top: 7px;
		}
		:nth-child(3) .title {
			background-position: 0 -54px;
			margin-top: 6px;
		}

		:nth-child(4) .title {
			background-position: -1px -72px;
			margin-top: 6px;
		}
	}
`;
