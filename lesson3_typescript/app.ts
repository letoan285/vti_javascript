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
let x: number = 4;

let y: any;
y = 4;
y = 'hello';

let z: number;
z = 4;

// 2. string type

let str: any = 'hello';
str = 8;
let str2: string = 'goodbye';


// 3. null type
// 4. undefined type

// 5. boolean type
let bol = true;
let bol1: boolean = true;

// 6. array--> tap hop cac element cung kieu du lieu
//  let xx = ['3', 4, true]; 
//  let yy = Array(1, 2,3 , true);
let arr: number[] = [1,2,3];
let arr1: Array<number> = [1,2,4,5]; // generic


// --------------
// 7. void
function getVal(): void {
    console.log('gaega');
    if(true){
        console.log('gaegawe');
        
    }
    // return 'Hello';
}
// 8. never
function getV(): never {
    console.log('gaegaweg');
    
    throw new Error('error always');
    // console.log('Hello');
    // while(true){
    //     console.log('hello');
        
    // }
    
}


// 9. union type

let uni: string|number;
uni = 3;
uni = 'Hello';
// uni = true;


function getN(): string|number {
    return '';
}

// 10. enum

enum MyType {
    MON = 'MON',
    TUE = 'TUE',
    WED = 'WED',
    THUR = '5',
    FRI = 0,
    SAT,
    SUN
}

// console.log(MyType.WED);





// 12. tupple
let tup = [1,3,4, 'yes', true];

// 13: any
let an: any;
an = 4;
an = 'gae';
an = true;


let myVal: any = {
    name: '',
    obj: {}
}

// 11. inteface
// type

let myArr = [1,2,3,4, true, false, 'gaega'];

// type assertion --> type casting;

let myStr: any;
myStr = 'Hello VTI';
let myNum: number | any = 9;

// console.log((myNum as number).toFixed);




// console.log( (myStr as string).length );

// Interface;

interface IProduct {
    name: string;
    address: string;
    age?: number;
    price: number;
    getPrice(): number;
    getName?: (name?: string) => string;
}

const myProduct: IProduct = {
    price: 3000,
    name: 'iphone',
    address:  'hoi',
    getPrice(){
        return 9;
    },
    // getName(name: string){
    //     return name;
    // }

}