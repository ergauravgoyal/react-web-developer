class Person {
    constructor(name = "Anonymous", age = 0) {
        this.name = name || 'test';
        this.age = age;
    }

    getGreeting() {
        return `Hello !! I am ${this.name} !`;
    }
    getDescription() {
        return `${this.name} is ${this.age} year(s) old `
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }
    getDescription() {
        let description = super.getDescription();
        if (this.major) {
            description += ` and is ${this.major}.`;
        }
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,homelocation){
        super(name,age);
        this.homelocation=homelocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.homelocation){
            greeting +=` I am visiting from ${this.homelocation}.`;
        }
        return greeting;
    }
}
const me = new Student("Gaurav", 25, 'Engineer');

console.log(me.getDescription());
console.log(me.getGreeting());
// console.log(me);
const other = new Person();

console.log(other.getDescription());
const gaurav = new Traveler("Gaurav",25,"Florida");
console.log(gaurav.getGreeting());