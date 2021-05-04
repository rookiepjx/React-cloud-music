import * as actionTypes from "./constants";

import { getSongDetail, getLyrics } from "@/services/player";

import parseLyrics from "@/utils/parse-lyrics";

// 改变歌曲列表
const changePlayListAction = (playList) => ({
	type: actionTypes.CHANGE_PLAY_LIST,
	playList,
});

// 改变当前播放歌曲
const changeCurrentSongAction = (currentSong) => ({
	type: actionTypes.CHANGE_CURRENT_SONG,
	currentSong,
});

// 改变当前播放歌曲下标
const changeCurrentSongIndexAction = (currentSongIndex) => ({
	type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
	currentSongIndex,
});

// 改变歌曲歌词
const changeLyricsAction = (lyrics) => ({
	type: actionTypes.CHANGE_LYRICS,
	lyrics,
});

// 改变当前歌词下标
export const changeCurrentLyricsIndexAction = (currentLyricsIndex) => ({
	type: actionTypes.CHANGE_CURRENT_LYRICS_INDEX,
	currentLyricsIndex,
});

// 改变播放模式
export const changePlayModeAction = (playMode) => ({
	type: actionTypes.CHANGE_PLAY_MODE,
	playMode,
});

// 以下是 使用redux-thunk中间件的Actions，中间件允许dispatch一个action函数，并传递dispatch, getState函数

// 切换上一曲/下一曲
export const changeIndexAndSongAction = (num) => {
	return (dispatch, getState) => {
		const playMode = getState().getIn(["player", "playMode"]);
		let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
		const playList = getState().getIn(["player", "playList"]);
		switch (playMode) {
			/**
			 * 当播放模式为 0 和 2 时，切换歌曲都是加 num
			 * 当随机播放，生成随机数
			 */
			case 1:
				let randomNum = Math.floor(Math.random() * playList.length);
				while (randomNum === currentSongIndex) {
					randomNum = Math.floor(Math.random() * playList.length);
				}
				currentSongIndex = randomNum;
				break;
			default:
				currentSongIndex += num;
				// 处理第一首和最后一首
				if (currentSongIndex >= playList.length) currentSongIndex = 0;
				if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
		}
		const song = playList[currentSongIndex];
		dispatch(changeCurrentSongAction(song));
		dispatch(changeCurrentSongIndexAction(currentSongIndex));
		// 获取歌词
		dispatch(getLyricsAction(song.id));
	};
};

// id获取歌曲信息
export const getSongDetailAction = (ids) => {
	return (dispatch, getState) => {
		// 1.根据id查找playList中是否已经有这首歌
		const playList = getState().getIn(["player", "playList"]);
		const songIndex = playList.findIndex((item) => item.id === ids);
		let song = null;
		// 2.1 playList中已经有这首歌曲，修改当前歌曲和下标
		if (songIndex !== -1) {
			song = playList[songIndex];
			dispatch(changeCurrentSongAction(song));
			dispatch(changeCurrentSongIndexAction(songIndex));
			// 获取歌词
			dispatch(getLyricsAction(song.id));
		} else {
			// 2.2 playList中没有这首歌曲，请求歌曲数据添加到playList
			getSongDetail(ids)
				.then((res) => {
					// 确保song有数据
					if (!res) return;
					song = res.songs && res.songs[0];
					if (!song) return;
					const newList = [...playList];
					newList.push(song);
					dispatch(changePlayListAction(newList));
					dispatch(changeCurrentSongIndexAction(newList.length - 1));
					dispatch(changeCurrentSongAction(song));
					// 获取歌词
					dispatch(getLyricsAction(song.id));
				})
				.catch();
		}
	};
};

// id获取歌词
export const getLyricsAction = (id) => {
	return (dispatch) => {
		getLyrics(id).then((res) => {
			const lyricsString = res.lrc.lyric;
			const lyrics = parseLyrics(lyricsString);
			dispatch(changeLyricsAction(lyrics));
		});
	};
};
