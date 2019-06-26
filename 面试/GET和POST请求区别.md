<!-- 参考链接：https://www.cnblogs.com/logsharing/p/8448446.html -->

1. GET在浏览器回退时是无害的，而POST会再次提交请求。
2. GET产生的URL地址可以被Bookmark（加入书签），而POST不可以。
3. GET请求会被浏览器主动cache，而POST不会，除非手动设置。
4. GET请求只能进行url编码，而POST支持多种编码方式。
5. GET请求参数会被完整保留在浏览器历史记录里，而POST中的参数不会被保留。
6. GET请求在URL中传送的参数是有长度限制的，而POST没有。
7. GET比POST更不安全，因为参数直接暴露在url上，POST放在Request body中。

注意：GET和POST本质上就是TCP连接，不无差别。但是由于HTTP的规定和浏览器/服务器的限制，导致他们在应用过程中体现出一些不同。

#### 补充：GET产生一个TCP数据包，POST产生两个TCP数据包。
解析：对于GET方式的请求，浏览器会把HTTP header和data一并发送出去，服务器响应200（返回数据）；而对于POST，浏览器先发送header，服务器响应100continue，浏览器再发送data，服务器响应200 ok（返回数据）。
【并不是所有浏览器都会在POST中发送两次包，Firefox就只发送一次】

