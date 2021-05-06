import React, { memo, useEffect, useState } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { SimilarPlaylistWrapper } from "./style";
import PlayerHeader from "@/components/Theme-player-header";
import { getSimilarPlaylist } from "@/services/player";
import { getSizeImg } from "@/utils/format";

export default memo(function SimilarPlaylist() {
	// redux
	const { currentSong } = useSelector(
		(state) => ({
			currentSong: state.getIn(["player", "currentSong"]),
		}),
		shallowEqual
	);
	// state
	const [similarPlaylist, setSimilarPlaylist] = useState([]);
	// effect
	const id = currentSong.id;
	useEffect(() => {
		getSimilarPlaylist(id).then((res) => {
			setSimilarPlaylist(res.playlists);
		});
	}, [id]);
	return (
		<SimilarPlaylistWrapper>
			<PlayerHeader title="包含这首歌的歌单" />
			{similarPlaylist.map((item) => {
				return (
					<div key={item.id} className="songItem">
						<a href="/">
							<img
								className="image"
								src={getSizeImg(item.coverImgUrl, 50)}
								alt=""
							/>
						</a>
						<div className="listInfo">
							<div className="text-nowrap">
								<a className="listName" href="/">
									{item.name}
								</a>
							</div>

							<div className="author">
								<div className="text-nowrap">
									by
									<a href="/" className="nickname text-nowrap">
										{item.creator.nickname}
									</a>
								</div>
							</div>
						</div>
					</div>
				);
			})}
		</SimilarPlaylistWrapper>
	);
});
