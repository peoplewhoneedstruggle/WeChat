//app.js
App({
  onLaunch: function () {
    wx.login({
      success: function(res){
        var code = res.code;
        if (code) {
          console.log('获取用户登录凭证：' + code);
        } else {
          console.log('获取用户登录态失败：' + res.errMsg);
        }
        // wx.getUserInfo({
        //   success: function(res2){
        //     console.log(res2)
        //   }
        // })
      }
    })
    
    this.globalData = {}
  }
})
