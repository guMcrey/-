// 销毁组件
destoryElement() {
    this.$destory(true);
    this.$el.parentNode.removeChild(this.$el)
}