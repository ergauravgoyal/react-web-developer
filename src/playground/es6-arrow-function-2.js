const add = function (a, b) {
    return a + b;
}

const addNumber = (a, b) => {
    return a + b;
}

const user = {
    name: 'Gaurav',
    cities: ['Florida', 'New York', 'Dublin'],
    printPlacesLived() {
        const cityMessages = this.cities.map((city) => {
            return city;
        })
        this.cities.forEach((city) => {
            console.log(this.name + " has lived in " + city)
        });
        return cityMessages;
    }
};
const multiplier={
    numbers : [4,53,4,43],
    multiplyBy:8,
    multiply(){
        const multipliedNumbers=this.numbers.map((number)=>{
            return number*this.multiplyBy;
        })
        return multipliedNumbers;
    }
}
console.log("Multiplication is ",multiplier.multiply());
console.log(user.printPlacesLived());