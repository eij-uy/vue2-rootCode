//obj的defineProperty方法
const obj = {
  a: 1,
};
Object.defineProperty(obj, "a", {
  //呈现的值
  // value: '',
  //是否可读写Boolean, 默认为false
  // writable: true,
  //是否可配置，可删除Boolean，默认为false
  configurable: true,
  //是否是可枚举属性
  enumerable: true,

  //属性被获取时调用
  get: function (val) {
    console.log(val);
    return val;
  },
  //属性被设置(改变)时调用
  set: function (sVal) {
    console.log(sVal);
  },
});
