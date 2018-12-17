<template>
  <div class="bg">
    <div class="left pc-2">
      
    </div>
    <div class="middle pc-6">
      <div class="hotArticle">
        <div class="header">
          <i>
            熱門留言
          </i>
        </div>
        <div class="content">
          <div class="article" v-for="i in 4" :key='i'>
            <div class="top">
              <div class="article_title">
                <i>
                  標題{{i}}
                </i>
              </div>
            </div>
            <div class="bottom">
              <div class="ArticleContent">
                內容{{i}}
              </div>
              <div class="other">
                <div class="date">
                  <p>
                    發佈日期：
                  </p>
                  <p>
                    2018/12/15
                  </p>
                </div>
                <div class="watchCount">
                  <p>
                    觀看數：
                  </p>
                  <p>
                    0
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="newAirticle">
        <div class="header">
          <i>
            最新留言
          </i>
        </div>
        <div class="content">
          <div class="article" v-for="i in 20" :key='i'>
            <div class="top">
              <div class="date">
                <p>
                  發佈日期：
                </p>
                <p>
                  2018/12/15
                </p>
              </div>
              <div class="watchCount">
                <p>
                  觀看數：
                </p>
                <p>
                  0
                </p>
              </div>
            </div>
            <div class="bottom">
              <div class="article_title">
                <i>
                  標題{{i}}
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="right pc-2">
      
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@mixin customCenter(){
    display: flex;
    align-items: center;
    justify-content: center;
}
*{
  user-select: none;
}
.bg{
  width: 100vw;
  height: 140vh;
  border: 1px solid #000;
  padding-top: 56px;
  .left{
    float: left;
    height: 100%;
  }
  .middle{
    float: left;
    height: 100%;
    background-color: #ebf6ff;
    .hotArticle{
      width: 64%;
      height: 40%;
      margin-left: 18%;
      margin-top: 2%;
      float: left;
      .header{
        height: 4%;
        font-size: 24px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: rgb(255, 127, 68);
        padding-top: 2%;
        padding-left: 6%;
      }
      .content{
        height: 90%;
        .article{
          width: 40%;
          height: 44%;
          border: 1px solid rgb(194, 194, 194);
          border-radius: 8px;
          background-color: white;
          float: left;
          cursor: pointer;
          margin-left: 6.4%;
          margin-top: 4%;
          transition-duration: .2s;
          .top{
            border-bottom: 1px solid rgb(190, 190, 190);
            height: 20%;
            @include customCenter();
            .article_title{
              font-size: 20px;
              height: 100%;
              display: flex;
              align-items: center;
              padding: 1.4%;
              padding-left: 4%;
              font-weight: bold;
            }
          }
          .bottom{
            height: 80%;
            .ArticleContent{
              height: 64%;
              padding: 4%;
              border-bottom: 1px solid rgb(190, 190, 190);
            }
            .other{
              height: 20%;
              .date{
                width: 62%;
                height: 100%;
                float: left;
                @include customCenter();
                p{
                  float: left;
                }
              }
              .watchCount{
                width: 32%;
                height: 100%;
                float: right;
                padding-right: 2%;
                @include customCenter();
                p{
                  float: right;
                }
              }
            }
          }
        } // article
        .article:hover{
          transform: scale(1.1);
        }
      }
    }
    .newAirticle{
      width: 56%;
      height: 48%;
      margin-top: 2%;
      margin-left: 22%;
      float: left;
      .header{
        height: 4%;
        font-size: 24px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: rgb(44, 77, 167);
        margin-bottom: 4%;
      }
      .content{
        height: 90%;
        overflow: scroll;
        overflow-x: hidden;
        -ms-overflow-style: none; //隱藏滾動條 For IE10+
        overflow: -moz-scrollbars-none; //隱藏滾動條 For Firefox
        .article{
          height: 12%;
          margin-top: 2.8%;
          border: 1px solid rgb(190, 190, 190);
          background-color: white;
          border-radius: 8px;
          cursor: pointer;
          transition-duration: .2s;
          .top{
            border-bottom: 1px solid rgb(190, 190, 190);
            height: 36%;
            .date{
              width: 50%;
              height: 100%;
              float: left;
              display: flex;
              align-items: center;
              p{
                float: left;
                margin-left: 4%;
              }
              p:last-child{
                margin-left: 0;
              }
            }
            .watchCount{
              width: 48%;
              height: 100%;
              float: left;
              display: flex;
              align-items: center;
              justify-content: flex-end;
            }
          }
          .bottom{
            height: 100%;
            .article_title{
              font-size: 20px;
              font-weight: bold;
              padding: 1.2%;
              padding-left: 2%;
            }
          }
        } // article
        .article:first-child{
          margin-top: 0;
        }
        .article:hover{
          transform: scaleX(0.9);
        }
      }
      .content::-webkit-scrollbar { width: 0 !important } //隱藏滾動條 For chrome、Safari
    } // newArticle
  }
  .right{
    float: left;
    height: 100%;
  }
}
</style>

