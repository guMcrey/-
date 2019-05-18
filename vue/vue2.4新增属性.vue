// 参考连接: https://www.jianshu.com/p/4649d317adfe

 
.sync: 父组件向子组件传值用props，子组件不能直接更改父组件传入的值，需要通过$emit触发自定义事件，通知父组件改变后的值。

【原理: .sync写法上简化了一部分，父组件不用再定义方法检测值变化了，只是对以前$emit方式的缩写，.sync其实是在父组件定义了一个update:val方法，来监听子组件修改值的事件】

// 父组件
<template>
  <div>
      <p>父组件传入子组件的值：{{name}}</p>
      <fieleset>
          <legend>子组件</legend>
          <child :val="name" @update="modify"></child>
      </fieleset>
  </div>
</template>

<script>
import Child from './Child'
export default {
    components: {Child},
    data() {
        return {
            name: "linda"
        }
    },
    methods: {
        modify(newVal) {
            this.name = newVal
        }
    }
}
</script>

// 子组件
<template>
   <label>
       <input :value="val" @input="$emit('update', $event.target.value)"></input>
   </label>
</template>

<script>
export default {
    props: ['val']
}
</script>



// 2.4之后使用.async
// 父组件
<template>
<div>
    <p>父组件传入子组件的值：{{name}}</p>
    <fieldset>
        <legend>子组件</legend>
        <child :val.sync="name"></child>
    </fieldset>
</div>
</template>

<script>
import Child from './Child'
export default {
    components: {Child},
    data() {
        return {
            name: 'linda'
        }
    }
}
</script>

// 子组件
<template>
  <label>
      输入框：<input :value=val @input="$emit('update:val', $event.target.value)"></input>
  </label>
</template>
<script>
export default {
    props: ['val']
}
</script>


$attrs: 比如你打算封装一个自定义input组件--MyInput，需要从父组件中传入type，placeholder，title等多个html元素的原生属性，props:['type', 'placeholder', 'title',...]. 很繁琐，$attrs专门为了解决这个问题而诞生，这个属性允许你在使用自定义组件时更像是使用原生html元素。

v-model是v-bind:value和v-on:input的简写

$attrs包含了父作用域中不作为prop被识别的特性绑定

// 父组件
<my-input placeholder="请输入您的姓名" type="text" title="姓名" v-model="name"></my-input>

<template>
  <div>
      <label>输入框：</label>
      <!-- <input v-bind="$attrsAll" @input="$emit('input', $event.target.value)"></input> -->
      <input v-bind="$attrs" :value="value" @input="$emit('input', $event.target.value)"></input>
  </div>
</template>

<script>
export default {
    inheritAttrs: false,
    computed: {
        // $attrsAll() {
        //     return {
        //         value: this.$vnode.data.model.value,
        //         ...this.$attrs
        //     }
        // }
        inheritAttrs: false,
        props: ['value']
    }
}
</script>


$listener: 为了在自定义组件中使用原生事件而产生的,比如要让前面的MyInput组件实现focus事件.必须要让focus事件作用于MyInput组件的input元素上.
<template>
<div>
    <label>输入框:</label>
    <input v-bind="$attrsAll" v-on="$listenserAll"></input>
</div>
</template>

<script>
export default {
    inheritAttrs: false,
    props: ['value'],
    computed: {
        $attersAll() {
            return {
                value: this.value,
                ...this.$atters
            }
        },
        $listenserAll() {
            return Object.assign(
                {},
                this.$listeners,
                {inpput: (event) => this.$emit('input', event.target.value)}
            )
        }
    }
}
</script>



