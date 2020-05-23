const add = function (a, b) {
    return a + b;
}

const add2 = (a, b) => {return a + b }

const add3 = (a, b) => a + b

const car = {
    name: 'Ferrari',
    start: function(){
        console.log('Vai ', this.name )
    }
}


const car2 = {
    name: 'Ferrari',
    start() {
        console.log('Vai ', this.name )
    }
}


console.log(add(10, 10))
console.log(add2(10, 10))
console.log(add3(10, 10))

console.log(car.name)

car.start()

car2.start()