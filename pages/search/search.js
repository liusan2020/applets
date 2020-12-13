// pages/search/search.js
//引入promise 封装的请求函数
import { request } from "../../request/index.js";
/**
 * 1、用户输入关键字
 * 2、对输入的关键字进行合法检测
 * 3、对用户输入进行防抖处理
 * 3.1 防抖处理就是 当用户输入完成后再发送请求，而不是每按一次键都发送请求
 * 3.2 防抖处理 使用 定时器 setTiemout 来完成
 */
Page({

    /**
     * 页面的初始数据
     */
    data: {
        inpContent: '',
        btnShow: false,
        matchingShow: false,
        resultShow: false,
        matchingList: [],
        searchResult: []
    },
    //定义全局定时器
    timeout: null,
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },

    //监听用户输入的函数
    inputChange: function (e) {
        let that = this;
        //防抖处理
        //清除定时器
        clearTimeout(this.timeout);

        //用户输入时先清除结果列表
        that.setData({
            resultShow: false,
            searchResult: []
        });

        //结构赋值
        let { value } = e.detail;
        //输入合法性检测 只检测是否空字符
        if (!value.trim()) {
            that.setData({
                btnShow: false,
                matchingShow: false,
                matchingList: [],
            });
            return '';
        }

        //防抖处理  输入完成后1秒在发送请求
        this.timeout = setTimeout(function () {
            that.queryMatching('matching', value);
        }, 500);
    },
    //请求搜索结果
    queryResult: function (e) {
        let val = e.target.dataset.gname;
        //点击匹配搜索项时清除匹配列表并隐藏
        this.setData({
            matchingShow: false,
            matchingList: []
        });
        wx.showLoading({
            title: '加载中',
            mask: true
        });
        this.queryMatching('searchResult', val);
    },
    //发送搜索请求
    //stype  搜索类型  1 返回搜索匹配项  2 返回搜索结果
    queryMatching: function (sword, val) {
        request({ url: sword + '/' + val }).then((res) => {
            if (sword == 'matching') {
                if (res.data.message.length) {
                    let temp = { id: 0, goods_name: val };
                    res.data.message.unshift(temp);
                }
                this.setData({
                    btnShow: true,
                    matchingShow: true,
                    matchingList: res.data.message
                });
            } else {
                wx.hideLoading();
                this.setData({
                    resultShow: true,
                    searchResult: res.data.message
                });
            }

        })
    },

    //点击取消按钮
    cancleSearch: function () {
        this.setData({
            inpContent: '',
            btnShow: false,
            resultShow: false,
            matchingShow: false,
            matchingList: [],
            searchResult: []
        });
    }

})