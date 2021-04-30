import React, { memo } from "react";

import { PlayerBarPanelWrapper } from "./style.js";
import PanelHeader from "./child-cpn/panel-header";
import SongsList from "./child-cpn/songs-list";
import LyricPanel from "./child-cpn/lyric-panel";

export default memo(function PlayerBarPanel(props) {
	const { bgImage } = props;
	
	// 阻止点击面板触发冒泡，面板隐藏
	const Click = (e) => {
		e.nativeEvent.stopImmediatePropagation();
	};

	return (
		<PlayerBarPanelWrapper onClick={(e) => Click(e)}>
			<PanelHeader />
			<div className="main">
				<img src={bgImage} alt="" className="img" />
				<SongsList />
				<LyricPanel />
			</div>
		</PlayerBarPanelWrapper>
	);
});
