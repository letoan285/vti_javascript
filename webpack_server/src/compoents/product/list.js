// export const obj = {id: 1, name: '1'};
// export const obj21 = {id: 2, name: '1'};
// export const obj21 = {id: 2, name: '1'};
// export const obj23 = {id: 2, name: '1'};
// export const obj52 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};
// export const obj2 = {id: 2, name: '1'};


// export default obj;

let name = 'Samgung';
// global
class Product {
    // class
    #name = 'Iphone';

    static getName(name){
        // local
        // let name = 'abc'; 
        // this.name = 'Huawei'

        return this.name;
    }

    getMyname(){
        return this.getName();
    }
}

class MyProduct extends Product {
    getVal(){
        return this.name;
    }
}
let myproduct = new MyProduct();
console.log(myproduct.getName());

// tinh chat trong lap trinh huong 
// encapsulation, inheritance, abstraction, polimophism