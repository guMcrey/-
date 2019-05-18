参考连接: https://www.cnblogs.com/pengfei-nie/p/9134367.html

前言：Vue的UI框架很多，但是鉴于移动设备的复杂性，兼容性问题突出。像Mint-UI等已经很不多了，但是坑也不少，而且项目中很多功能仅凭这些也实现不了，需要我们去封装自己可复用的组件

步骤：
1.建立组件的模板，写好样式
2.准备好组件的数据输入，定好props里面的数据、类型
3.准备好组件的数据输出，即组件逻辑，做好要暴露出来的方法
4.封装完毕后，直接调用即可

解决方案：
1. props：在父组件中需要将子组件需要的数据导入。在props中接收数据，props对象里面键值是对改数据类型的规定。做了规范，使用者就只能传输致电给类型的数据，否则会报错。props传过来的数据之作展示，不得修改，想要修改，需要再新写一个data中的变量承接做数据的再处理。
【不能修改的原因：Vue2中组件的props的数据流动是单向的，即只能从组建外（调用组件方）通过组件的DOM属性attribute传递props给组件内，组件内只能被动接收组件外传递过来的数据，并且在组件内，不能修改由外层传来的props数据】

<search @selectFunc="selectFunc" :searchList="searchList"></search>
"searchList"就是我们的数据，可以写多个。

在子组件中：
props: {
    searchList: Array
},
mounted() {
    this.data = this.searchList
}

2. emit的使用（如何暴露组件方法）
通过$emit方法去掉父组件的方法，在父组件中修改data的数据。
【将父组件中方法注入子组件@selectFunc="selectFunc",然后在子组件中通过$emit调用它，并传递参数，以达到修改的目的】

子组件：
this.$emit('selectFunc', value)

父组件：
<search @selectFunc="selectFunc" :searchList="searchList">
selectFunc(value) {
    this.selectValue2 = value
}

// demo模拟代码
// 父组件
<template>
  <!-- selectFunc 选择完成的回调，searchList 下拉列表的数据 -->
  <search @selectFunc="selectFunc" :searchList="searchList"></search>
</template>
<script>
import Search from 'search'
export default {
    data() {
        return {
            searchList: [],
            // 通过emit修改
            selectValue2: ''
        }  
    },
    methods: {
        selectFunc(value) {
            this.selectValue2 = value
        }
    },
    components: {
        Search
    }
}
</script>

// 子组件
<template>
  <div v-for="item in searchList"></div>
</template>
<script>
export default {
    props: {
        searchList: Array
    }
}
</script>