// webpack --> javascript, image, css, font
// babel
// es6+ --> es5
// mobile, website, desktop, electronjs, server, IOT
// var x = 20; webassamply, c/c++, Rust, Golang, typescript
// khai bao
// function getTotal(price: number, quantity: number){
//     return price+quantity;
// }
// // Goi
// let totalCart = getTotal(9, 8);
// console.log(totalCart);
// rust,
// typescript
// python
// nodejs nestjs, koajs, express, nextjs (react).
// 1. number type
var x = 4;
var y;
y = 4;
y = 'hello';
var z;
z = 4;
// 2. string type
var str = 'hello';
str = 8;
var str2 = 'goodbye';
// 3. null type
// 4. undefined type
// 5. boolean type
var bol = true;
var bol1 = true;
// 6. array--> tap hop cac element cung kieu du lieu
//  let xx = ['3', 4, true]; 
//  let yy = Array(1, 2,3 , true);
var arr = [1, 2, 3];
var arr1 = [1, 2, 4, 5]; // generic
// --------------
// 7. void
function getVal() {
    console.log('gaega');
    if (true) {
        console.log('gaegawe');
    }
    // return 'Hello';
}
// 8. never
function getV() {
    console.log('gaegaweg');
    throw new Error('error always');
    // console.log('Hello');
    // while(true){
    //     console.log('hello');
    // }
}
// 9. union type
var uni;
uni = 3;
uni = 'Hello';
// uni = true;
function getN() {
    return '';
}
// 10. enum
var MyType;
(function (MyType) {
    MyType["MON"] = "MON";
    MyType["TUE"] = "TUE";
    MyType["WED"] = "WED";
    MyType["THUR"] = "5";
    MyType[MyType["FRI"] = 0] = "FRI";
    MyType[MyType["SAT"] = 1] = "SAT";
    MyType[MyType["SUN"] = 2] = "SUN";
})(MyType || (MyType = {}));
// console.log(MyType.WED);
// 12. tupple
var tup = [1, 3, 4, 'yes', true];
// 13: any
var an;
an = 4;
an = 'gae';
an = true;
var myVal = {
    name: '',
    obj: {}
};
// 11. inteface
// type
var myArr = [1, 2, 3, 4, true, false, 'gaega'];
// type assertion --> type casting;
var myStr;
myStr = 'Hello VTI';
var myNum = 9;
var myProduct = {
    price: 3000,
    name: 'iphone',
    address: 'hoi',
    getPrice: function () {
        return 9;
    }
};


enum UserTypes {
    Key = 'arhehawehgwehg'
}
localStorage.setItem(UserTypes.Key, 'this is user when i set');

localStorage.getItem(UserTypes.Key);  /// == 'this is user when i set'