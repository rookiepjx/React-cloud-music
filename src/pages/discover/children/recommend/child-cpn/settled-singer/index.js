import React, { memo } from "react";

import Singer from "./singer";

import { SettledSingerWrapper } from "./style";
import {settledSingers} from "./local-data"

export default memo(function SettledSinger() {
	return (
		<SettledSingerWrapper>
			<div className="head">
				<div className="singer">入驻歌手</div>
				<div>
					<a href="/todo">查看全部 &gt;</a>
				</div>
			</div>
			{settledSingers.map((item) => {
				return <Singer className="singer-item" key={item.name} info={item} />;
			})}
			<div className="btn_group">
				<div className="left sprite_button">申请成为网易音乐人</div>
				<div className="right sprite_button"></div>
			</div>
		</SettledSingerWrapper>
	);
});
