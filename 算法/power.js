// 求x的y次幂
// 0次幂时返回1，1次幂时返回基数，其他次幂基数乘以基数
// 未考虑负数情况
function powerCalculator(base, power) {
    var number = base;
    if (power == 1) {
        return number;
    }
    if (power == 0) {
        return 1;
    }
    for (var i = 2; i <= power; i++) {
        number = number * base;
    }
    return number;
}

// 测试
powerCalculator(2, -10)