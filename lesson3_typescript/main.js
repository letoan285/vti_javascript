var Apple = /** @class */ (function () {
    function Apple() {
        this.name = 'Iphone 6';
    }
    Apple.prototype.getName = function () {
        setTimeout(function () {
            console.log(this.name);
        }, 1000);
    };
    return Apple;
}());
var apple = new Apple();
apple.getName();
