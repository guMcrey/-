###### 相同点：
1. Virtual DOM：Vue与React都是用了Virtual DOM。（Virtual DOM是一个映射真实DOM的JavaScript对象，如果需要改变任何元素的状态，那么是现在Virtual DOM上进行改变，而不是直接改变真实的DOM，当有变化产生时，一个新的VIrtual DOM对象会被创建并计算新旧Virtual DOM之间的差别。之后这些差别会应用到真实的DOM上）

2. 组件化：React和Vue都鼓励组件化应用，每个模块之间可以通过合适的方式互相联系。

3. Props: React和Vue都有Props的概念，props允许父组件往子组件传送数据。

##### 主要区别：
1. 模版 vs JSX：React和Vue最大的不同是模版的编写，Vue激励你去写近似常规HTML的模版。React推荐你所有的模版通用JavaScirpt的语法拓展---JSX书写。

2. 状态管理 vs 对象属性： 在React中你需要使用setState()方法去更新状态。在Vue中，state对象并不是必须的，数据由data属性在Vue对象中进行管理。

3. React Native vs ？：React Native能在手机上创建原声应用，React在这方面处于领先位置。使用JavaScript，css和html创建原生移动应用，这是一个重要的革新。

<!-- 参考链接：http://caibaojian.com/vue-vs-react.html -->