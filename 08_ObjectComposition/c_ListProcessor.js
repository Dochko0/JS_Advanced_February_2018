function solve(arr) {
    let commandExecutor = (function () {
        let arr = []
        function add(string) {
            arr.push(string)
        }
        function remove(str) {
            arr=arr.filter(w=>w!==str)
        }
        function print() {
            console.log(arr.join(','))
        }
        return {
            add,
            remove,
            print
        }
    }())
    for (let str of arr) {
        let [command,value]= str.split(' ')
        commandExecutor[command](value)
    }

}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])