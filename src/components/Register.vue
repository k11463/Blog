<template>
    <div class="bg">
        <div class="pc-2 left"></div>
        <div class="pc-6 middle">
            <div class="area">
                <div class="head">
                    <p>
                        <i>會 員 註 冊</i>
                    </p>
                </div>
                <div class="body">
                    <div class="col">
                        <label for="account">
                            <div class="left">
                                會員帳號
                            </div>
                            <div class="right">
                                <input type="text" id="account" size="20" placeholder="請輸入帳號" v-model="datas.account">
                            </div>
                        </label>
                    </div>
                    <div class="col">
                        <label for="password">
                            <div class="left">
                                會員密碼
                            </div>
                            <div class="right">
                                <input type="password" id="password" size="20" placeholder="請輸入密碼" v-model="datas.password">
                            </div>
                        </label>
                    </div>
                    <div class="col">
                        <label for="confirm_password">
                            <div class="left">
                                會員密碼確認
                            </div>
                            <div class="right">
                                <input type="password" id="confirm_password" size="20" placeholder="請確認密碼" v-model="datas.confirm_password">
                            </div>
                        </label>
                    </div>
                    <div class="col">
                        <label for="email">
                            <div class="left">
                                Email
                            </div>
                            <div class="right">
                                <input type="text" id="email" size="20" placeholder="請輸入Email" v-model="datas.email">
                            </div>
                        </label>
                    </div>
                    <div class="col">
                        <label for="account">
                            驗證碼
                            <img src="" alt="">
                        </label>
                    </div>
                    <div class="col">
                        <button class="btn" @click="click">註冊</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="pc-2 right"></div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            datas: {
                account: '',
                password: '',
                confirm_password: '',
                email: ''
            }
        }
    },
    methods: {
        click(){
            
        }
    }
}
</script>


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
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    label{
                        font-size: 18px;
                        width: 100%;
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        .left{
                            width: 20%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            justify-content: flex-end;
                        }
                        .right{
                            width: 44%;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            input{
                                width: 72%;
                                height: 36%;
                                border-radius: 4px;
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
                        } // right
                    } // label
                    .btn{
                        width: 16%;
                        height: 80%;
                        border-radius: 8px;
                        background-color: rgb(68, 150, 190);
                        color: #fff;
                        border: none;
                        outline: none;
                        font-size: 16px;
                    }
                    .btn:active{
                        transform: translateY(-4%);
                        background-color: rgb(43, 129, 172);
                    }
                } //col
                .col:last-child{
                    height: 8%;
                }
            } // body
        }
    }
    .right{
        height: 100%;
    }
}
</style>
