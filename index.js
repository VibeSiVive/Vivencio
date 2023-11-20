/*let x = [0,1,2,3,4]
let y = ["Hello", "world", "it", "is", "me"]
//console.log(y)
for(let i = 0; i < x.length; i++){
    //console.log(y[i])
}

let z = [[3, 4], [5, 6], [7, 8]]
for(let i = 0; i < z.length; i++){
    for(let j = 0; j < z[i].length; j++){
        console.log(z[i][j])
    }
}

let  y = [1, 2, "apple", true, [8, 9], 4, 5, 6, 7]
for(let i = 0; i < y.length; i++){
    console.log(typeof y[i])
}

let  y = [1, 2, "apple", true, [8, 9], 4, 5, 6, 7]
    console.log( y[3])*/

let  y = [1, 2, "apple", true, [8, 9], 4, 5, 6, 7]
for(let i = 0; i < y.length; i++){
    if(typeof y[i] == "number"){
        console.log(y[i])
    }
}
    
