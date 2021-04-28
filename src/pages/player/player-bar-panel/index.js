import React, { memo } from "react";

import { PlayerBarPanelWrapper } from "./style.js";
import PanelHeader from "./child-cpn/panel-header";
import SongsList from "./child-cpn/songs-list";
import LyricPanel from "./child-cpn/lyric-panel";

export default memo(function PlayerBarPanel(props) {
	const { bgImage } = props;
	return (
		<PlayerBarPanelWrapper>
			<PanelHeader />
			<div className="main">
				<img src={bgImage} alt="" className="img" />
			</div>
			<SongsList />
			<LyricPanel />
		</PlayerBarPanelWrapper>
	);
});
