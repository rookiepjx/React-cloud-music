import React, { memo } from "react";
import { useDispatch } from "react-redux";

import { TopRankWrapper } from "./style";
import { getSizeImg } from "@/utils/format";

import { getSongDetailAction } from "@/pages/player/store/actionCreators";

export default memo(function TopRank(props) {
	const { info } = props;
	const { tracks = [] } = info;

	const dispatch = useDispatch()

	// 点击获取歌曲信息
	const playMusic = (item) => {
		dispatch(getSongDetailAction(item.id))
	};
	return (
		<TopRankWrapper>
			<div className="header">
				<div className="image">
					<img src={getSizeImg(info.coverImgUrl, 80)} alt="" />
					<a href="/todo" className="image_cover">
						{" "}
					</a>
				</div>
				<div className="info">
					<a href="/todo" className="rank_name">
						{info.name}
					</a>
					<div>
						<button className="btn play sprite_02"></button>
						<button className="btn favor sprite_02"></button>
					</div>
				</div>
			</div>
			<div className="list">
				{tracks.slice(0, 10).map((item, index) => {
					return (
						<div key={item.id} className="list-item">
							<div className="index">{index + 1}</div>
							<div className="info">
								<div className="name text-nowrap">
									<a href="/todo">{item.name}</a>
								</div>
								<div className="operation">
									<button
										className="btn play sprite_02"
										onClick={(e) => playMusic(item)}
									></button>
									<button className="btn add sprite_icon2"></button>
									<button className="btn favor sprite_02"></button>
								</div>
							</div>
						</div>
					);
				})}
			</div>
			<div className="footer">
				<a href="/todo">查看全部 &gt;</a>
			</div>
		</TopRankWrapper>
	);
});
