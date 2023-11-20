function counter(name,count){
    if(count > 6){
        count = count - 6
    }
    flames(name,count)
}
function flames(name,count){
    if(count <= 6){
        if(count == 0){
            console.log(name, count, "None")
        }
        else if(count == 6){
            console.log(name, count, "Sweet")
        }
        else if(count == 5){
            console.log(name, count, "Enemies")
        }
        else if(count== 4){
            console.log(name, count, "Marriage")
        }
        else if(count == 3){
            console.log(name, count, "Acceptance")
        }
        else if(count == 2){
            console.log(name, count, "Love")
        }
        else if(count == 1){
            console.log(name, count, "Friends")
        }
    }
    else{
        counter(name,count)
    }
}

let x1 = "John Lloyd Cruz" //name 1
let y1 = "Bea Alonzo" //name 2
x = x1.toLowerCase()
y = y1.toLowerCase()
let a = "" //catcher for letters that are present in both names
let xou = 0 //counter for 1st name
let you= 0 //counter for 2nd name
for(let i = 0; i < x.length;i++){ //checks each letter from the 1st name, if it is also found in the 2nd name, the variable "a" will catch it
    for(let j = 0; j < y.length;j++){
        let checked = false
        for(let k = 0; k < a.length; k++){
            if(x[i]== a[k]){
                checked = true
            }
        }
        if(checked == false){
            if(x[i] == y[j] && x[i] != " "){
                a += y[j]
            }
        }
    }
}
for(let i = 0; i < a.length;i++){ //checks each letter from "a" variable
    for(let j = 0; j < x.length; j++){ //checks the letters from the 1st name
        if(a[i] == x[j]){
            xou += 1 //add 1 to the counter for 1st name
        }
    }
    for(let j = 0; j < y.length; j++){ //checks the letters from the 2nd name
        if(a[i] == y[j]){
            you += 1 //add 1 to the counter for 2nd name
        }
    }
}
flames(x1,xou)
flames(y1,you)
console.log(xou+you)
flames("Both",xou+you)