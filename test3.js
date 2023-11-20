function calcu(num1, num2, operation){
    let outcome
    if(operation == "add"){
        outcome = num1+num2
    }
    else if(operation == "subtract"){
        outcome = num1-num2
    }
    else if(operation == "multiply"){
        outcome = num1*num2
    }
    else if(operation == "divide"){
        outcome = num1/num2
    }
    else{
        outcome = "Unknown operation"
    }
    return outcome
}

let x = 10
let y = 7
let operation = "add"
let result = calcu(x, y, operation)
console.log(result)

function flames(name1, name2){
    let f = "friends"
    let l = "lovers"
    let a = "acquaintance"
    let m = "meant to be"
    let e = "enemy"
    let s = "siblings"

let count = 0

    for (i = 0; i < name1.length; i++){
        for (j = 0; j < name2.length; j++){
            if(name1[i].toLowerCase() === name2[j].toLowerCase()){
                count++
                name2 = name2.substring(0, j) + name2.length(j + 1)
            }
        }
    }
    let flames = ["Friends", "Lovers", "Acquaintance", "Married", "Enemies", "Siblings"]
    let result = flames[(count%6)]
    return result
}

let name1 = "Vivencio Bataga"
let name2 = "Justin Hitagno"
let match = flames(name1, name2)
console.log(match)