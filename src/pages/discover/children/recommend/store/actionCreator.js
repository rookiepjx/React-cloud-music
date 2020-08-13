import * as actionTypes from "./constants";
import {
	getTopBanners,
	getHotRecommend,
	getNewAlbum,
	getTopList,
} from "@/services/recommend";

// 轮播图action
const changeTopBannersAction = (res) => ({
	type: actionTypes.TOP_BANNER,
	topBanners: res.banners,
});

// 热门推荐action
const changeHotRecommendAction = (res) => ({
	type: actionTypes.HOT_RECOMMEND,
	hotRecommend: res.result,
});

// 新碟上架action
const changeNewAlbumAction = (res) => ({
	type: actionTypes.NEW_ALBUM,
	newAlbum: res.albums,
});

// 飙升榜单action
const changeUpRankAction = (res) => ({
	type: actionTypes.UP_RANK,
	upRank: res.playlist,
});

// 新歌榜单action
const changeNewRankAction = (res) => ({
	type: actionTypes.NEW_RANK,
	newRank: res.playlist,
});

// 原创榜单action
const changeOriginRankAction = (res) => ({
	type: actionTypes.ORIGIN_RANK,
	originRank: res.playlist,
});

export const getTopBannerAction = () => {
	return (dispatch) => {
		// 发送网络请求获取轮播图数据，并将结果传入action
		getTopBanners()
			.then((res) => {
				dispatch(changeTopBannersAction(res));
			})
			.catch((e) => console.log(e));
	};
};

export const getHotRecommendAction = (limit) => {
	return (dispatch) => {
		// 发送网络请求获取热门推荐数据，并将结果传入action
		getHotRecommend(limit)
			.then((res) => {
				dispatch(changeHotRecommendAction(res));
			})
			.catch((e) => console.log(e));
	};
};

export const getNewAlbumAction = (limit) => {
	return (dispatch) => {
		// 发送网络请求获取新碟上架数据，并将结果传入action
		getNewAlbum(limit)
			.then((res) => {
				dispatch(changeNewAlbumAction(res));
			})
			.catch((e) => console.log(e));
	};
};

export const getTopListAction = (idx) => {
	return (dispatch) => {
		getTopList(idx)
			.then((res) => {
				switch (idx) {
					case 0:
						dispatch(changeUpRankAction(res));
						break;
					case 2:
						dispatch(changeNewRankAction(res));
						break;
					case 3:
						dispatch(changeOriginRankAction(res));
						break;
					default:
						return;
				}
			})
			.catch((e) => console.log(e));
	};
};
