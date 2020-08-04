class Animal {
    // property
    // method
    // name: string;
    // age: number;
    public static myAddress= 'Hanoi Vietnam';
    private myColor  = 'Yellow';
    protected account = 90;

    public static getMyAddress(){
        // return 'this is static';
        const anymal = new Animal();
        return anymal.account;
    }

    getAccount(acc){
        // return Animal.myAddress;
        this.myColor = 'aegew';
        if(acc > this.account){
            return this.account;
        } else {
            return acc;
        }
    }
    age: number = 90;

    
    constructor(public myPros: string){
    

        this.age = 100;
        console.log('Constructor');
        
    }
    myName: string;

    run(){
        this.myColor = 'REEDDD';
        let x = 7;
        // console.log('AGe', this.age);
        
        return this.age;
    }

    getAge(){
        this.myName = 'COn Vang';
        return this.myName;
        // return x;
        // return this.run();
        // return this.age;
    }
}

class Buffolo extends Animal {
    // private
    // protected
    // public
    constructor(){
        super();
    }
    getColor(){
        // return this.myColor;
    }

    widthraw(account: number): number {
        return this.account+account;

        // return this.getAccount(account);
    }

}



// let myAnimal = new Animal();
// console.log(myAnimal.run());

// const myBill = new Buffolo();
// myBill.account = 900;
// console.log(myBill.widthraw(90));

// let myDog = new Animal();
// myDog.getMyAddress();
// console.log(Animal.getMyAddress());


// function getMyVal<T>(a: T, b: string): T {
//     return a;
// }

// getMyVal('3', "5");

// interface IProduct<T> {
//     name: string;
//     price: number;
//     qty: number;
//     data: T;
// }

// class Product<IProduct> {
//     constructor(price: number, qty: string, name: string){
//         console.log(`${price}-${qty}-${name}`);
        
//     }
// }

// let myProducts = new Product<number, string, string>(1200, '2', 'iphone');
// let myProduct2 = new Product<string, string, string>('1200', '2', 'iphone');