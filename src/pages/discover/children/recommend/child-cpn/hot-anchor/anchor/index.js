import React, { memo } from "react";

import { AnchorWrapper } from "./style";

export default memo(function Anchor(props) {
	const { picUrl, name, info } = props.info;
	return (
		<AnchorWrapper>
			<div className="left">
				<img src={picUrl} alt="" />
			</div>
			<div className="right">
				<div className="name">
					{name}
					<span className="sprite_icon2"></span>
					</div>
				<div className="info text-nowrap">{info}</div>
			</div>
		</AnchorWrapper>
	);
});
