//引入promise 封装的请求函数
import { request } from "../../request/index.js";
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
    recommendList: []
  },

  onShow: function () {
    this.getIndexInfo();
  },
  async getIndexInfo() {
    const indexData = wx.getStorageSync('indexData') || {};
    if (indexData.time && (Date.now() - indexData.time > 1000 * 1800)) {
      //缓存中有数据且没有过期直接渲染 过期时间为半小时
      this.setData({
        swipList: indexData.swiper,
        navList: indexData.navs,
        hotImg: indexData.hotImg,
        hotList: indexData.hotList,
        recommendImg: indexData.recommendImg,
        recommendList: indexData.recommendList
      });
    } else {
      //缓存中没有数据则请求数据并放到缓存中
      //请求轮播图数据
      const swiper = await request({ url: 'swiper' });
      //请求导航栏数据
      const navs = await request({ url: 'navs' });
      //请求火爆热卖数据
      const hot = await request({ url: 'hot' });
      //请求推荐数据
      const tj = await request({ url: 'tj' });
      indexData.swiper = swiper.data.message;
      indexData.navs = navs.data.message;
      indexData.hotImg = hot.data.hot_img;
      indexData.hotList = hot.data.message;
      indexData.recommendImg = tj.data.tj_img;
      indexData.recommendList = tj.data.message;
      //设置数据
      this.setData({
        swipList: indexData.swiper,
        navList: indexData.navs,
        hotImg: indexData.hotImg,
        hotList: indexData.hotList,
        recommendImg: indexData.recommendImg,
        recommendList: indexData.recommendList
      });
      indexData.time = Date.now();
      wx.setStorageSync('indexData', indexData);
    }
  },
})
