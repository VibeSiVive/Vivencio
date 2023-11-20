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
            }
        }
    }
if(count % 6 == 1){
    return f
}
else if(count % 6 == 2){
    return l
}
else if(count % 6 == 3){
    return a
}
else if(count % 6 == 4){
    return m
}
else if(count % 6 == 5){
    return e
}
else if(count % 6 == 6){
    return s
}
}

let name1 = "John Lloyd Cruza" //2 + 1
let name2 = "Bea Alonzo" //1 +1

let match = flames(name1, name2)
console.log(match)