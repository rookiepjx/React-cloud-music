import request from "./requestAPI"

export function getSongDetail(ids) {
	return request({
		url: "/song/detail",
		params: {
			ids,
		},
	});
}

export function getLyric(id) {
	return request({
		url: "/lyric",
		params: {
			id,
		},
	});
}