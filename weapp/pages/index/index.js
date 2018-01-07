//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    modules: [
      {image: './assets/module.png', text: '绩效考核'},
      {image: './assets/module.png', text: '请假'},
      {image: './assets/module.png', text: '动态'},
      {image: './assets/module.png', text: '有赞币'},
      {image: './assets/module.png', text: '活动'},
      {image: './assets/module.png', text: '日程'},
      {image: './assets/module.png', text: '会议室预定'},
      {image: './assets/more.png', text: '全部', url: '/pages/modules/modules'}
    ],
    teas: [
      {title: '你好吗，我很好', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515858047&di=fb482c9fc326f2795955c10f4c13f7f6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120422005031366.JPG', desc: 'desc 1', readCount: 2, commentCount: 3},
      {title: '你好吗，我很好', desc: 'desc 1', readCount: 2, commentCount: 3},
      {title: '你好吗，我很好', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515858047&di=fb482c9fc326f2795955c10f4c13f7f6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120422005031366.JPG', desc: 'desc 1', readCount: 2, commentCount: 3},
      {title: '你好吗，我很好', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515858047&di=fb482c9fc326f2795955c10f4c13f7f6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120422005031366.JPG', desc: 'desc 1', readCount: 2, commentCount: 3},
      {title: '你好吗，我很好', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515858047&di=fb482c9fc326f2795955c10f4c13f7f6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120422005031366.JPG', desc: 'desc 1', readCount: 2, commentCount: 3},
      {title: '你好吗，我很好', image: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1515858047&di=fb482c9fc326f2795955c10f4c13f7f6&imgtype=jpg&er=1&src=http%3A%2F%2Fwww.zhlzw.com%2FUploadFiles%2FArticle_UploadFiles%2F201204%2F20120422005031366.JPG', desc: 'desc 1', readCount: 2, commentCount: 3}
    ]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
