import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { PanelHeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function PanelHeader() {
	const { playList, currentSong } = useSelector(
		(state) => ({
			playList: state.getIn(["player", "playList"]),
			currentSong: state.getIn(["player", "currentSong"]),
		}),
		shallowEqual
	);
	return (
		<PanelHeaderWrapper>
			<HeaderLeft>
				<h3>播放列表({playList.length})</h3>
				<div className="operators">
					<button>
						<i className="playlist_sprite icon favor"></i>
						收藏全部
					</button>
					<button>
						<i className="playlist_sprite icon remove"></i>
						清除
					</button>
				</div>
			</HeaderLeft>
			<HeaderRight>
				{currentSong.name}
				<div className="close"></div>
			</HeaderRight>
		</PanelHeaderWrapper>
	);
});
