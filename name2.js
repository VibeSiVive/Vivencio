const readline = require('readline');

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('Enter your name: ', (name) => {
    console.log(name)
    rl.question('Enter your age: ', (age) => {
        age =  parseInt(age)
        if(age >= 18){
        console.log("user is an adult because he is " + age + " years old.")
        }
        else{
            console.log("user is a child because he is " + age + " years old.")
        }
        rl.close()
    })
})