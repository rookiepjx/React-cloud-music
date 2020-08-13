import React, { memo } from "react";

import { SingerWrapper } from "./style";

export default memo(function Singer(props) {
	const { picUrl, name, info } = props.info;
	return (
		<SingerWrapper>
			<div className="left">
				<a href="/todo">
					<img src={picUrl} alt="" />
				</a>
			</div>
			<div className="right">
				<div className="name text-nowrap">{name}</div>
				<div className="right_box">
					<div className="info text-nowrap">{info}</div>
				</div>
			</div>
		</SingerWrapper>
	);
});
