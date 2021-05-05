import request from "./requestAPI";

// 获取歌曲详情
export function getSongDetail(ids) {
	return request({
		url: "/song/detail",
		params: {
			ids,
		},
	});
}

// 获取歌词
export function getLyrics(id) {
	return request({
		url: "/lyric",
		params: {
			id,
		},
	});
}

// 获取歌曲评论
export function getComments(id) {
	return request({
		url: "/comment/music",
		params: {
			id,
		},
	});
}
