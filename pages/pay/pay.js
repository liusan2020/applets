// pages/cart/cart.js
import { request } from "../../request/index.js";
import { showModal, chooseAddress } from "../../utils/asyncwx.js";

/**
 * 支付功能分析
 * 1.点击支付按钮，获取缓存中的 token ，如果缓存中没有token 则跳转到支付授权页面 auth
 * 2.如果有 token 则开始创建订单
 */
Page({

    /**
     * 页面的初始数据
     */
    data: {
        totalCost: 0,
        selNum: 0,
        cartList: [],
        addrObj: {},
        address: ''
    },
    goodsList: [],
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        //页面显示时看缓存中是否有地址信息 有就直接显示地址信息
        const addr = wx.getStorageSync('addr') || [];
        if (addr) {
            this.setData({
                address: addr.provinceName + addr.cityName + addr.countyName + addr.detailInfo,
                addrObj: addr
            });
        }
        //获取缓存中购物车商品数据并渲染
        this.goodsList = wx.getStorageSync('cart') || [];

        this.setCarts();
    },

    //点击收货地址
    async userChooseAddress() {
        const result = await chooseAddress();
        if (result) {
            this.setData({
                address: result.provinceName + result.cityName + result.countyName + result.detailInfo,
                addrObj: result
            });
            //把地址存到缓存中
            wx.setStorageSync('addr', result);
        }
    },

    //点击支付按钮
    async handlePay() {
        //获取缓存中的token  
        const token = wx.getStorageSync('token');
        if (token) {
            // 如果缓存中存在token
            // 创建订单  把创建订单的参数发送到后台并获取返回的订单编号
            //1. 准备参数
            //1.1请求头参数
            const header = { Authorization: token }

            //1.2 请求体参数
            //订单总价格
            const order_price = this.data.totalCost;
            //收货地址
            const order_shipping_addr = this.data.address;
            //购物车商品列表
            const cart = this.data.cartList;
            //商品数组 需要 商品id ，商品数量 ，商品价格
            const goods = [];
            cart.forEach(v => {
                goods.push(
                    {
                        gid: v.gid,
                        gprice: v.real_price,
                        gnum: v.num
                    }
                );
            });
            //将请求体参数放到一个对象里去
            const orderData = { order_price, order_shipping_addr, goods }
            // 1.3发送创建订单请求
            const orderInfo = await request({ url: '', data: orderData, header: header });
            console.log(orderInfo);
            //1.4获取到返回的订单编号后就可以调用微信内置的支付方法进行支付了
        } else {
            //如果缓存没有token 则跳转到支付授权页面
            wx.navigateTo({
                url: '../auth/auth'
            });
        }

    },

    //计算所有选中商品总价
    setCarts() {
        let cost = 0;//总费用
        let selNum = 0;//选中的商品数量
        if (this.goodsList.length) {
            this.goodsList.forEach(v => {
                if (v.checked) {
                    cost += (v.real_price * 100 * v.num);
                    selNum++;
                }
            });
        }

        this.setData({
            totalCost: cost / 100,
            selNum: selNum,
            cartList: this.goodsList,
        });
    }

})