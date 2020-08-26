import React, { memo, useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { Carousel } from "antd";

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

import { getTopBannerAction } from "@/pages/discover/children/recommend/store/actionCreator";

export default memo(function TopBanner(props) {
	// 轮播图下标
	const [currentIndex, setCurrentIndex] = useState(0);

	// useSelector相当于mapStateToProps
	// 参数2：shallowEqual 浅层比较，性能优化（不传入时默认 === 比较。由于调用返回新对象地址不同，必然不等）
	const { topBanners } = useSelector(
		(state) => ({
			// immutableJS get读取reducer和state
			topBanners: state.get("recommend").get("topBanners"),
		}),
		shallowEqual
	);
	// useDispatch相当于mapDispatchToProps
	const dispatch = useDispatch();
	//发送网络请求
	useEffect(() => {
		dispatch(getTopBannerAction());
	}, [dispatch]);

	const bannerRef = useRef();
	const bannerChange = useCallback((from, to) => {
		setTimeout(() => {
			setCurrentIndex(to);
		},0)
	}, []);

	// 当前轮播背景图url
	const bgImage =
		topBanners[currentIndex] &&
		topBanners[currentIndex].imageUrl + "?imageView&blur=40x20";

	return (
		<BannerWrapper bgImage={bgImage}>
			<div className="banner wrap-v2">
				<BannerLeft>
					<Carousel
						effect="fade"
						ref={bannerRef}
						beforeChange={bannerChange}
						autoplay
					>
						{topBanners.map((item) => {
							return (
								<div className="banner-item" key={item.imageUrl}>
									<img
										className="img"
										src={item.imageUrl}
										alt={item.typeTitle}
									/>
								</div>
							);
						})}
					</Carousel>
				</BannerLeft>
				<BannerRight>
					<div className="download">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
				</BannerRight>
				<BannerControl>
					<button
						className="btn leftBtn"
						onClick={(e) => bannerRef.current.prev()}
					></button>
					<button
						className="btn rightBtn"
						onClick={(e) => bannerRef.current.next()}
					></button>
				</BannerControl>
			</div>
		</BannerWrapper>
	);
});
