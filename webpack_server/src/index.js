// import * as myObj from './compoents/product/list';
// import {obj2} from './compoents/product/list';
// import myValue from './compoents/product';


// eager
// calback
// promise
// async/await
//generator // yield

// observable --> lazy

// function log3(){

//     setTimeout(() => {
//         console.log('3');
//     }, 0)

// }


// function log1(){
//     setTimeout(() => {
//         console.log('1');
//     })
// }
// function log2(){
//     setTimeout(() => {
//         console.log('2');
//     }, 200)

// }

// function log4(){
//     console.log('4');

// }

// log4();
// log1();
// log3();
// log2();
// 4-1-3-2

// const products = [
//     {id: 1, name: 'product 1', price: 1000},
//     {id: 2, name: 'product 2', price: 2000},
//     {id: 3, name: 'product 3', price: 3000}
// ];


// function getProducts(){
//     let output = "";
//     products.map((item) => {
//         output += `
//             <li>product ID-- ${item.id} - Name: ${item.name}</li>
//         `;
//     });

//     document.getElementById('root').innerHTML =output;
// }


// function createProduct(product, cb){
//     setTimeout(() => {
//         // push truoc
//         products.push(product);
//         //goi sau
//         cb();
//     }, 2000);
// }

// createProduct({id: 4, name: 'product 4', price: 900}, getProducts);


// document.getElementById('root').innerHTML = "<h1>Hello VTA</h1>";


// resolve
// reject

// function getYourPromise(){
//     const error = true;
//     if(!error){
//         return Promise.resolve('I keep my promise');
//     } else {
//         return Promise.reject('I Didnt keep my promise !');
//     }
// }

// getYourPromise()
//     .then(res => {
//         console.log(res);
//         let data = res;
//     })
//     .catch(error => console.log(error));

// function getMyProducts(){
//     return new Promise((resolve, reject) => {
//         const error = false;
//         if(!error){
//             resolve('promise solve');
//         } else {
//             reject('you missed your promise');
//         }
//     });
// }

// function getValue(){
//     return new Promise((resolve, reject) => {
//         resolve(999);
//     });
// }

// async function getPosts(){
//     let x = await getValue();
//     return x + 1;
// }

// let y = getPosts().then((res) => {
//     console.log(res);
// })
// console.log(20+y);



// function getProducts(){
//     let output = "";
//     products.map((item) => {
//         output += `
//             <li>product ID-- ${item.id} - Name: ${item.name}</li>
//         `;
//     });

//     document.getElementById('root').innerHTML =output;
// }

// async function getProduct(){
//     setTimeout(() => {
//         // push truoc

//         products.push(product);

//         resolve();
        
//     }, 2000);
// }
// function createProduct(product){
//     return new Promise((resolve, reject) => {

//         setTimeout(() => {
//             // push truoc

//             // products.push(product);

//             resolve(product);
            
//         }, 2000);

//     });
// }

// async function getProduct(){
//     let product = await createProduct({id: 4, name: 'product 4', price: 900});
//     products.push(product)
//     return products;
// }

// getProduct().then((res) => {
//     console.log('res', res);

//     getProducts();
// }).catch(() => console.log('gg'));

// createProduct({id: 4, name: 'product 4', price: 900}).then((res) => {
//     getProducts();
// });

// let myProduct = getProduct();
// console.log(myProduct);

// function* myGenerator(){
//     yield 1;
//     console.log(1);
//     // while(true){
//     //     yield 2;

//     //     console.log('I run always');
//     // }
//     yield {id: 1, message: 'what you want'};
// }

// let myGen = myGenerator();

// console.log(myGen.next().value);
// console.log(myGen.next().value);
// console.log(myGen.next().value);

// export name, 
// export default

// console.log(myObj.obj);
// myObj.obj23

// let myvar = myObj.obj2;
// let myVar2 = obj2;

