import React, { memo, useEffect, shallowEqual } from "react";
import { useDispatch, useSelector } from "react-redux";

import HotRecommendHeader from "@/components/Theme-recommend-header";
import TopRank from "@/components/Top-rank";

import { RankWrapper } from "./style";
import { getTopListAction } from "../../store/actionCreator";

export default memo(function Rank() {
	const { upRank, newRank, originRank } = useSelector(
		(state) => ({
			upRank: state.getIn(["recommend", "upRank"]),
			newRank: state.getIn(["recommend", "newRank"]),
			originRank: state.getIn(["recommend", "originRank"]),
		}),
		shallowEqual
	);
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getTopListAction(0));
		dispatch(getTopListAction(2));
		dispatch(getTopListAction(3));
	}, [dispatch]);
	return (
		<RankWrapper>
			<HotRecommendHeader title={"榜单"} />
			<div className="rank-list">
				<TopRank info={upRank} />
				<TopRank info={newRank} />
				<TopRank info={originRank} />
			</div>
		</RankWrapper>
	);
});
