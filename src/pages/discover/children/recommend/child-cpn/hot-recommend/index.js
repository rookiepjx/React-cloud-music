import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import HotRecommendHeader from "@/components/Theme-recommend-header";
import SongsCover from "@/components/Songs-cover"

import { HotRecommendWrapper } from "./style";
import { getHotRecommendAction } from "../../store/actionCreator";
import { HOT_RECOMMEND_LIMIT } from "@/common/constants";

export default memo(function HotRecommend() {
	// redux hook
	const { hotRecommend } = useSelector(
		(state) => ({
			hotRecommend: state.getIn(["recommend", "hotRecommend"]),
		}),
		shallowEqual
	);

	const dispatch = useDispatch();

	// other hook
	// 发送网络请求
	useEffect(() => {
		dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT));
	}, [dispatch]);
	return (
		<HotRecommendWrapper>
			<HotRecommendHeader
				title={"热门推荐"}
				keyword={["华语", "流行", "摇滚", "民谣", "电子"]}
			/>
			<div className="recommend-list">
				{hotRecommend.map((item) => {
					return <SongsCover key={item.id} info={item}></SongsCover>
				})}
			</div>
		</HotRecommendWrapper>
	);
});
