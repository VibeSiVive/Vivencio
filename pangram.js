//let pangram = "We promptly judged antique ivory buckles for the next prize"
let pangram = "Merry Chirstmas and Happy New Year"
let alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"

for (i = 0; i < pangram.length; i++){
    if (alpha.includes(pangram[i])){
            console.log("pangram")
        }else{
            console.log("not pangram")
    }
}

for (i = 0; i < pangram.length; i++){
    if (alpha.includes(pangram[i])){
        console.log("pangram")
    }else{
        console.log("not pangram")
    }
}  