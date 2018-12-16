<template>
    <div class="bg">
        <div class="left pc-2">
            <h3>
                <i>
                    <router-link class="link" to="/">Blog</router-link>
                </i>
            </h3>
        </div>
        <div class="middle pc-6">
            <label for="searchArticle">
                <input type="text" id="searchArticle" size="20" placeholder="輸入欲搜尋的文章">
                <button @click="click">搜尋文章</button>
            </label>
        </div>
        <div class="right pc-2">
            <div class="smallBtn">
                個人頁面
            </div>
            <div class="smallBtn">
                登入
            </div>
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        click(){
            this.axios.post('/test', {
                value: '1'
            }).then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
        }
    }
}
</script>

<style lang="scss" scoped>
@import "~bootstrap/scss/bootstrap";
@mixin customCenter(){
    display: flex;
    align-items: center;
    justify-content: center;
}
*{
    user-select: none;
}
.bg{
    width: 100%;
    height: 56px;
    background: -webkit-radial-gradient(circle,#c4e1ff,#84c1ff);
    opacity: .8;
    position: fixed;
    z-index: 1;
    .left{
        height: 100%;
        float: left;
        @include customCenter();
        h3{
            margin-top: 2%;
            cursor: pointer;
            .link{
                text-decoration: none;
                color: #256fb9;
            }
        }
    }
    .middle{
        height: 100%;
        float: left;
        label{
            width: 100%;
            height: 100%;
            @include customCenter();
            #searchArticle{
                width: 600px;
                height: 52%;
                border-radius: 4px;
                padding-left: 16px;
                font-size: 16px;
                font-weight: bold;
                color: #005ab5;
                background-color: rgba(255, 255, 255, 0);
                border: none;
                border-bottom: 1px solid;
            }
            #searchArticle:focus{
                background-color: white;
            }
            button{
                cursor: pointer;
                width: 100px;
                height: 60%;
                margin-left: 4%;
                background-color: #2894ff;
                color: white;
                border-radius: 8px;
                font-weight: bold;
                border: none;
                box-shadow: 4px 4px 4px 0 black;
            }
            button:active{
                transform: translateY(4px);
                box-shadow: 0 0 0 0;
            }
        }
    }
    .right{
        float: left;
        height: 100%;
        @include customCenter();
        .smallBtn{
            cursor: pointer;
            border-bottom: 1px solid #b9ddff;
            font-size: 20px;
            padding: 8px 16px 8px 16px;
            color: white;
            transition-duration: .8s;
            border-radius: 4px;
            margin-right: 4%;
        }
        .smallBtn:hover{
            background-color: #b9ddff;
        }
        .smallBtn:last-child{
            margin: 0;
        }
    }
}
</style>
