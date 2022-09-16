//Object.getOwnPropertyDescriptor(obj, prop)方法返回指定对象上一个自有属性对应的属性描述符

let person = {
  sex: "male",
  age: 25,
  sayHi: function () {
    console.log("sayHi");
  },
};

let ageAttri = Object.getOwnPropertyDescriptor(person, "age");
console.log("ageAttri: " + JSON.stringify(ageAttri));

let funcAttri = Object.getOwnPropertyDescriptor(person, "sayHi");
console.log("funcAttri: " + JSON.stringify(funcAttri));
