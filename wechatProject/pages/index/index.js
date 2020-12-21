//引入promise 封装的请求函数
import { request } from "../../request/index.js";
const ImgLoader = require('../../img-loader/img-loader.js');
//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    swipList: [],
    navList: [],
    hotImg: null,
    hotList: [],
    recommendImg: null,
    recommendList: [],
  },

  onLoad: function () {
    this.imgLoader = new ImgLoader(this);
  },
  onShow: function () {

  },
  imgLoaded: function (e) {

  },
  /**
     * 生命周期函数--监听页面初次渲染完成
     */
  onReady: function () {
    this.getIndexInfo();
  },
  async getIndexInfo() {
    let indexData = wx.getStorageSync('indexData') || {};
    if (!(indexData.time && (Date.now() - indexData.time > 1000 * 60))) {
      const res = await request({ url: 'page' });
      indexData = res.data.message;
      indexData.time = Date.now();
      wx.setStorageSync('indexData', indexData);
    }

    this.loadImgs(indexData.swiper);
    this.loadImgs(indexData.navs);
    this.loadImgs(indexData.hot_data);

    this.setData({
      swipList: indexData.swiper,
      navList: indexData.navs,
      hotImg: indexData.hot_img,
      hotList: indexData.hot_data,
      recommendImg: indexData.tj_img,
      recommendList: indexData.tj_data
    });
  },
  loadImgs(loadObj) {
    loadObj.forEach(item => {
      item.loaded = 'false';
      this.imgLoader.load(item.image_src, (err, data) => {
        //console.log('图片加载完成', err, data.src, data.width, data.height)
        if (item.image_src == data.src) {
          item.loaded = 'true';
        }
      })
    });
  }
})

