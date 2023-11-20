// let arr = [[1, 2, 3], //test case 1
//             [4, 5, 6], 
//             [7, 8, 9]]
// let arr = [[11, 2, 4], //test case 2
//             [4, 5, 6], 
//             [10, 8, -12]]
// let arr = [[3, 6, 9], //test case 3
//             [4, 8, 12], 
//             [4, 10, 15]]
// let arr = [[-9, 12, 4, -5], //test case 4
//             [7, 10, -4, 10], 
//             [9, 1, -2, 11],
//             [3, -8, 16, 14]]
// let arr = [[21, 2, -6], //test case 5
//             [10, -7, 9], 
//             [3, 13, -11]]


for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr[i].length; j++){
        let x = arr[0][0]
        let y = arr[1][1]
        let z = arr[2][2]
        var sum = x + y + z
        let a = arr[0][2]
        let b = arr[1][1]
        let c = arr[2][0]
        var some = a + b + c
        let overall = sum - some
        console.log(overall)
    }
}

// for (let a = 0; a < arr.length; a++){
//     for (let b = 0; b < arr[a].length; b++){
//         let a = arr[2][2]
//         let b = arr[4][4]
//         let c = arr[6][6]
//         var some = a + b + c
//         //console.log(some)
//     }
// }
// let overall = sum - some
// overall = Math.abs(overall)
// console.log(overall)