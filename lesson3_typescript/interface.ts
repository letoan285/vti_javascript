
// export interface IProduct extends Product {
//     price: number;
//     name: string;
// }

// export interface Product2  extends Product {
//     price: number;
//     name: string;
// }
// export class Product implements MyIProduct {

// }

// interface MyIProduct {
//     address: string;
// }


// let product = new Product();

// product.

// class App implements IProduct {}

abstract class Telephone {
   price: number;
    // abstract getName();
    getprice(){}
}

class ApplePhone extends Telephone {
    price = 9;
    getName(){}
}

// let tel = new ApplePhone();

// type MyType = {
//     name: string;
//     age: number;
//     getName(): string;
// }

// type MyType1 = {
//     name1: string;
//     age1: number;
//     getName1(): string;
// }

// // type MyType2 : MyType1

// const mytypeVal: MyType | MyType1 = {
//     name1: 'ge',
//     getName(){}
// }

 type IProduct = { // kieu san pham de gui len api phai the nay
     name: string;
     price: number;
     [key: string]: any;
 }

 const product: IProduct = {
     name: 'my prouc',
     price: 90,
     myName: 'toan',
     myName2: 'nhamggeg',
     myownage: 60
 }

 const product2: IProduct = {
    name: 'my prouc',
    price: 90,
}

//  axios.post('gegaeaweg', product);
// thu vien
 interface IState<T> {
     data: T;
     fetching: boolean,
     fetched: boolean;
     errorMessage: string;
 }

// lead
 type IType = {
    name: string, 
    price: number
 }


 // member
 class Product implements IState<IType> {
    data = {name: '', price: 600} ;
 }

 // namespace

 namespace myname {
    export const xxx = 2;

}


 let yyy = myname.xxx;

enum ProductTypes {
    FETCH_PRODUCT = 'FETCH_PROUCT'
}


 const action = {
     type: ProductTypes.FETCH_PRODUCT
 }

//  switch(){
//      case ProductTypes.FETCH_PRODUCT: {

//      }
//  }

 