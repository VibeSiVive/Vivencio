let password = "password"
   
let s = 0
let caps = 0
let number = 0
let symbol = 0

    
for (let i = 0; i < password.length; i++) {
    const char = password.charAt(i)
    if (/[a-z]/.test(char)) {
        s++
    } 
    else if (/[A-Z]/.test(char)) {
        caps++
    } 
    else if (/[0-9]/.test(char)) {
        number++
    } 
    else {
        symbol++
    }
}
    if (password.length >= 8 && s >= 5 && caps >= 1 && number >= 1 && symbol >= 1) {
        console.log(password.length + " characters", s + " small letters", caps + " capital letters", number + " numbers", + symbol + " symbols" + " and it is a strong password")
    } else if(password.length <= 8 && s <= 5 && caps <= 1 && number <= 1 && symbol <= 1){
        console.log(password.length + " characters", s + " small letters", caps + " capital letters", number + " numbers", + symbol + " symbols" + " and it is a weak password")
}