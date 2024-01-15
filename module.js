//using commonJS

//custom modules


const {add, subtract, nameList, ages} = require('./module-2');

console.log(add(5,5))
console.log(subtract(10,5))

for (let i =0; i<nameList.length; i++){
    console.log(nameList[i]+ " is "+ ages[i] + " years old.");
}
