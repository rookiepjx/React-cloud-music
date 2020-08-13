import React, { memo } from "react";

import { SongsCoverWrapper } from "./style";
import { getSizeImg, playCountFormat } from "@/utils/format";

export default memo(function SongsCover(props) {
	const { info } = props;
	return (
		<SongsCoverWrapper>
			<div className="cover">
				<img className="cover_img" src={getSizeImg(info.picUrl, 140)} alt="" />
				<a href="/todo" className="cover_bottom sprite_cover">
					<div className="info sprite_cover">
						<span>
							<i className="sprite_icon earphone"></i>
							{playCountFormat(info.playCount)}
						</span>
						<i className="sprite_icon play"></i>
					</div>
				</a>
			</div>
			<a href="/todo" className="album_name">{info.name}</a>
		</SongsCoverWrapper>
	);
});
