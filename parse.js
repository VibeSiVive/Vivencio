let x = ["aba", "babaq", "aba", "xzxb"]
let y = ["aba", "xzxb", "ab"] //[2, 1, 0]

let counterarr = []

for(let i = 0; i < y.length; i++){
    let count = 0
    for(let j = 0; j < x.length; j++){
        if(y[i] == x[j]){
            count += 1
        }
    }
    counterarr[i] = count
}
console.log(counterarr) 