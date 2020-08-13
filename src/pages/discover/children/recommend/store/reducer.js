import * as actionTypes from "./constants";
import { Map } from "immutable";

// 使用immutableJS的Map方法
const defaultState = Map({
	topBanners: [],
	hotRecommend: [],
	newAlbum:[],
	upRank:{},
	newRank:{},
	originRank:{}
});

// reducer函数处理action
function reducer(state = defaultState, action) {
	switch (action.type) {
		case actionTypes.TOP_BANNER:
			// return {...state,topBanners:action.topBanners}
			return state.set("topBanners", action.topBanners);
		case actionTypes.HOT_RECOMMEND:
			return state.set("hotRecommend", action.hotRecommend);
		case actionTypes.NEW_ALBUM:
			return state.set("newAlbum",action.newAlbum);
		case actionTypes.UP_RANK:
			return state.set("upRank",action.upRank);
		case actionTypes.NEW_RANK:
			return state.set("newRank",action.newRank);
		case actionTypes.ORIGIN_RANK:
			return state.set("originRank",action.originRank)
		default:
			return state;
	}
}

export default reducer;
