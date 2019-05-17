// 适配移动端，px转rem
function getRem(pwidth,prem) {
    var html = document.getElementsByTagName("html")[0];
    var owidth = document.body.clientWidth || document.documentElement.clientWidth;
    html.style.fontSize = owidth/pwidth * prem + "px"
}