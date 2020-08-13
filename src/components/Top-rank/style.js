import styled from "styled-components";

export const TopRankWrapper = styled.div`
	flex: 1;
	.header {
		height: 100px;
		display: flex;
		margin: 20px 0 0 20px;
		.image {
			width: 80px;
			height: 80px;
      position: relative;
      img{
        width:80px;
        height:80px;
      }
		}
		.info {
			margin: 5px 0 0 10px;
			a {
				font-size: 14px;
				color: #333;
				font-weight: 700;
			}
			.btn {
				display: inline-block;
				width: 22px;
				height: 22px;
				margin: 10px 10px 0 0;
				cursor: pointer;
			}
			.play {
				background-position: -267px -205px;
				&:hover {
					background-position: -267px -235px;
				}
			}

			.favor {
				background-position: -300px -205px;
				&:hover {
					background-position: -300px -235px;
				}
			}
		}
	}
	.list {
    .list-item{
      position:relative;
      display:flex;
      align-items:center;
      height:32px;
      line-height:32px;
      .index{
        width:35px;
        text-align:center;
        margin-left:10px;
        font-size:16px; 
        color:#666666;
      }
      :nth-child(-n+3) .index{
        color:#c10d0c;
      }
      .info{
        display:flex;
        align-items:center;
        justify-content:space-between;
        width:170px;
        height:18px;
        line-height:18px;
        .name{
          flex:1;
          a{
            color:#000;
          font-size:12px;
          }
        }
        }
        &:hover .operation{
          display:block;
        }
        .operation{
          display:flex;
          align-items:center;
          justify-content:space-between;
          width:82px;
          display:none;
          .btn{
            width: 17px;
            height: 17px;
            cursor: pointer;
            margin-left:10px;
          }
          .play {
            background-position: -267px -268px;
            &:hover{
              background-position: -267px -288px;
            }
          }
          .add{
            background-position: 0 -698px;
                        &:hover{
              background-position: -22px -698px;
            }
          }
          .favor {
            background-position: -297px -268px;
                        &:hover{
              background-position: -297px -288px;
            }
          }
        }
      }
    }
	}
	.footer {
		height: 32px;
		display: flex;
		align-items: center;
		margin-right: 20px;
		justify-content: flex-end;
		a {
			color: #000;
		}
  
`;
