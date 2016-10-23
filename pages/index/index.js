//index.js
//获取应用实例
// var app = getApp()
Page({
  data: {
    // userInfo: {},
  },
  // onLoad: function (options) {
  //   console.log(options)
  //   console.log('监听页面加载')
  // },
  onReady () {
    console.log('监听页面初次渲染完成')
      this.startGame()
  },
  // onShow () {
  //   console.log('页面每次由隐藏变为显示 和ready的区别是页面没有销毁情况下ready只会被调用一次')
  // },
  // onHide: function () {
  //   console.log('监听页面隐藏')
  // },
  // onUnload () {
  //   console.log('监听页面被销毁')
  // },
  // onPullDownRefresh () {
  //   console.log('监听用户下拉动作')
  // },
  startGame: function () {
    console.log('按钮点击事件触发,这里跳转到游戏页面')
    wx.navigateTo({
      url: '/pages/game/game'
    })
  }
})
