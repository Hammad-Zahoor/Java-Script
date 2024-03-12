// Variables   case sensitive
// console.log("Variables")
// var a = 70    // old method
// console.log(a)
// a = "Harry"
// {
//     let a = "Hammad"
//     console.log(a)   // block level,  cannot be re-declare
// }
// console.log(a)
// const d = 9
// console.log(d)

// // Primitives and Objects
// console.log("Primitives")  // 7 data-types
// let a = null
// let b = 345
// let c = "Hammad"
// let d = undefined
// let e = Symbol("Hello")
// let f = BigInt("1232333")
// let g = true
// console.log(a,b,c,d,e,f,g)
// console.log(typeof(d))

// console.log("Objects")  // non-preemptive data-types   key-value mapping
// const item = {
//     a : "Harry",
//     b : 2
// }
// console.log(item["b"])
// item["a"] = null
// console.log(item.a)

// // Operators and Expressions
// console.log("Operators")
// let a = 2
// let b = 3
// console.log(a**b)
// console.log(a%b)
// console.log(a++)  // it will increase value but will show you in the next output
// console.log(a)
// console.log(++a)
// let k = 2
// k **= 2
// console.log(k)

// let val1 = 2
// let val2 ="2"
// console.log(val1 == val2)
// console.log(val1 === val2)
// console.log(val1 > 2 && val2 < 3)

// conditional expression
//let a = prompt("What is your age?")  //prompt and alert are browsing expression
// let a = "233"
// a = Number.parseInt(a)
// console.log(typeof(a))

// if(a > 100){
//     console.log("TRUE")
// }
// else if(a > 200){
//     console.log("Mostly TRUE")
// }

// const expression = "apple"
// switch(expression){
//     case "orange":
//         console.log("orange")
//         break;
//     case "apple":
//         console.log("apple")
//         break;
//     default:
//         console.log("Default")        
// }

// // Ternary operator
// let age = 20
// console.log("You ",age<18?"cannot drive":"drive")

// Loops 
// for(let i=0;i<4;i++)
// {
//     console.log(i)
// }
// let item = {
//     name:"Hammad",
//     age:23
// }
// for(a in item){
//     console.log(a , item[a])
// }
// for(a of "Haris"){
//     console.log(a)
// }

// let i = 2
// while(i<5){
//     console.log(i)
//     i++
// }

// let j = 2
// do{
//     console.log(j)
//     j++
// }while(j<5)

// //functions
// function average(x,y)
// {
//     return x+y/2
// }
// console.log(Math.round(average(2,3)))

// //arrow function
// const hello =() =>{
//     console.log("Hello")
// } 

// hello()

//String
// let a = "Hamm\"ad"
// console.log(a.length)
// console.log(a[2])
// // template literal 
// console.log(`${a} is my friend`)


// let a = "Hammad  "
// console.log(a.toUpperCase())
// console.log(a.slice(1,3))
// console.log(a.replace("amm","AMM"))
// console.log(a.concat(" hammad"))
// console.log(a.trim())
// console.log(a[0])
// console.log(a + "hmmm")
// a[0] = "A"  // This is not possible
// console.log(a)

// Arrays
// let a = [1,11,2,"Hammad"]
// console.log(a[1])
// console.log(a.length)
// a[3] = 8
// console.log(a)
// b = a.toString()
// console.log(b)
// let c = a.join("-")
// console.log(c)
// //let d = a.pop()
// //a.push("55")
// //a.shift()
// //a.unshift(99)
// console.log(a)
// let a1 = [1,2,3]
// console.log(a.concat(a1))
// console.log(a.sort())   // sort method sort the numbers alphabetically that's why 11 comes before 2 because 1 comes before 2 and every number starts with 1 comes before 2

// let compare = (a,b)=>{
//     return b - a
// }
// console.log(a.sort(compare))
// console.log(a.reverse())
// console.log(a.splice(0,1,21))  // start index,remove index, add numbers
// console.log(a1.slice(1))  // return numbers from index 1

// let a = [1,2,3,4,5,6]
// a.forEach((element)=>{
//     console.log(element * 2)
// })
// let name = "Hammad"
// let arr = Array.from(name)
// console.log(arr)

// for(let i in a)
// {
//     console.log(i)
// }

// Map, Filter and Reduce
// let arr = [1,2,3,4,5]
// let a = arr.map((value,index,array)=>{   // makes new array
// //console.log(value,index,array)
//    return value + index
// })
// console.log(a)

// let arr1 = [1,2,3,4,5]
// let a1 = arr.filter((value)=>{
//     return value < 3
// })
// console.log(a1)

// let a2 = arr.reduce((value)=>{   // add every value
//     return value + value
// })
// console.log(a2)

// let a = Math.round(Math.random() * 10)
// console.log(a)



// console.log("Hello")
// //alert("Hello")
// console.log(console)
// console.log("Hello")   // return something
// console.error("error")   //used to show some error
// console.assert(5 > 6)   //gives error if condition is false
// let obj = {a:1,b:2}
// console.table(obj)
// console.warn("Do not drink soda")
// console.info("Important information")
// console.time("p1")  // how much time it take to process between time and timeEnd
// console.timeEnd("p1")

// alert("Hello")
// let a = prompt("Enter the value of a","23")   //(,default value)
// a = Number.parseInt(a)
// document.write("Your number is " + a)
// let write = confirm("Do you want to write to this page")
// if(write)
// {
//     document.write("ok")
// }
// else{
//     document.write("You choose No")
// }

//DOM - Document Object Model
//windows can be used with console.log
// window.console.log("Hello") 
// console.log(document)
// console.log(document.body)
// document.body.style.backgroundColor="red"   // makes the body color red

//BOM - Browser Object Model
// alert,prompt and confirm under this category 




