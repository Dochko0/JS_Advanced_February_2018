let obj = require('./b_InheratingAndReplacingToString')
let Person = obj.Person
let Teacher = obj.Teacher


function extendClass(classToExtend) {
    classToExtend.prototype.species = 'Human' //dobaveno pole
    classToExtend.prototype.toSpeciesString = function () { //dobavqme funkciq
        return `I am a ${this.species}. ${this.toString()}`
    }
}

extendClass(Person)
let p = new Person('Ivan', 'mail')
console.log(p.species);
console.log(p.toSpeciesString);