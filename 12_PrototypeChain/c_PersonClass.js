function personProperties() {
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName
            this.lastName = lastName
            this.age = age
            this.email = email
        }

        toString() {
            return `${this.firstName} ${this.lastName}(age: ${this.age}, email: ${this.email})`

        }
    }


}

personProperties()
let p = new Person('Maria', 'Petrova', 22, 'mp@yahoo.com');
console.log(p.toString());

// let obj = personProperties()
// let Person = obj.Person
// let p = new Person("Peter", "Marinov", 18, "pesho18@abv.bg");
// console.log(p.toString())
