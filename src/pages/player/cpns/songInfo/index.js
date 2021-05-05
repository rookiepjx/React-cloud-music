import React, { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { SongInfoWrapper, InfoLeft, InfoRight } from "./style";
import { getSizeImg } from "@/utils/format";
import { getComments } from "@/services/player";

export default memo(function SongInfo() {
	// redux
	const { currentSong, lyrics } = useSelector(
		(state) => ({
			currentSong: state.getIn(["player", "currentSong"]),
			lyrics: state.getIn(["player", "lyrics"]),
		}),
		shallowEqual
	);
	console.log(currentSong);
	// effect
	useEffect(() => {
		getComments(currentSong.id).then((res) => {
			console.log(res);
			setCommentsCount(res.total);
		});
	}, [currentSong]);
	// state
	const [commentsCount, setCommentsCount] = useState(0);
	const [expand, setExpand] = useState(false);
	// 歌曲图片
	const picUrl = getSizeImg(currentSong.al?.picUrl, 132);

	return (
		<SongInfoWrapper>
			<InfoLeft>
				<img className="img" src={picUrl} alt="" />
				<span className="sprite_cover coverMsk"></span>
				<div className="player_link">
					<span className="sprite_icon2 music_icon"></span>
					<a href="/">生成外链播放器</a>
				</div>
			</InfoLeft>
			<InfoRight expand={expand}>
				<div className="songTitle">
					<i className="sprite_icon2"></i>
					<span className="songName">{currentSong.name}</span>
				</div>
				<p className="singer">
					歌手:
					<a href="/" className="name">
						{currentSong.ar[0].name}
					</a>
				</p>
				<p className="singer">
					所属专辑:
					<a href="/" className="name">
						{currentSong.al.name}
					</a>
				</p>
				<div className="operationBar">
					<span className="play">
						<a href="/" className="play-icon sprite_button">
							<span className="play sprite_button">
								<i className="sprite_button"></i>
								<span>播放</span>
							</span>
						</a>
						<a href="/" className="add-icon sprite_button">
							+
						</a>
					</span>
					<a href="/" className="item sprite_button">
						<i className="icon favor-icon sprite_button">收藏</i>
					</a>
					<a href="/" className="item sprite_button">
						<i className="icon share-icon sprite_button">分享</i>
					</a>
					<a href="/" className="item sprite_button">
						<i className="icon download-icon sprite_button">下载</i>
					</a>
					<a href="/" className="item sprite_button">
						<i className="icon comment-icon sprite_button">({commentsCount})</i>
					</a>
				</div>
				{expand
					? lyrics.map((item) => {
							return (
								<p key={item.time} className="lyrics_item">
									{item.content}
								</p>
							);
					  })
					: lyrics.slice(0, 13).map((item) => {
							return (
								<p key={item.time} className="lyrics_item">
									{item.content}
								</p>
							);
					  })}
				<p className="expand">
					<span onClick={() => setExpand(!expand)}>
						{expand ? `收起` : `展开`}
						<i className="sprite_icon2 arrow"></i>
					</span>
				</p>
				<p className="footer">
					<a href="/">上传歌词</a>
					<a href="/">纠错</a>
				</p>
			</InfoRight>
		</SongInfoWrapper>
	);
});
