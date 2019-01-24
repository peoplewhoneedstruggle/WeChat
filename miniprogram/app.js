//app.js
App({
    onLaunch: function() {
        wx.login({
            success: function(res) {
                var code = res.code;
                if (code) {
                    console.log("获取用户登录凭证：" + code);
                } else {
                    console.log("获取用户登录态失败：" + res.errMsg);
                }
                // wx.getUserInfo({
                //   success: function(res2){
                //     console.log(res2)
                //   }
                // })
            }
        });
        this.globalData = {
            mealList: [{
                "mealName": "黄焖鸡米饭",
                "mealType": ["早餐", "午餐"],
                "flag": true
            }, {
                "mealName": "饺子",
                "mealType": ["早餐", "午餐", "晚餐"],
                "flag": true
            }, {
                "mealName": "炒面",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "烤肉",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "肯德基",
                "mealType": ["早餐", "午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "自助餐",
                "mealType": ["午餐", "晚餐"],
                "flag": true
            }, {
                "mealName": "必胜客",
                "mealType": ["午餐", "晚餐"],
                "flag": true
            }, {
                "mealName": "米线",
                "mealType": ["早餐", "午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "披萨",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "火锅",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "盖浇饭",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "牛肉面",
                "mealType": ["早餐", "午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "烧饼",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "油条",
                "mealType": ["早餐"],
                "flag": true
            }, {
                "mealName": "煎饼",
                "mealType": ["早餐"],
                "flag": true
            }, {
                "mealName": "包子",
                "mealType": ["早餐"],
                "flag": true
            }, {
                "mealName": "豆浆",
                "mealType": ["早餐"],
                "flag": true
            }, {
                "mealName": "粥",
                "mealType": ["早餐"],
                "flag": true
            }, {
                "mealName": "海鲜",
                "mealType": ["午餐", "晚餐"],
                "flag": true
            }, {
                "mealName": "大盘鸡",
                "mealType": ["午餐", "晚餐"],
                "flag": true
            }, {
                "mealName": "刀削面",
                "mealType": ["午餐", "晚餐"],
                "flag": true
            }, {
                "mealName": "老干妈",
                "mealType": ["早餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "泡面",
                "mealType": ["午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "肉夹馍",
                "mealType": ["早餐", "午餐", "晚餐", "夜宵"],
                "flag": true
            }, {
                "mealName": "小龙虾",
                "mealType": ["午餐", "晚餐"],
                "flag": true
            }],
            userMealList: [],
        };
    },
    log: function(info) {
        console.log(info);
    }
});