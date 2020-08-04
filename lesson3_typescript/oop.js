var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Animal = /** @class */ (function () {
    function Animal() {
        // property
        // method
        // name: string;
        // age: number;
        this.myColor = 'Yellow';
        this.account = 90;
        this.age = 90;
        this.age = 100;
        console.log('Constructor');
    }
    Animal.prototype.getAccount = function (acc) {
        if (acc > this.account) {
            return this.account;
        }
        else {
            return acc;
        }
    };
    Animal.prototype.run = function () {
        this.myColor = 'REEDDD';
        var x = 7;
        // console.log('AGe', this.age);
        return this.age;
    };
    Animal.prototype.getAge = function () {
        this.myName = 'COn Vang';
        return this.myName;
        // return x;
        // return this.run();
        // return this.age;
    };
    return Animal;
}());
var Buffolo = /** @class */ (function (_super) {
    __extends(Buffolo, _super);
    function Buffolo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // private
    // protected
    // public
    Buffolo.prototype.getColor = function () {
        // return this.myColor;
    };
    Buffolo.prototype.widthraw = function (account) {
        return this.getAccount(account);
    };
    return Buffolo;
}(Animal));
var myAnimal = new Animal();
// console.log(myAnimal.run());
var myBill = new Buffolo();
console.log(myBill.widthraw(60));
