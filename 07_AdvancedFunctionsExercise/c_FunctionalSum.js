let func = (function () {
    let sum = 0

    function increase(num) {
        sum += num
        return increase
    }

    increase.toString = function () {
        return sum
    }
    return increase
})()

console.log(func(10)(15)+'');