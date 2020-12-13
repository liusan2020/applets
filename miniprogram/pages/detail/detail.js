//引入promise 封装的请求函数
import { request } from "../../request/index.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        goodsObj: {}
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        const { gid } = options;
        this.getGoodsInfo(gid);
    },
    //请求商品信息  es7 的async await 要开启增强编译才能使用
    async getGoodsInfo(gid) {
        const res = await request({ url: 'goodsInfo/' + gid });
        this.setData({
            goodsObj: res.data.message
        });
        // request({ url: 'goodsInfo/' + gid }).then((res) => {
        //     this.setData({
        //         goodsObj: res.data.message
        //     });
        // })
    },

    //点击轮播图放大图片
    showBigImg: function (e) {
        //获取当前点击的轮播图片url
        const { current } = e.currentTarget.dataset;
        wx.previewImage({
            current: current, // 当前显示图片的http链接
            //图片url数组
            urls: this.data.goodsObj.image_src
        })
    },

    /**
     * 点击加入购物车分析
     * 1 绑定点击事件
     * 2 点击后从微信缓存中获取购物车信息 如果缓存没有则创建购物车数组
     * 3 如果购物车数组中存在相同的商品则执行商品数量加1否则添加新的商品信息到购物车数组中
     * 4 上面步骤处理完成之后 重新缓存到微信本地存储中
     */
    addInCart: function () {

        //如果缓存中没有购物车信息则创建空购物车数组
        let cart = wx.getStorageSync('cart') || [];
        //查找是否有相同id的商品
        let index = cart.findIndex(v => v.gid === this.data.goodsObj.gid);
        //没有找到相同id的商品 则把当前商品添加到购物车数组中
        if (index === -1) {
            //每添加一个商品就加上 选中属性 checked 设置为true
            this.data.goodsObj.checked = true;
            this.data.goodsObj.num = 1;
            cart.push(this.data.goodsObj);
        } else {
            //找到相同商品id 则商品数量加1
            cart[index].num++;
        }
        //处理完后重新写到微信缓存中
        wx.setStorageSync('cart', cart);
        //提示信息  默认1.5秒后关闭 防止用户过快点击加入按钮
        wx.showToast({
            title: '加入成功',
            icon: 'success',
            mask: true
        })

    },

    /**
     * 用户点击分享
     */
    onShareAppMessage: function (e) {

    }
})