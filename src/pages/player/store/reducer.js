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
  lyric:[],
  currentLyricIndex:0
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
    case actionTypes.CHANGE_LYRIC:
      return state.set("lyric",action.lyric)
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex);
    default:
      return state;
  }
}

export default reducer;