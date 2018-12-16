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
        <div class="content" v-for="i in 4" :key='i'>
          <div class="article">
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
                  0
                </p>
                <p>
                  觀看數：
                </p>
              </div>
            </div>
            <div class="bottom">
              <div class="article_title">
                標題{{i}}
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
.bg{
  width: 100vw;
  height: 100vh;
  border: 1px solid #000;
  background-color: #ebf6ff;
  padding-top: 56px;
  .left{
    float: left;
    height: 100%;
  }
  .middle{
    float: left;
    height: 100%;
    .hotArticle{
      width: 64%;
      border: 1px solid rgb(194, 194, 194);
      background-color: rgba(255, 255, 255, .4);
      height: 40%;
      margin-left: 18%;
      margin-right: 18%;
      margin-top: 2%;
      border-radius: 12px;
      float: left;
      .header{
        border-bottom: 1px solid rgb(190, 190, 190);
        height: 4%;
        padding: 2%;
        font-size: 24px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: rgb(255, 73, 49);
        padding-left: 6%;
      }
      .content{
        border-bottom: 1px solid rgb(190, 190, 190);
        background-color: rgba(255, 255, 255, .4);
        height: 21.8%;
        .article{
          height: 100%;
          cursor: pointer;
          .top{
            border-bottom: 1px solid rgb(190, 190, 190);
            height: 32%;
            font-size: 18px;
            .date{
              width: 45%;
              float: left;
              padding-left: 4%;
              p{
                float: left;
              }
            }
            .watchCount{
              width: 45%;
              float: right;
              padding-right: 4%;
              p{
                float: right;
              }
            }
          }
          .bottom{
            .article_title{
              font-size: 24px;
              padding: 1.4%;
              padding-left: 4%;
            }
          }
        }
      }
      .content:last-child{
        border: none;
        border-radius: 0 0 12px 12px;
      }
      .content:hover{
        background-color: #c4e1ff;
      }
    }
    .newAirticle{
      width: 64%;
      border: 1px solid rgb(194, 194, 194);
      background-color: rgba(255, 255, 255, .4);
      height: 52%;
      margin-top: 2%;
      margin-left: 18%;
      margin-right: 18%;
      float: left;
      .header{
        border-bottom: 1px solid rgb(190, 190, 190);
        height: 4%;
        padding: 2%;
        font-size: 24px;
        display: flex;
        align-items: center;
        font-weight: bold;
        color: rgb(58, 110, 255);
        padding-left: 6%;
      }
    }
  }
  .right{
    float: left;
    height: 100%;
  }
}
</style>

