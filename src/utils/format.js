// 图片尺寸按大小获取
export function getSizeImg(url,size){
  return `${url}?param=${size}x${size}`;
}

// 播放数格式化
export function playCountFormat(count) {
	if (count < 0) return;
	if (count < 10000) return count;
	else if (Math.floor(count / 10000) < 10000) {
		return Math.floor(count / 1000) / 10 + "万";
	} else {
		return Math.floor(count / 10000000) / 10 + "亿";
	}
}

// 根据歌曲id获取歌曲链接
export function getCurrentSongUrl(id) {
	return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}
/**
 * RegExp.$1是RegExp的一个属性,指的是与正则表达式匹配的第一个 子匹配(以括号为标志)字符串，以此类推，RegExp.$2，RegExp.$3，..RegExp.$99总共可以有99个匹配
 * const r = /^(\d{4})-(\d{1,2})-(\d{1,2})$/
r.exec('2019-10-08')
 
console.log(RegExp.$1)  // 2019
console.log(RegExp.$2)  // 10
console.log(RegExp.$3)  // 08
 */
export function formatDate(time, fmt) {
	let date = new Date(time);
	if (/(y+)/.test(fmt)) {
		fmt = fmt.replace(
			RegExp.$1,
			(date.getFullYear() + "").substr(4 - RegExp.$1.length)
		);
	}
	let o = {
		"M+": date.getMonth() + 1,
		"d+": date.getDate(),
		"h+": date.getHours(),
		"m+": date.getMinutes(),
		"s+": date.getSeconds(),
	};
	for (let k in o) {
		if (new RegExp(`(${k})`).test(fmt)) {
			let str = o[k] + "";
			fmt = fmt.replace(
				RegExp.$1,
				RegExp.$1.length === 1 ? str : padLeftZero(str)
			);
		}
	}
	return fmt;
}

function padLeftZero(str) {
	return ("00" + str).substr(str.length);
}

export function formatMonthDay(time) {
	return formatDate(time, "MM月dd日");
}

export function formatMinuteSecond(time) {
	return formatDate(time, "mm:ss");
}