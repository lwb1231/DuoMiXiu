// pages/page-wddj/page-wddj.js
var url = "https://wxx.zyinc.net/web/uploads/mall1/20201023/images"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperCurrent: 0,
    navbar: ['会员','靓号', '坐骑'],
    currentTab: 0,
    grade:[{
      grade_top:"尊贵身份",
      grade_bottom:"携带VIP标识登场",
      grade_right_top:"炫酷标识",
      grade_right_bottom:"用户聊天显示VIP会员图标"
    },]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  swiperChange: function (e) {
    this.setData({
      swiperCurrent: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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