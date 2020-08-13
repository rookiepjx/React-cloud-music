import React, { memo } from "react";

import { discoverMenu } from "@/common/local-data";

import { DiscoverWrapper, TopMenu } from "./style";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";

export default memo(function Discover(props) {
	return (
		<DiscoverWrapper>
			<div className="top">
				<TopMenu className="wrap-v1">
					{discoverMenu.map((item) => {
						return (
							<div className="item" key={item.title}>
								<NavLink to={item.link}>{item.title}</NavLink>
							</div>
						);
					})}
				</TopMenu>
			</div>
			{renderRoutes(props.route.routes)}
		</DiscoverWrapper>
	);
});
