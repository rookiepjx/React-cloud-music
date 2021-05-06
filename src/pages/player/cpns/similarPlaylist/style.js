import styled from "styled-components";

export const SimilarPlaylistWrapper = styled.div`
	.songItem {
		display: flex;
		align-items: center;
		margin-top: 15px;
		width: 200px;

		.image {
			width: 50px;
			height: 50px;
		}

		.listInfo {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			width: 140px;
			height: 46px;
			margin-left: 10px;
			.listName {
				font-size: 14px;
				color: #000;
			}

			.author {
				color: #999;

				.nickname {
					color: #666;
					margin-left: 5px;
				}
			}
		}
	}
`;
