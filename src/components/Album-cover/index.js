import React, { memo } from "react";

import { AlbumCoverWrapper } from "./style";
import { getSizeImg } from "@/utils/format";

export default memo(function AlbumCover(props) {
	const { info, size = 130, width = 153, bgp = "-845px" } = props;
	return (
		<AlbumCoverWrapper size={size} width={width} bgp={bgp}>
			<div className="album_img">
				<img className="img" src={getSizeImg(info.picUrl, size)} alt="" />
				<a href="/todo" className="cover image_cover">
					{info.name}
				</a>
			</div>
			<div className="album_info">
				<div className="album_name text-nowrap">
					{info.name}
				</div>
				<div className="album_artist_name  text-nowrap">
					{info.artist.name}
				</div>
			</div>
		</AlbumCoverWrapper>
	);
});
