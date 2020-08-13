import styled from "styled-components";

export const SettledSingerWrapper = styled.div`
					margin: 20px;
					display: flex;
					flex-direction: column;
					.head {
						display: flex;
						justify-content: space-between;
						border-bottom: 1px solid #d3d3d3;
						padding-bottom: 5px;
						margin-bottom: 10px;
						.singer {
							color: #333;
							font-size: 12px;
							font-weight: 700;
						}
						a {
							color: #666;
							font-size: 12px;
						}
					}
					.btn_group {
            display: flex;
            text-align:center;
						cursor:pointer;
						.left {
              padding-left:8px;
							flex: 1;
							height: 31px;
							line-height: 31px;
							color: #333;
							font-weight: 700;
							background-position: 0 -58px;
						}
						.right {
							width: 5px;
							background-position: right -99px;
						}
					}
				`;
