import React, { memo } from "react";

import { HotRecommendHeaderWrapper } from "./style";

export default memo(function RecommendHeader(props) {
  const {title,keyword = []} = props
	return (
		<HotRecommendHeaderWrapper className="sprite_02">
			<div className="left">
				<h3 className="title">{title}</h3>
				<div className="keywords">
					{keyword.map((item) => {
						return (
							<div key={item} className="item">
								<a href="todo">{item}</a>
								<span className="divider">|</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className="right">
				<a href="todo">更多</a>
				<i className="icon sprite_02"></i>
			</div>
		</HotRecommendHeaderWrapper>
	);
});
