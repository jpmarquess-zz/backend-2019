function Person(firstName, lastName) {
    this.firstName = firstName,
    this.lastName = lastName
}

Person.prototype.age = 20;

Person.prototype.greet = function () {
    console.log("Hello " + this.firstName + " " + this.lastName + " " + this.age);
}

var john = new Person("John", "Doe");
john.greet();

var anne = new Person("Anne", "Doe");
anne.greet();

console.log(john.__proto__);
console.log(anne.__proto__);
console.log(john.__proto__ === anne.__proto__);