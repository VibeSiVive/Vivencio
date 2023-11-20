let a = 1.4
a = Math.round(a)
console.log(a)

let b = Math.floor(Math.random() * 16) + 5 //randoms from 1-10
console.log(b)

let c = -9.23495
console.log(Math.abs(c))

let d = "Hello"
console.log(d.length)

let e = "Hello world, it is me"
console.log(e.indexOf("e", 5)) //console.log(d.indexOf("e", 5)) starting at the position 5

let f = "hello world"
console.log(f.toUpperCase())
let g = "IT IS ME"
console.log(g.toLowerCase())

let h = "this is my fruit salad"
h = h.split(" ") // cut the strings into array depending on what character in the parameter of the split method
console.log(h)

let i = [1, 2, 3]
console.log(i.length)

let j = [8, 1, 4, 6]
console.log(j.sort())

let k = ["delta", "bravo", "eco", "charlie", "alpha", 2, 6, 11, 12]
console.log(k.sort())