<!-- vuex：专为Vue.js应用项目开发的状态管理器，主要用于维护Vue组件间共用的一些变量和方法。 -->

1. vuex有哪几种属性？
五种。State，Getter，Mutaion，Action，Module

2. vuex的state特性是？
① vuex就是一个仓库，仓库里面放了很多对象。其中state就是数据源存放地，对应于一般Vue对象中的data。
② state里面存放的数据是响应式的，Vue组件从store中读取数据，若是store中的数据发生改变，依赖这个数据的组件也会发生更新。
③ 它通过mapState、mapGetters把全局的state和getters映射到当前组件的computed计算属性中。

3. vuex的Getter特性是？
① getters可以对State进行计算操作，它就是Store的一个计算属性。
② 虽然在组件内也可以做计算属性，但是getters可以在多组建之间复用。
③ 如果一个状态只在一个组件内使用，是可以不用getters。


4. vuex的Mutation特性是？
① Action类似于mutation，不同在于：Action提交的是mutation，而不是直接变更状态。Action可以包含任意异步操作。

5. 为什么使用vuex？
增加可维护性，增加可读性，减少耦合。
在兄弟组件有大量通信的，建议使用vuex。

vuex可以被看作项目中所有组件的数据中心，我们将所有组建中共享的State抽离出来，任何组件都可以访问和操作我们的数据中心。

---Vuex的组成：一个实例化的Vuex Store由state，mutaions和actions三个属性组成。state中保存着共有数据，改变state中的数据有且只有通过mutations中的方法，且mutations中的方法必须是同步的。如果要写异步的方法，需要写在actions中，并通过commit到mutaions中进行state中数据的更改。
