class Apple {
    name = 'Iphone 6';
    getName(){
        setTimeout(function(){
            console.log(this.name);
            
        }, 1000)
    }
}

const apple = new Apple();
apple.getName();