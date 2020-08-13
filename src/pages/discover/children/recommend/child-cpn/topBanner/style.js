import styled from "styled-components";
export const BannerWrapper = styled.div`
	/* 根据参数动态改变毛玻璃背景*/
	background: url(${(props) => props.bgImage}) center center/6000px;

	.banner {
		height: 285px;
		display: flex;
		position: relative;
	}
`;

export const BannerLeft = styled.div`
	width: 730px;
	height: 285px;

	.banner-item {
		height: 285px;
		overflow: hidden;
		.img {
			width: 100%;
			height: 100%;
			cursor: pointer;
		}
	}
	.ant-carousel .slick-dots li button {
    height: 8px;
    position:absolute;
    bottom:5px;
    &:hover{
      background-color:#C20C0C;
    }
	}
`;

export const BannerRight = styled.a.attrs({
	href: "https://music.163.com/#/download",
	target: "_blank",
})`
	width: 254px;
	height: 285px;
	background: url(${require("@/assets/img/download.png")});
	position:relative;
	.download{
		position:absolute;
		left:50%;
		bottom:15px;
		transform:translate(-50%,0);
		color:#8d8d8d;
		white-space:nowrap;
	}
`;

export const BannerControl = styled.div`
	.btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		width: 37px;
		height: 63px;
		cursor: pointer;
		background-image: url(${require("@/assets/img/banner_sprite.png")});
		background-color: transparent;
		&:hover {
			background-color: rgba(0, 0, 0, 0.2);
		}
	}
	.leftBtn {
		left: -68px;
		background-position: 0 -360px;
	}
	.rightBtn {
		right: -68px;
		background-position: 0 -508px;
	}
`;
