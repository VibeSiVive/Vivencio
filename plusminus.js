let z = [ 3, -4, 0, 0, 7, 10, -1 ]

let poscount = 0
let negcount = 0
let zerocount = 0

for(let i = 0; i < z.length; i++){
    if(z[i] > 0){
        poscount += 1
    }
    else if(z[i] < 0){
        negcount += 1
    }
    else if(z[i] == 0){
        zerocount += 1
    }
}
let resultarr = []
let posfraction = poscount/z.length
let negfraction = negcount/z.length
let zerofraction = zerocount/z.length
resultarr.push(posfraction.toFixed(2))
resultarr.push(negfraction.toFixed(2))
resultarr.push(zerofraction.toFixed(2))
console.log(resultarr)