import React, { memo, Fragment } from "react";

import { footerLinks, footerImages } from "@/common/local-data";

import { FooterWrapper, FooterLeft, FooterRight } from "./style";

export default memo(function Footer() {
	return (
		<FooterWrapper>
			<div className="wrap-v2 content">
				<FooterLeft className="left">
					<div>
						{footerLinks.map((item) => {
							return (
								<Fragment key={item.title}>
									<a
										href={item.link}
										className="link"
										target="_blank"
										rel="noopener noreferrer"
									>
										{item.title}
									</a>
									<span className="divider">|</span>
								</Fragment>
							);
						})}
					</div>
					<div className="copyright">
						<span>
							网易公司版权所有©1997-2020杭州乐读科技有限公司运营：浙网文[2018]3506-263号
						</span>
					</div>
					<div className="report">
						<span>
							违法和不良信息举报电话：0571-89853516 举报邮箱：ncm5990@163.com
						</span>
					</div>
					<div className="info">
						<span>粤B2-20090191-18 </span>
						<a
							href="http://www.beian.miit.gov.cn/publish/query/indexFirst.action"
							rel="noopener noreferrer"
							target="_blank"
						>
							工业和信息化部备案管理系统网站
						</a>
					</div>
				</FooterLeft>
				<FooterRight>
					{footerImages.map((item) => {
						return (
							<li className="item" key={item.link}>
								<a
									className="link"
									href={item.link}
									rel="noopener noreferrer"
									target="_blank"
								>a</a>
								<span className="title">{item.title}</span>
							</li>
						);
					})}
				</FooterRight>
			</div>
		</FooterWrapper>
	);
});
