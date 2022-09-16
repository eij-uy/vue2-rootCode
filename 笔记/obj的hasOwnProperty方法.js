let obj = {
    name:'张睿',
    age:18,
    eat:{
        eatname:'面条',
        water:{
            watername:'农夫山泉'
        }
    }
}

console.log(obj.hasOwnProperty('__proto__'))
console.log(obj.hasOwnProperty('name')) //true
console.log(obj.hasOwnProperty('age'))  //true
console.log(obj.hasOwnProperty('eat'))  //true
console.log(obj.hasOwnProperty('eatname'))  //false
console.log(obj.hasOwnProperty('water'))  //false
console.log(obj.hasOwnProperty('watername'))  //false
console.log(obj.eat.hasOwnProperty('eatname'))  //true
console.log(obj.eat.hasOwnProperty('water'))  //true
console.log(obj.eat.hasOwnProperty('watername'))  //false
console.log(obj.eat.water.hasOwnProperty('watername'))  //true