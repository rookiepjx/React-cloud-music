import React, { memo } from "react";
import { PlayerHeaderWrapper } from "./style";

export default memo(function PlayerHeader(props) {
	const { title } = props;
	return (
		<PlayerHeaderWrapper>
			<h3>{title}</h3>
		</PlayerHeaderWrapper>
	);
});
