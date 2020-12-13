// pages/cart/cart.js
import { showModal, showToast, chooseAddress } from "../../utils/asyncwx.js";
Page({

    /**
     * 页面的初始数据
     */
    data: {
        allChecked: true,
        totalCost: 0,
        selNum: 0,
        cartList: [],
        addrObj: {}
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
                addrObj: addr
            });
        }
        //获取缓存中购物车商品数据并渲染
        this.goodsList = wx.getStorageSync('cart') || [];
        //如果为空取消全选选中状态
        if (!this.goodsList.length) {
            this.setData({
                allCkhed: false
            });
        }
        //加载完检测所有商品是否都是选中状态 是则把全选框设置选上  放到下面循环判断了
        // const checked = cartArr.every(v => v.checked);
        // if (checked) {
        //     this.setData({
        //         allCkhed: true
        //     });
        // }
        this.setCarts();
    },

    //点击收货地址
    async myChooseAddress() {
        const result = await chooseAddress();
        if (result) {
            this.setData({
                addrObj: result
            });
            //把地址存到缓存中
            wx.setStorageSync('addr', result);
        }
    },

    //点击购物车列表复选框处理
    selChange(e) {
        //获取当前点击的商品id
        const cgid = e.currentTarget.dataset.gid
        //在购物车列表商品中查找对应的商品下标
        const cindex = this.goodsList.findIndex(v => v.gid === cgid);
        if (cindex > -1) {
            //改变缓存中商品的选中状态
            this.goodsList[cindex].checked = this.goodsList[cindex].checked ? false : true;
            //将数据改变的购物车列表再次存到缓存中
            wx.setStorageSync('cart', this.goodsList);

            //重新调用计算函数
            this.setCarts();
        }
    },
    //点击数量加减按钮 处理方法
    async reduceIncrease(e) {
        //获取当前商品的购买数量
        const buynum = e.currentTarget.dataset.buynum;
        //获取增量数
        const incr = e.currentTarget.dataset.incr;
        //获取商品id
        const gid = e.currentTarget.dataset.gid;
        const index = this.goodsList.findIndex(v => v.gid === gid);
        if (index == -1) {
            return false;
        }

        //当商品数量为1 点击减少按钮时 则提示是否要删除商品
        if (buynum === 1 && incr < 0) {
            let del = await showModal();
            if (del) {
                this.goodsList.splice(index, 1);
            }
        } else {
            //加减数量
            this.goodsList[index].num += incr * 1;
        }

        wx.setStorageSync('cart', this.goodsList);
        //重新调用计算函数
        this.setCarts();
    },

    //点击全选处理
    /**
     * 1.
     */
    selAll(e) {

        //判断购物车是否有商品
        if (this.goodsList.length) {
            const checked = e.detail.value[0] ? true : false;

            this.goodsList.forEach(v => {
                v.checked = checked;
            });
            //将数据改变的购物车列表再次存到缓存中
            wx.setStorageSync('cart', this.goodsList);
            this.setCarts();
        } else {
            wx.showToast({
                title: '未选购任何水果',
                icon: '',
                mask: true
            });
            this.setData({
                allChecked: false
            });
        }

    },
    //结算单击事件处理
    async settleAccounts() {
        //错误标识 1未选择地址 2 未选购商品 3未选中任何商品
        let err = 0;
        let err_str = '';
        if (!this.data.addrObj.userName) {
            err = 1;
            err_str = '未选择收货地址';
        } else if (!this.goodsList.length) {
            err = 2;
            err_str = '未购买任何商品';
        } else if (!this.data.selNum) {
            err = 3;
            err_str = '未选择商品';
        }
        if (err !== 0) {
            await showToast(err_str);
            return false;
        }
        //跳转到支付页面
        wx.navigateTo({
            url: '../pay/pay'
        });

    },

    //计算所有选中商品总价
    setCarts() {
        let cost = 0;//总费用
        let selNum = 0;//选中的商品数量
        let allChecked = true;//全选框的选中状态
        if (this.goodsList.length) {
            this.goodsList.forEach(v => {
                if (v.checked) {
                    cost += (v.real_price * 100 * v.num);
                    selNum++;
                } else {
                    allChecked = false;
                }
            });
        } else {
            allChecked = false;
        }

        this.setData({
            totalCost: cost / 100,
            selNum: selNum,
            cartList: this.goodsList,
            allChecked: allChecked
        });
    }

    //之前处理取消授权再次点击无效问题  现在已经改了  不需要再重新授权了  真机调试有效果
    /**
     * 解决点击收货地址时，用户点击取消后再次点击收货地址无效的问题
     * 1、使用wx.getSetting() 来获取授权状态 scope 获取方式result.authSetting['scope.address']
     *    scope 三个值：授权成功时为true 失败时为false  未授权时为 undefined  
     * 2、 当scope的值为 false 时就需要诱导用户进行授权  打开授权页面用 wx.openSetting()
     */
    // userChooseAddress: function () {

    //     //获取授权状态        
    //     wx.getSetting({
    //         success: (result) => {
    //             let scopeStatus = result.authSetting['scope.address'];
    //             console.log(result);
    //             //判断授权状态 根据不同值进行处理
    //             if (scopeStatus === true || scopeStatus === undefined) {
    //                 //不为false 说明用户第一次点击添加地址或之前已经同意授权过了  直接调用地址选择页面
    //                 wx.chooseAddress({
    //                     success: (result1) => {
    //                         console.log(result1);
    //                     }
    //                 });
    //             } else {
    //                 //为false时说明用户曾经拒绝授权  那么就需要诱导用户打开授权页面进行授权
    //                 wx.openSetting({
    //                     success: (result2) => {
    //                         //用户重新授权成功之后 再次打开地址选择页面
    //                         wx.chooseAddress({
    //                             success: (result3) => {
    //                                 console.log(result3);
    //                             }
    //                         });
    //                     }
    //                 });

    //             }
    //         }
    //     });
    // }
})