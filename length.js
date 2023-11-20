const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter number: ', (x) => {
    let a = " hello"
    let b = " world"

    for(i = 1; i <= x; i++){
        if(i % 3 == 0 && i % 5 == 0){ 
            if(i % 2 == 0){
                console.log(i+ ' is an even number' + a + b)
            }
            else(
                console.log(i+' is an odd number' + a +b)
            ) 
        }
        else if (i % 3 == 0){
            if(i % 2 == 0){
                console.log(i +' is an even number' + a)
            }
            else{
                console.log(i + ' is an odd numbver' + a)
            }
        }
        else if (i % 5 == 0){
            if(i %2==0){
                console.log(i +' is an even number' + b)
            }
            else{
                console.log(i +' is an odd number' + b)
            }
        }
        else if(i%2==0){
            console.log(i +' is an even number')
        }
        else{
            console.log(i +' is an odd number')
        }
    }
     rl.close()   
    }
)