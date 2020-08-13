import * as actionTypes from "./constants"

import {getSongDetail} from "@/services/player"

const changeCurrentSongAction = res =>({
  type:actionTypes.CURRENT_SONG,
  currentSong:res
})

export const getSongDetailAction = ((ids) => {
  return dispatch => {
    getSongDetail(ids).then(res => 
      dispatch(changeCurrentSongAction(res.songs[0]))
    )}
})