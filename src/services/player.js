import request from "./requestAPI"

export function getSongDetail(ids) {
	return request({
		url: "/song/detail",
		params: {
			ids,
		},
	});
}