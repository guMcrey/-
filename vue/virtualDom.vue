1. DOM是文档对象模型的简写,在浏览器中可以通过js来操作DOM,但这样操作性能很差,于是virtual Dom应运而生.Virtual Dom就是在js中模拟DOM对象来优化DOM操作的一种技术和思路,提高页面的渲染效率.

2. VirtualDom是什么?VirtualDom是一个简单的js对象,并且最少包含tag(标签名),props(属性),children(子元素对象)三个属性.Virtual Dom和DOM对象一一对应,html由virtual dom生成

3. 为什么需要Virtual DOM? Virtual Dom最大的特点是将页面的状态抽象为JS对象的形式,配合不同的渲染工具,使跨平台渲染称为可能.如Vue就借助virtual dom实现了服务端渲染,浏览器渲染和移动端渲染功能; 在进行页面更新时,借助virtual dom,DOM元素的改变可以在内存中进行比较,再结合框架的事务机制将多次比较的结果合并后一次性更新到页面,从而有效地减少页面渲染的次数,提高渲染效率.

4. Virtual Dom Diff算法: 页面等于页面状态的映射UI = render(state),当需要更新页面时,无需关心DOM具体的交换方式,只需要改变state即可,剩下的事情(render)将有框架代劳.
①state变化,生成新的Virtual Dom
②比较Virtual Dom和之前Virtual Dom的异同
③生成差异对象（patch）
④遍历差异对象并更新DOM

