import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { SongInfoWrapper, InfoLeft, InfoRight } from "./style";
import { getSizeImg } from "@/utils/format";

export default memo(function SongInfo() {
	// redux
	const { currentSong, lyrics } = useSelector(
		(state) => ({
			currentSong: state.getIn(["player", "currentSong"]),
			lyrics: state.getIn(["player", "lyrics"]),
		}),
		shallowEqual
	);
	const picUrl = getSizeImg(currentSong.al?.picUrl, 130);
	console.log(currentSong);
	console.log(lyrics);
	return (
		<SongInfoWrapper>
			<InfoLeft>
				<img src={picUrl} alt="" />
				<div>{currentSong.name}</div>
			</InfoLeft>
			<InfoRight>
				{lyrics.map((item, index) => {
					return (
						<p key={item.time} className="lyrics_item">
							{item.content}
						</p>
					);
				})}
			</InfoRight>
		</SongInfoWrapper>
	);
});
