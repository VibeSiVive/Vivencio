let x = [0, 0, 1, 2, 1, 3, 3, 5, 5] //get 2
let y = [1, 1, 1, 2, 2, 3, 3, 4, 4, 9] //get 9

for(let i = 0; i < y.length; i++){
    let counter = 0
    for(let j = 0; j < y.length; j++){
        if(y[i] == y[j]){
            counter = counter + 1
        }
    }
    if(counter == 1){
        console.log(y[i])
    }
}