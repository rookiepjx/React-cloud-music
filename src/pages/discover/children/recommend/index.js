import React, { memo } from "react";

import { RecommendWrapper, Content, ContentLeft, ContentRight } from "./style";

import TopBanner from "./child-cpn/topBanner";
import HotRecommend from "./child-cpn/hot-recommend";
import NewAlbum from "./child-cpn/new-album"
import Rank from "./child-cpn/rank";
import UserLogin from "./child-cpn/user-login"
import HotAnchor from "./child-cpn/hot-anchor";
import SettledSinger from "./child-cpn/settled-singer";

function Recommend() {
	return (
		<RecommendWrapper>
			<TopBanner />
			<Content className="wrap-v2">
				<ContentLeft>
					<HotRecommend />
					<NewAlbum />
					<Rank />
				</ContentLeft>
				<ContentRight>
					<UserLogin />
					<SettledSinger />
					<HotAnchor />
				</ContentRight>
			</Content>
		</RecommendWrapper>
	);
}

export default memo(Recommend);

// 不用hooks
// function Recommend(props) {
//   console.log(props)
//  const { getBanners, topBanners } = props;
//   useEffect(() => {
// 		getBanners();
// 	}, [getBanners]);

//   return (
//     <div>
//       <h2>Recommend:{topBanners.length}</h2>
//     </div>
//   )
// }

// const mapStateToProps = state => ({
//   topBanners:state.recommend.topBanners
// })

// const mapDispatchToProps = dispatch => ({
//   getBanners:() => {
//     dispatch(getTopBannerAction())
//   }
// })

// export default connect(mapStateToProps,mapDispatchToProps)(memo(Recommend))
