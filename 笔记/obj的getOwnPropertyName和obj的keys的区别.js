const obj = {
  a: 1,
  b: 2,
  [Symbol()]: 1,
};

Object.defineProperty(obj, "c", {
  enumerable: false,
});

console.log(obj);

console.log(Object.getOwnPropertyNames(obj));
console.log(Object.keys(obj));

//前者可以返回可枚举或不可枚举的key, 不包括以symbol值作为名称的key
//后者只能返回可枚举的key, 不包括以symbol值作为名称的key
