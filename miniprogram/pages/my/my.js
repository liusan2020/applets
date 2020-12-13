// pages/my/my.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        userinfo: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        const userinfo = wx.getStorageSync('userinfo') || {};
        this.setData({
            userinfo: userinfo
        });
    },
    userLogin: function (e) {
        const uinfo = e.detail.userInfo;
        wx.setStorageSync('userinfo', uinfo);
        this.setData({
            userinfo: uinfo
        });
    }

})