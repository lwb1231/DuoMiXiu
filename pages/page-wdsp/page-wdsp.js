// pages/category/category.js
var url="https://wxx.zyinc.net/web/uploads/mall1/20201023/images"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    image_sp:[{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    },{
      img:url+"/test.png",
      title:"我是视频"
    }],
    swiperCurrent:0,
    navbar: ['我的视频'],
    currentTab: 0

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
  onShow: function() {
 
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 1  //这个数字是当前页面在tabBar中list数组的索引
      })
    }
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