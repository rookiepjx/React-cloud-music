import React, { memo, useEffect, useRef, shallowEqual } from "react";
import { useSelector, useDispatch } from "react-redux";

import { Carousel } from "antd";
import HotRecommendHeader from "@/components/Theme-recommend-header";
import AlbumCover from "@/components/Album-cover";

import { NewAlbumWrapper } from "./style";
import { getNewAlbumAction } from "../../store/actionCreator";

export default memo(function NewAlbum() {
	const { newAlbum } = useSelector(
		(state) => ({ newAlbum: state.getIn(["recommend", "newAlbum"]) }),
		shallowEqual
	);
	const pageRef = useRef();

	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(getNewAlbumAction(10));
	}, [dispatch]);

	return (
		<NewAlbumWrapper>
			<HotRecommendHeader title={"新碟上架"} />
			<div className="newAlbum">
				<button
					className="arrow arrow-left sprite_02"
					onClick={(e) => pageRef.current.prev()}
				></button>
				<div className="content">
					<Carousel ref={pageRef} dots={false}>
						{[0, 1].map((item) => {
							return (
								<div key={item} className="album_item">
									{
										// slice每页5个 0-4， 5-9
										newAlbum.slice(item * 5, (item + 1) * 5).map((iten) => {
											return <AlbumCover 
											key={iten.id} 
											width={118}  
											size={100} 
											info={iten}  
											bgp="-570px"
											/>;
										})
									}
								</div>
							);
						})}
					</Carousel>
				</div>
				<button
					className="arrow arrow-right sprite_02"
					onClick={(e) => pageRef.current.next()}
				></button>
			</div>
		</NewAlbumWrapper>
	);
});
