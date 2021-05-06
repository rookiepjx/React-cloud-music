import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual } from "react-redux";

import { SimilarSongsWrapper } from "./style";
import PlayerHeader from "@/components/Theme-player-header";
import { getSimilarSongs } from "@/services/player";

export default memo(function SimilarSongs() {
	//redux
	const { currentSong } = useSelector(
		(state) => ({
			currentSong: state.getIn(["player", "currentSong"]),
		}),
		shallowEqual
	);
	//effect
	const id = currentSong.id;
	useEffect(() => {
		getSimilarSongs(id).then((res) => {
			setSimilarSongs(res.songs);
		});
	}, [id]);
	// state
	const [similarSongs, setSimilarSongs] = useState([]);
	return (
		<SimilarSongsWrapper>
			<PlayerHeader title="相似歌曲" />
			{similarSongs.map((item) => {
				return (
					<div className="songItem" key={item.id}>
						<div className="songInfo">
							<div className="text-nowrap">
								<a className="name" href="/">
									{item.name}
								</a>
							</div>
							<div className="text-nowrap">
								<a className="singer" href="/">
									{item.artists[0].name}
								</a>
							</div>
						</div>
						<div className="operations">
							<button className="item sprite_icon3 play"></button>
							<button className="item sprite_icon3 add"></button>
						</div>
					</div>
				);
			})}
			<div className="appDownload">
				<PlayerHeader title="网易云音乐多端下载" />
				<div className="devices">
					<div className="sprite_download item ios"></div>
					<div className="sprite_download item pc"></div>
					<div className="sprite_download item android"></div>
				</div>
			</div>
			<div className="syncAlbum">同步歌单，随时畅听320k好音乐</div>
			<div className="songProfile">
				<a href="/">补充或修改歌曲资料&gt;</a>
			</div>
		</SimilarSongsWrapper>
	);
});
