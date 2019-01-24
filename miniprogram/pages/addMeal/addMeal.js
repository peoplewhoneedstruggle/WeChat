// miniprogram/pages/addMeal/addMeal.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        consumeType: ["随便凑合", "大吃一顿"],
        consumeTypeindex: 0,
        foodType: [{
            meal: "早餐",
            flag: false
        }, {
            meal: "午餐",
            flag: true
        }, {
            meal: "晚餐",
            flag: true
        }, {
            meal: "夜宵",
            flag: true
        }],
        mealName: "",
        savedMeal: {},
        iconType: ["success", "info", "warn", "waiting", "safe_success", "safe_warn",
            "success_circle", "success_no_circle", "waiting_circle", "circle", "download",
            "info_circle", "cancel", "search", "clear"
        ]
    },
    saveMealName(e) {
        this.setData({
            mealName: e.detail.value
        });
    },
    changeFlag(event) {
        this.data.foodType[event.target.dataset.index].flag = event.detail.value;
    },
    saveMeal() {
        if (this.data.mealName === "") {
            wx.showToast({
                title: "名称不能为空1",
                icon: "warn"
            });
        } else {
            this.data.savedMeal.mealName = this.data.mealName;
            this.data.savedMeal.mealType = this.data.foodType.filter((item) => {
                if (item.flag) { return true; }
            }).map(item => item.meal);
            this.data.savedMeal.consumeType = this.data.consumeType[this.data.consumeTypeindex];
            console.log(this.data.savedMeal);
        }
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },
    consumeTypeChange: function(e) {
        console.log(e);
        this.setData({
            consumeTypeindex: e.detail.value
        });
    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
});