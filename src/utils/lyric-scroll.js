export function lyricScroll(ele, to, duration) {
	// 递归终止
	if (duration <= 0) return;

	let scrollHeight = to - ele.scrollTop;
	let step = (scrollHeight / duration) * 10;
	console.log(duration);

	setTimeout(() => {
		ele.scrollTop = ele.scrollTop + step;
		// 滚动到达指定位置，终止
		if (ele.scrollTop === to) return;
		lyricScroll(ele, to, duration - 10);
	}, 10);
}
