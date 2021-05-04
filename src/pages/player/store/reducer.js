import {Map} from "immutable"

import * as actionTypes from "./constants"

const defaultState = Map({
	playList: [],
	currentSong: {},
  currentSongIndex: 0,
  /**
   * 播放模式
   * 0 顺序
   * 1 随机
   * 2 单曲循环
   */
  playMode:0, 
  lyrics:[],
  currentLyricsIndex:0
});

function reducer(state = defaultState,action){
  switch (action.type){
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList",action.playList)
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.currentSongIndex);
    case actionTypes.CHANGE_PLAY_MODE:
      return state.set("playMode",action.playMode)
    case actionTypes.CHANGE_LYRICS:
      return state.set("lyrics",action.lyrics)
    case actionTypes.CHANGE_CURRENT_LYRICS_INDEX:
      return state.set("currentLyricsIndex", action.currentLyricsIndex);
    default:
      return state;
  }
}

export default reducer;