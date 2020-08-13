import React, { memo } from "react";

import Anchor from "./anchor";

import { HotAnchorWrapper } from "./style";
import {hotAnchor} from "./local-data"

export default memo(function HotAnchor() {
	return (
		<HotAnchorWrapper>
      <div className="head">热门主播</div>
			{
        hotAnchor.map(item => {
          return <Anchor key={item.name} info={item}/>
        })
      }
		</HotAnchorWrapper>
	);
});
