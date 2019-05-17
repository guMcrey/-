// 判断一个人年龄是否满18岁
/**
 * 1.获取当前的年、月、日，并且将年份减去18.得到18年前的年份
 * 2.判断月份是否为2月且日大于等于28，如果是，则执行判断18年前是否为平年，若是平年，当前日期为28，若为闰年，当前日期是29
 * 3.通过new Date()方法获取指定日期的日期对象，并获取他的时间戳
 * 4.通过用户选中的时间戳和18年前的时间戳比较，若用户选中的时间戳大于18年前时间戳，则用户不满足18周岁，否则满足
 */
function jsGetAge(strBirthday) {
    var returnAge;
    // split()方法用于把一个字符串分割成字符串数组
    var strBirthdayArr = strBirthday.split("-");
    var birthYear = strBirthdayArr[0];
    var birthMonth = strBirthdayArr[1];
    var birthDay = strBirthdayArr[2];

    d = new Date();
    var nowYear = d.getFullYear();
    var nowMonth = d.getMonth() + 1;
    var nowDay = d.getDate();

    if (nowYear == birthYear) {
        returnAge = 0;//同年 则为0岁  
    }
    else {
        var ageDiff = nowYear - birthYear; //年之差  
        if (ageDiff > 0) {
            if (nowMonth == birthMonth) {
                var dayDiff = nowDay - birthDay; //日之差  
                if (dayDiff < 0) {
                    returnAge = ageDiff - 1;
                }
                else {
                    returnAge = ageDiff;
                }
            }
            else {
                var monthDiff = nowMonth - birthMonth;//月之差  
                if (monthDiff < 0) {
                    returnAge = ageDiff - 1;
                }
                else {
                    returnAge = ageDiff;
                }
            }
        }
        else {
            returnAge = -1;//返回-1 表示出生日期输入错误 晚于今天  
        }
    }
    return returnAge;//返回周岁年龄  
}

// 测试
jsGetAge('1995-7-19');