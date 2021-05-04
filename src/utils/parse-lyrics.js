/**
 * 歌词格式
[00:00.000] 作曲 : 许嵩
[00:01.000] 作词 : 许嵩
[00:22.240]天空好想下雨
[00:24.380]我好想住你隔壁
...
歌词最后面有一行空白
 */
const RegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/;

export default function parseLyrics(lyricsString) {
	let lyrics = [];
	// 歌词按行分割
	const lyricsLines = lyricsString.split("\n");
	// 遍历所有行，正则匹配出歌词时间和歌词内容
	for (let line of lyricsLines) {
		// 如果不为空行
		if (line) {
			/**
       * 正则对象返回的数组格式
       * 0: "[00:00.000]"
         1: "00"
         2: "00"
         3: "000"
         groups: undefined
         index: 0
         input: "[00:00.000] 作曲 : 许嵩"
       */
			const result = RegExp.exec(line);
			// 歌词字符串内容可能不匹配，跳过
			if (!result) continue;
			const minute = result[1] * 60 * 1000;
			const second = result[2] * 1000;
			// 毫秒长度2-3位
			const milsecond = result[3].length === 3 ? result[3] * 1 : result[3] * 10;
			const time = minute + second + milsecond;
			// 将歌词字符串的 [时间] 剔除，就是歌词内容
			const content = line.replace(RegExp, "").trim();
			lyrics.push({
				time,
				content
			});
		}
	}
	return lyrics;
}
