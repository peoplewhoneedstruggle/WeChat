// miniprogram/pages/menu/menu.js
const app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mealList: []
    },
    addMeal() {
        wx.navigateTo({
            url: "../addMeal/addMeal"
        });
    },
    default () {
        let _this = this;
        wx.showModal({
            title: "确认恢复至默认菜单？",
            content: "您添加的菜品不可恢复",
            success: function() {
                _this.setData({
                    mealList: app.globalData.mealList
                });
            }
        });
    },
    switchFlag(event) {
        app.log(event.target.dataset.index);
        this.data.mealList[event.target.dataset.index].flag = !this.data.mealList[event.target.dataset.index].flag;
    },
    delete(event) {
        app.log(event.target.dataset.index);
        this.data.mealList.splice(event.target.dataset.index, 1);
        this.setData({
            mealList: this.data.mealList
        });
        app.globalData.userMealList = this.data.mealList;
        app.log(app);
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        let _this = this;
        wx.getStorage({
            key: "userMealList",
            success: function(data) {
                console.log(data);
                _this.setData({
                    mealList: data.data
                });
            },
            fail: function() {
                _this.setData({
                    mealList: app.globalData.mealList
                });
            }
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
        wx.setStorage({
            key: "userMealList",
            data: this.data.mealList
        });
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