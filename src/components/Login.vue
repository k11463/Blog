<template>
    <div class="bg">
        <div class="pc-2 left"></div>
        <div class="pc-6 middle">
            <div class="area">
                <div class="head">
                    <p>
                        <i>會 員 登 入</i>
                    </p>
                </div>
                <div class="body">
                    <div class="col">
                        <label for="account">
                            會員帳號
                            <input type="text" id="account" size="20" placeholder="請輸入帳號">
                        </label>
                    </div>
                    <div class="col">
                        <label for="account">
                            會員密碼
                            <input type="password" id="account" size="20" placeholder="請輸入帳號">
                        </label>
                    </div>
                    <div class="col">
                        <label for="account">
                            驗證碼
                            <img src="" alt="">
                        </label>
                    </div>
                    <div class="col">
                        <div class="forgotPassword">
                            <p><router-link to="/" class="link">忘記密碼?</router-link></p>
                        </div>
                        <div class="register">
                            <p>尚未註冊會員?</p>
                            <p><router-link to="/" class="link">點我註冊</router-link></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="pc-2 right"></div>
    </div>
</template>

<style lang="scss" scoped>
.bg{
    width: 100vw;
    height: 81.4vh;
    overflow: hidden;
    .left{
        height: 100%;
        float: left;
    }
    .middle{
        height: 100%;
        background-color: #ebf6ff;
        float: left;
        margin-top: 56px;
        display: flex;
        justify-content: center;
        .area{
            width: 50%;
            height: 72%;
            background-color: #fff;
            margin-top: 6.8%;
            border-radius: 8px;
            .head{
                height: 12%;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 24px;
                font-weight: bold;
                color: rgba(29, 53, 133, 0.747);
                margin-top: 4%;
            }
            .body{
                height: 88%;
                .col{
                    height: 16%;
                    margin-top: 6%;
                    label{
                        font-size: 18px;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        input{
                            width: 36%;
                            height: 36%;
                            border-radius: 4px;
                            margin-left: 4%;
                            padding-left: 2%;
                            font-size: 16px;
                        }
                        input:focus{
                            background-color: rgba(133, 159, 245, 0.897);
                            color: white;
                        }
                        input:focus::placeholder{
                            color: white;
                        }
                    }
                    .forgotPassword{
                        float: left;
                        width: 50%;
                        .link{
                            color: rgb(168, 31, 31);
                            text-decoration: none;
                        }
                        p{
                            float: right;
                            margin-right: 24%;
                        }
                    }
                    .register{
                        float: right;
                        width: 50%;
                        .link{
                            color: rgb(16, 111, 175);
                            text-decoration: none; 
                        }
                        p{
                            margin-left: 2%;
                            float: left;
                        }
                    }
                } //col
            }
        }
    }
    .right{
        height: 100%;
    }
}
</style>
