import React, { memo, useEffect, useRef } from "react";
import { useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";

import { LyricPanelWrapper } from "./style";
import { lyricScroll } from "@/utils/lyric-scroll";

export default memo(function LyricPanel() {
	// redux
	const { lyric, currentLyricIndex } = useSelector(
		(state) => ({
			lyric: state.getIn(["player", "lyric"]),
			currentLyricIndex: state.getIn(["player", "currentLyricIndex"]),
		}),
		shallowEqual
	);

	// 歌词自动滚动 
  
	const panelRef = useRef();
	useEffect(() => {
		// 从第四句歌词开始滚动，每句歌词高度32px
		if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
		// lyricScroll param: 滚动元素，滚动到的目标位置，滚动时长
		lyricScroll(panelRef.current, (currentLyricIndex - 3) * 32, 300);
	}, [currentLyricIndex]);

	// render
	return (
		<LyricPanelWrapper ref={panelRef}>
			{lyric.map((item, index) => {
				return (
					<div
						key={item.time}
						className={classNames("lyric_item", {
							active: index === currentLyricIndex,
						})}
					>
						{item.content}
					</div>
				);
			})}
		</LyricPanelWrapper>
	);
});
