//引入promise 封装的请求函数
import { request } from "../../request/index.js";
// pages/category/category.js
Page({
    /**
     * 页面的初始数据
     */
    data: {
        currentOn: 0,
        leftMenus: [],
        goodsList: [],
        scrollTop: 0,

    },
    cgdatas: [],
    pageStart: 0,
    pageSize: 6,
    currIndex: 0,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        //1.获取微信小程序本地存储
        let datas = wx.getStorageSync('cgdatas');
        if (!datas) {
            //如果小程序本地存储没有数据则请求数据
            this.getCategory();
        } else {
            //2.本地存储有数据
            //2.1如果本地存储数据过期则重新请求数据
            if (Date.now() - datas.time > 1000 * 60) {
                this.getCategory();
            } else {
                //2.2本地存储数据没有过期则赋值渲染
                this.cgdatas = datas.data;
                this.setData({
                    leftMenus: datas.data,
                    goodsList: datas.data[0].gdatas.slice(this.pageStart, this.pageSize)
                });
                this.pageStart = this.pageSize;
                this.pageSize += this.pageSize;
            }

        }


    },

    getCategory: function () {
        //获取左边分类
        request({ url: 'cgdatas' }).then((res) => {
            this.cgdatas = res.data.message;
            //把请求的分类及分类商品数据缓存到本地存储中
            wx.setStorageSync('cgdatas', { time: Date.now(), data: res.data.message });
            this.setData({
                leftMenus: res.data.message,
                goodsList: res.data.message[0].gdatas.slice(this.pageStart, this.pageSize)
            });
            this.pageStart = this.pageSize;
            this.pageSize += this.pageSize;
        })
    },

    //点击切换菜单并获取对应类别商品数据
    menuChange: function (event) {
        this.pageStart = 0;
        this.pageSize = 6;
        let temp = event.currentTarget.dataset.currindex;
        this.currIndex = temp;
        let tagGoods = this.cgdatas[temp].gdatas.slice(this.pageStart, this.pageSize);
        this.setData({
            currentOn: temp,
            goodsList: tagGoods,
            scrollTop: 0
        });
        this.pageStart = this.pageSize;
        this.pageSize += this.pageSize;
    },

    //上拉触底加载事件
    loadData: function () {
        //获取上拉加载的数据
        let pushData = this.cgdatas[this.currIndex].gdatas.slice(this.pageStart, this.pageSize);
        //如果上拉加载的数据大于0 就是还有数据则加载
        if (pushData.length > 0) {
            //弹出加载中模态
            wx.showLoading({
                title: '加载中',
                mask: true
            });
            //1.把商品渲染数组赋值给临时变量
            let temp = this.data.goodsList;
            //2.然后把要加载的数据结构push到临时变量
            temp.push(...pushData);
            //3.再把加载好的临时变量赋值给商品列表进行渲染
            this.setData({
                goodsList: temp
            });
            wx.hideLoading();
            this.pageStart = this.pageSize;
            this.pageSize += this.pageSize;
        }
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        this.pageStart = 0;
        this.pageSize = 6;
        this.setData({
            currentOn: 0,
            scrollTop: 0,
            goodsList: this.cgdatas[0].gdatas.slice(this.pageStart, this.pageSize)
        });
        this.pageStart = this.pageSize;
        this.pageSize = this.pageSize * 2;
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }
})