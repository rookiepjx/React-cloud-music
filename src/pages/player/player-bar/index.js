import React, { memo, useEffect, useState, useRef, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { Slider, message } from "antd";
import { NavLink } from "react-router-dom";

import {
	PlayerBarWrapper,
	ControlBar,
	PlayBar,
	OperationBar,
	VolumeSlider,
} from "./style";
import PlayerBarPanel from "../player-bar-panel";
import {
	getSongDetailAction,
	changePlayModeAction,
	changeIndexAndSongAction,
	changeCurrentLyricIndexAction,
} from "../store/actionCreators";
import {
	getSizeImg,
	getCurrentSongUrl,
	formatMinuteSecond,
} from "@/utils/format";

export default memo(function PlayerBar() {
	//props 和 state
	const [isPlaying, setisPlaying] = useState(false); // 当前播放状态
	const [currentTime, setcurrentTime] = useState(0); // 当前歌曲时间
	const [progress, setprogress] = useState(0); // 当前进度
	const [isChanging, setisChanging] = useState(false); // 是否在拖动进度条
	const [showVolume, setshowVolume] = useState(false); // 是否显示音量条
	const [volume, setvolume] = useState(30);
	const [showPanel, setshowPanel] = useState(false); // 是否显示歌曲面板

	// redux hooks
	const {
		currentSong,
		playMode,
		playList,
		lyric,
		currentLyricIndex,
	} = useSelector((state) => ({
		currentSong: state.getIn(["player", "currentSong"]),
		playMode: state.getIn(["player", "playMode"]),
		playList: state.getIn(["player", "playList"]),
		lyric: state.getIn(["player", "lyric"]),
		currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
	}));

	// other hooks
	const audioRef = useRef();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getSongDetailAction(1459232593));
	}, [dispatch]);

	useEffect(() => {
		// 1.根据id获取音频源,并且当切换歌曲的时候自动播放
		audioRef.current.src = getCurrentSongUrl(currentSong.id);
		audioRef.current
			.play()
			.then(() => {
				setisPlaying(true);
			})
			.catch(() => {
				setisPlaying(false);
			});
		// 2.点击空白处隐藏音量、歌曲面板
		document.addEventListener("click", hide);
	}, [currentSong]);

	// others
	const picUrl =
		(currentSong.al && currentSong.al.picUrl) ||
		"http://s4.music.126.net/style/web2/img/default/default_album.jpg";
	const singerName = (currentSong.ar && currentSong.ar[0].name) || "未知歌手";
	const duration = currentSong.dt || 0;

	/**
	 * 播放歌曲，并修改播放状态
	 */
	const playMusic = useCallback(() => {
		isPlaying ? audioRef.current.pause() : audioRef.current.play();
		setisPlaying(!isPlaying);
	}, [isPlaying]);

	// 监听audio时间变化，修改进度条和时间。当进度条在拖动时，不发生改变。
	// 歌曲时间变化，获取对应时间的歌词
	const timeUpdate = (e) => {
		const currentTime = e.target.currentTime;
		if (!isChanging) {
			setcurrentTime(currentTime * 1000);
			setprogress(((currentTime * 1000) / duration) * 100);
		}

		// 根据时间获取当前歌词
		let i = 0;
		for (; i < lyric.length - 1; i++) {
			const lyricTime = lyric[i].time;
			if (lyricTime > currentTime * 1000) {
				break;
			}
		}
		const index = i - 1;
		// 当变化时才修改index
		// 根据歌词时间显示当前歌词
		if (index !== currentLyricIndex) {
			dispatch(changeCurrentLyricIndexAction(index));
			let content = lyric[index] && lyric[index].content;
			content = content ? content : "...";
			message.open({
				content: content,
				key: "lyric",
				duration: 0,
				className: "lyric-message",
			});
		}
	};

	const timeEnded = () => {
		// 单曲循环
		if (playMode === 2 || playList.length === 1) {
			audioRef.current.currentTime = 0;
			audioRef.current.play();
		} else {
			audioRef.current.currentTime = 0;
			dispatch(changeIndexAndSongAction(1));
		}
	};

	// 拖动进度条，进度条状态改为 正在拖动 ，改变播放时间和进度条。
	const songSliderChange = useCallback(
		(value) => {
			setisChanging(true);
			setcurrentTime((value / 100) * duration);
			setprogress(value);
		},
		[duration]
	);

	// 松开进度条，改变音频的当前时间、当前时间、进度条，进度条状态改为 停止拖动
	// 并当歌曲没有播放，开始播放歌曲
	const songSliderAfterChange = useCallback(
		(value) => {
			const currentTime = ((value / 100) * duration) / 1000;
			audioRef.current.currentTime = currentTime;
			setcurrentTime(currentTime * 1000);
			setprogress(value);
			setisChanging(false);
			if (!isPlaying) {
				playMusic();
			}
		},
		[duration, isPlaying, playMusic]
	);

	// 切换上一首/下一首歌曲
	const changeMusic = (num) => {
		dispatch(changeIndexAndSongAction(num));
	};

	// 切换播放模式
	const changePlayMode = () => {
		let currentPlayMode = playMode + 1;
		if (currentPlayMode > 2) {
			currentPlayMode = 0;
		}
		dispatch(changePlayModeAction(currentPlayMode));
	};

	// 显示/隐藏音量条
	const toggleShowVolume = (e) => {
		setshowVolume(!showVolume);
		// react中阻止事件冒泡和同元素上同类型（click）事件冒泡
		e.nativeEvent.stopImmediatePropagation();
	};

	// 改变歌曲音量
	const volumeSliderChange = useCallback((value) => {
		setvolume(value);
		audioRef.current.volume = value / 100;
	});

	// 显示/隐藏歌曲面板
	const toggleShowPanel = (e) => {
		setshowPanel(!showPanel);
		// react中阻止事件冒泡和同元素上同类型（click）事件冒泡
		e.nativeEvent.stopImmediatePropagation();
	};

	// 点击空白处隐藏元素
	const hide = () => {
		setshowPanel(false);
		setshowVolume(false);
	};

	return (
		<PlayerBarWrapper className="sprite_player">
			<div className="content wrap-v2">
				<ControlBar isPlaying={isPlaying}>
					<button
						className="prev sprite_player"
						onClick={(e) => changeMusic(-1)}
					></button>
					<button
						className="play sprite_player"
						onClick={(e) => playMusic()}
					></button>
					<button
						className="next sprite_player"
						onClick={(e) => changeMusic(1)}
					></button>
				</ControlBar>
				<PlayBar>
					<div className="image">
						<NavLink to="/discover/player">
							<img src={getSizeImg(picUrl, 34)} alt="" />
						</NavLink>
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
								tooltipVisible={false}
								step={0.1}
								defaultValue={0}
								value={progress}
								onChange={songSliderChange}
								onAfterChange={songSliderAfterChange}
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
				<OperationBar playMode={playMode}>
					<div className="left">
						<button className="sprite_player btn favor"></button>
						<button className="sprite_player btn share"></button>
					</div>
					<div className="right sprite_player">
						<button
							className="sprite_player btn volume"
							onClick={(e) => toggleShowVolume(e)}
						></button>
						<button
							className="sprite_player btn loop"
							onClick={() => changePlayMode()}
						></button>
						<button
							className="sprite_player btn playlist"
							onClick={(e) => toggleShowPanel(e)}
						>
							<span>{playList.length}</span>
						</button>
						{/* 音量面板显示/隐藏 */}
						{showVolume && (
							<VolumeSlider className="sprite_player">
								<div className="volumeSlider">
									<Slider
										vertical
										defaultValue={volume}
										tooltipVisible={false}
										onChange={volumeSliderChange}
									></Slider>
								</div>
							</VolumeSlider>
						)}
					</div>
				</OperationBar>
			</div>
			<audio
				ref={audioRef}
				onTimeUpdate={(e) => timeUpdate(e)}
				onEnded={(e) => timeEnded()}
			/>
			{/* 歌曲面板显示/隐藏 */}
			{showPanel && <PlayerBarPanel />}
		</PlayerBarWrapper>
	);
});
