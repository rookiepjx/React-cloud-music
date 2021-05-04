import React, { memo } from "react";


import { PlayerWrapper, PlayerLeft, PlayerRight } from "./style";
import SongInfo from "./cpns/songInfo";
import SongComments from "./cpns/songComments";
import SimilarSongs from "./cpns/similarSongs";
import SongAlbum from "./cpns/songAlbum";

// 点击播放栏歌曲封面跳转到的详情页面
export default memo(function Player() {

	return (
		<PlayerWrapper>
			<div className="content wrap-v2">
				<PlayerLeft>
					<SongInfo />
					<SongComments />
				</PlayerLeft>
				<PlayerRight>
					<SongAlbum />
					<SimilarSongs />
				</PlayerRight>
			</div>
		</PlayerWrapper>
	);
});
