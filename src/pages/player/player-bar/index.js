import React, { memo, useEffect, useState, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Slider } from "antd";

import { PlayerBarWrapper, ControlBar, PlayBar, OperationBar } from "./style";
import { getSongDetailAction } from "../store/actionCreators";
import {
	getSizeImg,
	getCurrentSongUrl,
	formatMinuteSecond,
} from "@/utils/format";

export default memo(function PlayerBar() {
	//props 和 state
	const [isPlaying, setisPlaying] = useState(false);
	const [currentTime, setcurrentTime] = useState(0);

	// redux hooks
	const { currentSong } = useSelector((state) => ({
		currentSong: state.getIn(["player", "currentSong"]),
	}));

	// other hooks
	const audioRef = useRef();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getSongDetailAction(167876));
		console.log(dispatch);
	}, [dispatch]);
	useEffect(() => {
		audioRef.current.src = getCurrentSongUrl(currentSong.id);
	}, [currentSong]);

	// other
	const picUrl = (currentSong.al && currentSong.al.picUrl) || "";
	const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";

	/**
	 * 播放歌曲，并修改播放状态
	 */
	const playMusic = () => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setisPlaying(!isPlaying);
	};
	const timeUpdate = (e) => {
		setcurrentTime(e.target.currentTime * 1000);
		console.log(e.target.currentTime);
	};

	const sliderChange = (e) => {
		console.log(e);
	};

	const sliderAfterChange = (e) => {
		console.log(e);
	};

	return (
		<PlayerBarWrapper className="sprite_player">
			<div className="content wrap-v2">
				<ControlBar isPlaying={isPlaying}>
					<button className="prev sprite_player"></button>
					<button
						className="play sprite_player"
						onClick={(e) => playMusic()}
					></button>
					<button className="next sprite_player"></button>
				</ControlBar>
				<PlayBar>
					<div className="image">
						<img src={getSizeImg(picUrl, 34)} alt="" />
					</div>
					<div className="info">
						<div className="song">
							<span className="song-name text-nowrap">
								<a href="/todo">{currentSong.name}</a>
							</span>
							<span className="mv">
								<a href="/todo" className="sprite_player">
									{" "}
								</a>
							</span>
							<span className="singer-name text-nowrap">
								<a href="/todo">{singerName}</a>
							</span>
						</div>
						<div className="progress">
							<Slider
								defaultValue={30}
								value={0}
								onChange={sliderChange}
								onAfterChange={sliderAfterChange}
							/>
							<div className="time">
								<span className="current-time">
									{formatMinuteSecond(currentTime)}
								</span>
								<span className="divider">/</span>
								<span className="duration-time">
									{formatMinuteSecond(currentSong.dt)}
								</span>
							</div>
						</div>
					</div>
				</PlayBar>
				<OperationBar>
					<div className="left">
						<button className="sprite_player btn favor"></button>
						<button className="sprite_player btn share"></button>
					</div>
					<div className="right sprite_player">
						<button className="sprite_player btn volume"></button>
						<button className="sprite_player btn loop"></button>
						<button className="sprite_player btn playlist"></button>
					</div>
				</OperationBar>
			</div>
			<audio ref={audioRef} onTimeUpdate={timeUpdate}></audio>
		</PlayerBarWrapper>
	);
});
