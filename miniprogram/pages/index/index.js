//index.js
const app = getApp();

Page({
    data: {
        avatarUrl: "./user-unlogin.png",
        userInfo: {},
        logged: false,
        takeSession: false,
        requestResult: "",
        consumeType: ["不限", "随便凑合", "大吃一顿"],
        foodType: ["不限", "早餐", "午餐", "晚餐", "夜宵"],
        consumeTypeindex: 0,
        foodTypeindex: 0,
        mealList: [],
        mealFilter: [],
        mealFinalFilter:[],
        filterFlag:false,
        autoplay: false,
        togglePlay: "开始",
        finaMeal: "",
    },
    onLoad: function() {
        let _this = this;
        if (!wx.cloud) {
            wx.redirectTo({
                url: "../chooseLib/chooseLib",
            });
            return;
        }
        wx.getStorage({
            key: "userMealList",
            success: function(data) {
                _this.setData({
                    mealList: data.data,
                    mealFilter: data.data,
                    mealFinalFilter:data.data
                });
            },
            fail: function() {
                _this.setData({
                    mealList: app.globalData.mealList,
                    mealFilter: app.globalData.mealList,
                    mealFinalFilter: app.globalData.mealList,
                });
            }
        });

        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting["scope.userInfo"]) {
                    console.log(res);
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    wx.getUserInfo({
                        success: res => {
                            this.setData({
                                avatarUrl: res.userInfo.avatarUrl,
                                userInfo: res.userInfo
                            });
                            console.log(this.data);
                        }
                    });
                }
            }
        });
    },
    startMeal() {
        this.setData({
            autoplay: !this.data.autoplay,
        });
        this.setData({
            togglePlay: this.data.autoplay ? "停" : "开始"
        });
        if (!this.data.autoplay) {
            wx.showModal({
                title: "今天就去吃",
                content: this.data.finaMeal,
                confirmText: "就是你啦",
                cancelText: "考虑考虑",
                bindconfirm: function() {},
                bindcancel: function() {}
            });
        }
    },
    swiperChanged(event) {
        this.setData({
            finaMeal: this.data.mealList[event.detail.current].mealName
        });
        // console.log(this.data.mealList[event.detail.current].mealName);
        if (!this.data.autoplay) {
            wx.showModal({
                title: "今天就去吃",
                content: this.data.finaMeal,
                confirmText: "就是你啦",
                cancelText: "考虑考虑",
                bindconfirm: function() {},
                bindcancel: function() {}
            });
        }
    },
    onGetUserInfo: function(e) {
        console.log(this.data.userInfo);
        if (!this.logged && e.detail.userInfo) {
            this.setData({
                logged: true,
                avatarUrl: e.detail.userInfo.avatarUrl,
                userInfo: e.detail.userInfo
            });

            console.log(this.data.userInfo);
        }
    },
    catchTouchMove() {
        return false;
    },
    consumeTypeChange: function(e) {
      console.log(this.data.mealFinalFilter);
      console.log(e.detail.value,this.data.consumeTypeindex)
      if (this.data.foodTypeindex==0&&e.detail.value!=0){
        this.setData({
          mealFilter: this.data.mealList.filter(item => item.consumeType.indexOf(this.data.consumeType[e.detail.value]) != -1)
        })
        this.setData({
          mealFinalFilter: this.data.mealFilter
        })
        console.log(1)
      }
      if (this.data.foodTypeindex != 0 && e.detail.value != 0){
        this.setData({
          mealFinalFilter: this.data.mealFilter.filter(item => item.consumeType.indexOf(this.data.consumeType[e.detail.value]) != -1)
        })
        console.log(2)
      }
      if (this.data.foodTypeindex == 0 && e.detail.value == 0){
        this.setData({
          mealFinalFilter: this.data.mealList
        })
      }
      if (e.detail.value != this.data.consumeTypeindex) {
        this.setData({
          consumeTypeindex: e.detail.value
        });
        console.log(3)
      }
      console.log(this.data.mealFinalFilter);
    },

    foodTypeChange: function(e) {
      console.log(this.data.mealFinalFilter);
      if (this.data.consumeTypeindex == 0 && e.detail.value != 0) {
        this.setData({
          mealFilter: this.data.mealList.filter(item => item.mealType.indexOf(this.data.foodType[e.detail.value]) != -1)
        })
        this.setData({
          mealFinalFilter: this.data.mealFilter
        })
        console.log(1)
      }
      if (this.data.consumeTypeindex != 0 && e.detail.value != 0) {
        this.setData({
          mealFinalFilter: this.data.mealFilter.filter(item => item.mealType.indexOf(this.data.foodType[e.detail.value]) != -1)
        })
        console.log(2)
      }
      if (this.data.consumeTypeindex == 0 && e.detail.value == 0) {
        this.setData({
          mealFinalFilter: this.data.mealList
        })
      }
      if (e.detail.value != this.data.foodTypeindex) {
        this.setData({
          foodTypeindex: e.detail.value
        });
        console.log(3)
      }
      console.log(this.data.mealFinalFilter);
    },

    editMenu: function() {
        wx.navigateTo({
            url: "../menu/menu"
        });
    }
});