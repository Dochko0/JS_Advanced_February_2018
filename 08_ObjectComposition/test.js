// function countWordsInMap(arr) {
//     let myMap = new Map()
//     for (let str of arr) {
//         let currWords = str.split(/[^0-9a-zA-Z_]+/).filter(a => a !== '')
//         for (let w of currWords) {
//             //w=w.toLowerCase()
//             if (myMap.has(w)) {
//                 myMap.set(w, myMap.get(w) + 1)
//             } else {
//                 myMap.set(w, 1)
//             }
//         }
//     }
//     //let sortedKeys =Array.from(myMap.keys()).sort((a,b)=>a.localeCompare(b))
//     //console.log(myMap);
//     let name=''
//     let val =0
//     // let sortedKeys =Array.from(myMap.keys()).sort((a,b)=>a.localeCompare(b))
//     // console.log(JSON.stringify([...myMap]))
//     // for (let key of sortedKeys) {
//     //     if(myMap.get(key)>val){
//     //         name=key
//     //         val=myMap.get(key)
//     //     }
//     //     console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
//     //
//     // }
//     for (let key of myMap) {
//         console.log(key[0]);
//         console.log(key[1]);
//         if(key[1]>val){
//             name=key[0]
//             val=key[1]
//         }
//         //console.log("'" + key + "'" + ' -> ' + myMap.get(key) + ' times')
//
//     }
//     console.log(name);
//     console.log(val);
//     //console.log(JSON.stringify([...myMap]))
// }
//
// countWordsInMap(['Far slow too slow, you\'re slow far slow too slow.'])



function mostRepeatWordInMap(arr) {
    let myMap = new Map()
    for (let str of arr) {
        let currWords = str.split(/[^0-9a-zA-Z_]+/).filter(a => a !== '')
        for (let w of currWords) {
            if (myMap.has(w)) {
                myMap.set(w, myMap.get(w) + 1)
            } else {
                myMap.set(w, 1)
            }
        }
    }
    let mostRepeatWord=''
    let repeatValue =0
    // for (let key of myMap) {
    //     if(key[1]>repeatValue){
    //         mostRepeatWord=key[0]
    //         repeatValue=key[1]
    //     }
    // }

    for (let [key, value] of myMap) {
        if(value>repeatValue){
            mostRepeatWord=key
            repeatValue=value
        }
    }
    console.log(mostRepeatWord);
    console.log(repeatValue);
}
mostRepeatWordInMap(['Far slow too slow, you\'re slow far slow too slow.'])