function swap(arr, a, b) {
    [arr[a], arr[b]] = [arr[b], arr[a]];
}
let arr = [91, 60, 96, 7, 35, 65, 10, 69, 9, 30, 20, 31, 77, 81, 24];
let tnt = 0;

function BubbleSort(arr) { //冒泡排序
    let len = arr.length;
    let pos = len; //记录有序的边界位置
    for (let i = 0; i < len; i++) {
        let flag = true;
        for (let j = 0; j < pos; j++) { //减少内循环比较操作的次数
            if (arr[j] > arr[j + 1]) {
                swap(arr, j, j + 1);
                flag = false;
                console.log(arr[j], arr[j + 1], "第" + (i + 1) + "次max检索");
                tnt = j;
            }
        }
        if (flag) {
            console.log("break");
            break; //减少外循环趟数
        }
        pos = tnt;
        console.log("当前最大有序位置为" + pos);
        for (let j = pos; j > i; j--) { //反向冒泡找到最小值
            if (arr[j - 1] > arr[j]) {
                swap(arr, j - 1, j);
                flag = false;
                console.log(arr[j - 1], arr[j], "第" + (i + 1) + "次min检索");
            }
        }
        if (flag) {
            console.log("break");
            break; //减少外循环趟数
        }
        console.log("第" + (i + 1) + "趟排序结果：" + arr); //每趟（即每次外循环）都会找到一个当前最大值和最小值
    }
    console.log(arr);
}
BubbleSort(arr);