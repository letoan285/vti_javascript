// var x = 3;
// var y = 5;


// 1
// var z = x;
// z = 9;
// console.log(x);


 // 2
// let obj = {name: 'Manh'}
// var obj2 = obj;
// obj2.name = "toan";

// console.log(obj);

// old : var
// new: let/const

// scope, hosting,

// console.log(x);

// var x = 4;

// var x;
// console.log(x);
// let x = 4;
// giaga


// let x = 99;
// console.log(y);

// let y = 9;

// let num = 6; // declare  global

// let num = 9 // re-declare

// function getValue(){
//     num = 99; // declare // local
//     // console.log(num);
// }
// for(let num = 0; num < 9; num++){ // declare
//     console.log('num', num);
// }
// getValue();
// console.log(num);

// let zzz = x + 9;

// const z = 'hello';

// let name = 'Manh';
// name = "toan";

// const myName = 'Hung';
// myName = 'cuong';

// const person = {name: 'Hung', age: 30};


// person.name = 'Nguyen';

// person = {name: 'Nguyen', age: 30};

// console.log(person);

// 1. Object, 2. array, 3.function. 

// function getVal(){
//     return 9;
// }



// let val = 9;

// let val2 = getVal();

// console.log(val, val2);

// const xx;

// 2. template reteral

// `` backtick.
// console.log(`my name is Nha
// my age is 29
// `);
// let x = '';
// x+='hohi';
// x+='geag'


// let age = 99;

// console.log(`my age is ${age}`);
// let id = 20;
// let name = 'shopeee';
// let url = `http://google.com/api/products/${id}&name=${name}`;

// 3. arrow function

// let myfunct = x => x+9; // single line function

// let myfunct = function(x){
//     return x+9;
// }

// setTimeout(() => {
//     console.log("gaegweg");
// }, 2000);

// object/array destructuring;


// let person = {
//     name: 'Bich',
//     age: 30,
//     address: 'Hanoi vietnam'
// }

// let name = person.name;
// let age = person.age;
// let address = person.address;

// let { address: myAddress, name: myName } = person; // 


// console.log(address);

// let myFamily = ['Father', 'Mother', 'Brother', 'Sister'];


// let myMother = myFamily[1];
// let myFater = myFamily[0];
// let myBrother = myFamily[2];

// let [myMother, myFater, , mySister] = myFamily;
// let mySiteer = myFamily[3];

// console.log(mySister);

// let address = 'Hanoi';
// let age = 40; // 65 / 2020
// let name = 'Hung';
// let color = undefined;

// let myInfo = {
//     name: name,
//     age,
//     address,
//     color,
//     getRetire(yearOfRetire){
//         // return 2045;
//         return (2020-this.age)+yearOfRetire;
//     }
// }


// let myFunct = () => {

// }

// log myInfo;
// console.log(myInfo);
// delete myInfo.color;


// console.log(myInfo);

// function getName(){

// };

// let getName = () => {
//     console.log('Hello');
// };

// let getName = function(){}

// getName();

// ... 
// 1. spread operator
// 2. rest operator

// function getParam(...args){
//     return [args];
// }

// getParam(1,2,3,4,5,6);
// clone operator, 

// let arr = [1,2,3];
// let arr1 = [6,7,8];

// let arr2 = [...arr,4,5, ...arr1];

// console.log(arr2);

// let arr2 = arr.concat(arr1);
// console.log(arr2);
// map()

// let obj = {id: 1, name: 'objecxt 1', color: 'red'};
// let obj1 = {id: 20, name: 'Change Name', age: 99};


// let obj2 = {...obj1, ...obj};

// console.log(obj2);

// let x = 3;
// let y = 8;

// console.log(y);
// console.log(x);

// deep vs shalow

// let obj = {name: 'Toan', age: 30};

// let me = {...obj};
// me.age = 200;


//
// let you = {...obj};
// you.age = 300;
// you.name = "Huy"

// me.age = 9000;

// console.log(obj);
// console.log(me);
// console.log(you);
// redux// ngrx --> state management;

let defaultState = {
    name: 'iphone 6',
    price: 1900,
    supplier: 'Apple'
}

function getState(state){
    // state.name = 'new name'
    return {
        ...state,
        name: 'my new name'
    };
}

let myState = getState(defaultState);

console.log(myState);
console.log(defaultState);