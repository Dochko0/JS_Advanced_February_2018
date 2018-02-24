// function f() {
//     console.log(this.name)
// }
//
// let obj = {name: 'Ivan',
//             age: 13}
//
// f.call(obj)

function f() {
    //let regex = /[A-Za-z]/
    console.log(Object.values(this)[1])
}

let obj = {name:'Ivan', age:13}
let obj1 = ['Ivan40', 135]

f.call(obj)
f.call(obj1)