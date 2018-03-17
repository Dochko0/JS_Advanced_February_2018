(function millionUniqueCombinations() {
    let combinations = new Set();
    while (true) {
        if (combinations.size > 1000000) {
            break
        }
        let currentCombination = randomNumbers() + '-' + randomLetters() + '-' + randomNumbers()
        combinations.add(currentCombination)
    }

    // Print if need
    //------
    // for (let comb of combinations) {
    //     console.log(comb);
    // }
    //------


    return combinations;
})()

function randomNumbers() {
    let one = Math.floor(Math.random() * 9);
    let two = Math.floor(Math.random() * 9);
    let three = Math.floor(Math.random() * 9);

    return '' + one + two + three
}

function randomLetters() {
    let firstLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    let secondLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65)
    let thirdLetter = String.fromCharCode(Math.floor(Math.random() * 26) + 65)

    return firstLetter + secondLetter + thirdLetter
}

