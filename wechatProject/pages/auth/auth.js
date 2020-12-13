// pages/auth/auth.js
import { request } from "../../request/index.js";
import { login } from "../../utils/asyncwx.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {

    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    //点击授权支付按钮处理方法
    async authPay(e) {
        console.log(e);
        return;
        // 1.获取用户信息
        const { encryptedData, iv, rawData, signature } = e.detail;

        // 2.获取用户登录的code
        const { code } = await login();

        const tkdata = { encryptedData, iv, rawData, signature, code }
        // 3.获得以上参数后 发送请求到自己的服务器进行处理后获取微信的token 并返回获取到的token
        const token = await request({ url: 'wxtk', data: tkdata, method: 'post' });
        console.log(token);
    }

})