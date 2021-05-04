import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";
import { formatMinuteSecond } from "@/utils/format";
import classNames from "classnames";

import { SongsListWrapper } from "./style";

export default memo(function SongsList() {
	const { playlist, currentSongIndex } = useSelector(
		(state) => ({
			playlist: state.getIn(["player", "playList"]),
			currentSongIndex: state.getIn(["player", "currentSongIndex"]),
		}),
		shallowEqual
	);

	return (
		<SongsListWrapper>
			{playlist.map((item, index) => {
				return (
					<div
						key={item.id}
						className={classNames("song_item", {
							active: currentSongIndex === index,
						})}
					>
						<div className="item_left">{item.name}</div>
						<div className="item_center">
							<div className="playlist_sprite favor"></div>
							<div className="playlist_sprite share"></div>
							<div className="playlist_sprite download"></div>
							<div className="playlist_sprite delete"></div>
						</div>
						<div className="item_right">
							<div className="singer">{item.ar[0].name}</div>
							<div className="duration">{formatMinuteSecond(item.dt)}</div>
							<div className="playlist_sprite link"></div>
						</div>
					</div>
				);
			})}
		</SongsListWrapper>
	);
});
