import React, { memo } from "react";

import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";

// 点击播放栏歌曲封面跳转到的详情页面
export default memo(function Player() {
	return (
		<PlayerWrapper>
			<div className="content">
				<PlayerLeft>1</PlayerLeft>
				<PlayerRight>2</PlayerRight>
			</div>
		</PlayerWrapper>
	);
});
