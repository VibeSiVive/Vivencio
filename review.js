// 1. Create 4 variables with a string, integer, Boolean, and array data types respectively then output each 
// variable and its data type
// let a = "string"
// let b = 2
// let c = true
// let d = [123, 456]
// console.log(typeof a, typeof b, typeof c, typeof d) 
// console.log(a,  b,  c, d) 

// 2. Create two variables for name and age then check if age is an adult or minor using an if-else 
// statement. Adult age is 18 years old. Then output “My name is (name variable) and my age is (age 
// variable) years old.” Then check if age is an adult 
// let x = "Vive"
// let y = 20
// console.log('My name is ' + x + ' and my age is ' + y)
// if (y >= 18){
//     console.log(x + ' is an adult!')
// }

// 3. Create a variable with a string data type but has a value of an integer. Convert it to an integer, add 10 
// then output it.
// var x = "100"
// var y = parseInt(x)
// var z = y +10
// console.log(z)

// 4. Create an integer variable then create an if-else statement whether it is odd or even then output it if 
// it is an odd or even along with the number.
// let x = 19
// if (x % 2 == 0){
//     console.log(x + ' IS AN EVEN NUMBER.')
// }
// else{
//     console.log(x + ' IS AN ODD NUMBER')
// }

// 5. Create a variable for a grade from 0 to 100 then create an if-else statement whether it is passed or 
// not then output it if it is passed or failed. The passing grade is 75.
// let grade = 100

// if (grade >= 75){
//     console.log('PASSED!')
// }
// else if(grade <=74){
//     console.log('FAILED')
// }else{
//     console.log('INVALID INPUT')
// }

// // 6. Create a for-loop that starts with 2 then ends in 12 then output each number.
// for(let i = 2; i <= 12; i++){
//     console.log(i)
// }

// 7. Create a number from 1 to 10 only, then create its multiplication table from 1 to 10 using for-loop. 
// Output should be “(Number variable) x (1 to 10) = (product)”.
// a = 7
//     for(let i = 1; i <= 10; i++) {
//     console.log(a + " x " + i + " = " + a*i)
// }

// 8. Create an array composing of mixed data types: string, integer, Boolean, array. Then output each 
// element’s data type using for-loop.

// let a = ["VIve", 1, true, [123]]

// for(let i = 0; i <a.length; i++){
//     console.log(typeof a[i])
// }

// 9. Create a 2D array composing of integers elements only inside the arrays, then output each integer 
// using for-loop.
// let x = [[1, 2, 3],[4, 5, 6]]

// for (let i = 0; i<x.length; i++){
//     for (let j = 0; j<x[i].length; j++){
//         console.log(x[i][j])
//     }
// }

// 10. Create an array composing of 5 integers. Add 2 to each integer then output every single sum using
// for-loop.
// var arr = [1, 2, 3, 4, 5];
// for (var i = 0; i < arr.length; i++) {
//     var sum = arr[i] + 2;
//     console.log(sum);
// }

// 11. Create an array composing of two elements and its value are “Hello” and “World” respectively. Then
// output each letter.
// let x = ["Hello", "World"]
// for (let i = 0; i <x.length; i++){
//     for (let j = 0; j<x[i].length; j++){
//         console.log(x[i][j])
//     }
// }

// 12. Create an array composing of two elements and its value are “Hello” and “World” respectively. Then
// change its value to “Happy” and “Birthday” respectively. Lastly, output the array.
// let arr = ["Hello", "World"]
// arr[0] = "Happy"
// arr[1] = "Birthday"
// for (let i = 0; i <arr.length; i++){
//     console.log(arr);
// }

// 13. Create an array composing of two elements and its value are “Hello” and “World” respectively. Also,
// create 3 variables which has its own data of “it”, “is”, and “me” then add it to the array. Lastly, output
// the array.
// let arr = ["Hello", "World"]
// let a = "it"
// let b = "is"
// let c = "me"
// arr.push(a, b, c)
// console.log(arr)

// 14. Create two variables with both integer data types. Add, subtract, multiply, and divide the two
// integers and output each result.
// var num1 = 10
// var num2 = 5
// var sum1 = num1 + num2
// var sum2 = num1 - num2
// var sum3 = num1 * num2
// var sum4 = num1 / num2
// console.log(sum1, sum2, sum3, sum4)

// 15. Create a number then create an if-else statement if it is visible by both 5 and 3, or only visible by 5,
// or only visible by 3. Lastly, output should be “(Number variable) is divisible by both 5 and 3” or “by 5” or
// “by 3”.
// var num = 15

// if (num % 5 == 0 && num % 3 == 0){
//     console.log(num + " is divisible by both 5 and 3")
// }
// else if (num % 5 == 0){
//     console.log(num + " is divisible by 5")
// } 
// else if (num % 3 == 0){
//     console.log(num + " is divisible by 3")
// }
// else{
//     console.log("Invalid Input")
// }

// 16. Create a variable which has the data of “Philippines”. Output each letter except the vowels using forloop.
// let data = "Philippines";
// let output = [];
// for(let i = 0; i < data.length; i++) {
//     let char = data.charAt(i).toLowerCase();
//     if(['a', 'e', 'i', 'o', 'u'].indexOf(char) === -1) {
//         output.push(data.charAt(i));
//     }
// }
// console.log(output);

// 17. Create a variable which has the data of “Eutopia”. Output each letter except the consonants using
// for-loop.
// let word = "Eutopia";
// let vowels = "AEIOUaeiou";
// for (let i = 0; i < word.length; i++) {
//     if (vowels.includes(word[i])) {
//         console.log(word[i]);
//     }
// }

// 18. Create a variable which has the data of “Mask of Madness”. Change all letter A to letter O. Then
// output the new data of the variable.
// let data = "Mask of Madness"
// data = data.replace(/A/gi, 'o')
// console.log(data)

// 19. Create a string variable that has a value of a number and create an integer variable. Then, convert
// the value of the string variable into an integer. Add the two data and its sum should be outputted.
// let str = "90"
// let inte = 90
// let eq = parseInt(str)
// console.log(inte + eq)

// 20. Create a for-loop from 1 to 10 and output the even numbers only.
// for (let i = 1; i <=10; i++){
//     if (i % 2 == 0){
//         console.log(i)
//     }
// }

// 21. Create a for-loop from 1 to 100 and only output the numbers that are divisible by 10.
// for (let i = 1; i <= 100; i++){
//     if(i % 10 == 0){
//         console.log(i)
//     }
// }

//22. Create a for-loop from 0 to 30 that adds 3 to the index every time it runs in the loop.
// for (let i = 0; i <= 30; i+=3) {
//     console.log(i)
// }

// 23. Create a Boolean variable that has a true or false value. Also, create an integer variable. If the
// Boolean variable is true, add 2 to the integer then output the new value. If false, subtract 2 from the
// integer then output the new value.
// let boolVar = true
// let intVar = 10
// if(boolVar){
//     intVar += 2
// }
// else{
//     intVar -= 2
// }
// console.log(intVar)

// 24. Create an array composing of 4 elements with integer data types with different values. Add 2 to the
// first element, subtract 2 to the second element, multiply by 2 to the third element, and divide by 2 the
// last element. Then output each result.
// let arr = [1, 2, 3, 4]
// let sum = arr[0] += 2
// let difference = arr[1] -= 2
// let divide = arr[2] *= 2
// let multiply = arr[3] /=2
// console.log(arr, sum, difference, divide, multiply)

// 25. Create an array composing of 2 elements with integer data types. First element should have higher
// value than the second element. Make the value of the second element equal or greater than the first
// element just by adding 2 each time it runs in a for-loop. Then output the array.
// let arr = [10, 5]

// for (let i = arr[1]; arr[1]< arr[0]; i++){
//     arr+=2
// }
// console.log(arr)

// 26. Create an array composing of two elements and its value are “Hello” and “World” respectively.
// Create an empty string variable then add the elements of the array to the empty variable using for-loop.
// let arr = ["Hello", "World"]
// let wala = ""
// for(let i = 0; i < arr.length; i++){
//     wala += arr[i] + " "
// }
// console.log(wala)

// 27. Create an array composing of integers of 1 to 5. Create a second array composing of 2, 4, and 5.
// Using for-loop, output the integers of the first array that are not present in the second array.
// let array1 = [1, 2, 3, 4, 5];
// let array2 = [2, 4, 5];
// for (let i = 0; i < array1.length; i++) {
//     if (array2.indexOf(array1[i]) === -1) {
//         console.log(array1[i]);
//     }
// }

// 28. Create an integer variable ranging from 1 to 100. Check if the number is in which quadrant.
// Quadrant 1 is ranging from 1 to 25. Quadrant 2 is ranging from 26 to 50. Quadrant 3 is ranging from 51
// to 75. Quadrant 4 is ranging from 76 to 100. Output should be “(Number variable) is in quadrant (its
// quadrant).” 
// let x = 54
// if(x >=1 && x <=25){
//     console.log(x + " is in quadrant 1")
// }else if(x >=26 && x <=50){
//     console.log(x + " is in quadrant 2")
// }else if(x >=51 && x <=75){
//     console.log(x + " is in quadrant 3")
// }else if(x >= 76 && x <=100){
//     console.log(x + " is in quadrant 4")
// }else{
//     console.log("Invalid!")
// }

// 29. Create an array consisting of five Boolean elements. If there are 3 or more than 3 trues, output
// “Thank you.” If there are 3 or more than 3 falses, output “Sorry”.
// let arr = [true, true, true, false, false]
// if(true > false){
//     console.log("Thank you")
// }else{
//     console.log("Sorry")
// }

// 30. Create an empty string variable. Using for-loop starting from 0 to 10, add a letter x to the empty
// string and output the value of the string every time it runs in the loop.
// let emp = ""

// for (let i = 0; i < 10; i++){
//     emp += "x"
//     console.log(emp)
// }