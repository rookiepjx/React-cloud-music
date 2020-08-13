import request from "./requestAPI";

// 获取推荐页轮播图数据
export function getTopBanners() {
	return request({
		url: "/banner",
	});
}

// 获取推荐页热门推荐数据
export function getHotRecommend(limit) {
	return request({
		url: "/personalized",
		params: {
			limit,
		},
	});
}

// 获取新碟上架数据
export function getNewAlbum(limit) {
	return request({
		url: "/top/album",
		params: {
			limit,
		},
	});
}

// 获取榜单数据
export function getTopList(idx) {
	return request({
		url: "/top/list",
		params: {
			idx,
		},
	});
}
