import React, { memo } from "react";

import { headerLinks } from "@/common/local-data";
import { Input } from "antd";
import { SearchOutlined } from "@ant-design/icons";

import { NavLink } from "react-router-dom";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function Header() {
	// 根据本地数据返回页面
	const showItems = (item, index) => {
		if (index < 3) {
			return (
				<NavLink to={item.link}>
					{item.title}
					<i className="sprite_01 icon"></i>
				</NavLink>
			);
		} else {
			return <a href={item.link}>{item.title}</a>;
		}
	};
	return (
		<HeaderWrapper>
			<div className="content wrap-v1">
				<HeaderLeft>
					<a href="#/" className="logo sprite_01">
						网易云音乐
					</a>
					<div className="a_list">
						{headerLinks.map((item, index) => {
							return (
								<div key={item.title} className="a_item">
									{showItems(item, index)}
								</div>
							);
						})}
					</div>
					{/* <NavLink to="/">发现音乐</NavLink>
					<NavLink to="/mine">我的音乐</NavLink>
					<NavLink to="/friends">我的朋友</NavLink> */}
				</HeaderLeft>
				<HeaderRight>
					<Input
						className="search"
						prefix={<SearchOutlined />}
						placeholder="音乐/视频/电台/用户"
					/>
					<button className="creator_btn">创作者中心</button>
					<a href="#/" className="login">
						登录
					</a>
				</HeaderRight>
			</div>
			<div className="divider"></div>
		</HeaderWrapper>
	);
});
