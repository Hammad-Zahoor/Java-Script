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

// document.getElementsByClassName("name1").style.color = "yellow"
// document.head
// document.title

// console.log(document.body.firstChild)
// let a = document.body.firstChild
// console.log(a.parentNode)
// console.log(a.parentElement)
// console.log(document.body.lastChild)
// let arr = Array.from(document.body.childNodes)   // to make array
// console.log(arr)
// console.log(document.body.childNodes[0])

// let b = document.body
// console.log(b.firstChild)

// const changebodycolor = () =>{
//     document.body.firstElementChild.style.background = "red"
// }

// changebodycolor()

// let a = document.body.firstElementChild.firstElementChild
// console.log(a)
// console.log(a.rows)
// console.log(a.rows[0])
// console.log(a.rows[1].rowIndex)

// let a = document.getElementById("navbar1");
// console.log(a);
// a.style.fontSize = "20px";

// let b = document.querySelectorAll(".hello");
// console.log(b);
// b.forEach(element => {
//   element.style.background = "black";
// });

// let c = document.body.getElementsByTagName("ul");
// console.log(c);
// for (let i = 0; i < c.length; i++) {
//   c[i].style.color = "yellow";
// }

// let id1 = document.getElementById("id1")
// console.log(id1.matches(".box"))
// const span1 = document.getElementById("#span1")
// console.log(id1.closest(span1))
// console.log(id1.contains(span1))

// console.log(id1.innerHTML)  // only for elements
// console.log(id1.outerHTML)
// console.log(document.body.firstChild.data)
// console.log(document.body.textContent)

// let id1 = document.getElementById("id1")
// let a = id1.getAttribute("class")
// console.log(a)
// console.log(id1.hasAttribute("class"))
// console.log(id1.hasAttribute("style"))
// id1.setAttribute("hidden","true")
// let id2 = document.getElementById("id2")
// id2.removeAttribute("class")
// let id3 = document.getElementById("navbar1")
// console.log(id3.dataset)
// console.log(id3.dataset.game)

// let a = document.getElementsByTagName("ul")[0]
// console.log(a)
// a.innerHTML = a.innerHTML + "<h1>Hello Sir!</h1>"
// let div = document.createElement("div")
// div.innerHTML = "<h1>Hello World</h1>"
// a.append(div)
// a.prepend(div)
// a.before(div)  // out of container
// a.after(div)
// a.replaceWith(div)

// let id = document.getElementById("id1")
// id.insertAdjacentHTML('beforebegin','<div>Beforebegin</div>')
// id.insertAdjacentHTML('beforeend','<div>Beforeend</div>')
// id.insertAdjacentHTML('afterbegin','<div>Afterbegin</div>')
// id.insertAdjacentHTML('afterend','<div>Afterend</div>')
// id.remove()

// let id = document.getElementById("id1")
// id1.className = "red white-text"   // can be css styling in style.css
// id1.classList.add("red")   // red can css style class
// id1.classList.remove("red") 
// id1.classList.append("red") 
// id1.classList.toggle('red')

// let a = setTimeout(function(){
//     alert("Hello")
// },2000)
// console.log(a)
// //clearTimeout(a)

// const show = (a) =>{
//     console.log("Yes, I am running after 2 seconds")
// }
// setTimeout(show,2000,1)

// let b = setInterval(function(){
//     alert("Hello after 2 seconds")
// },2000)
// clearInterval(b)

// let b = prompt("Enter any number");
// b = Number(b);
// console.log(b);

// let x = function(e) {
//     alert("Hello bro");
//     console.log(e);
//     console.log(e.target);
//     console.log(e.clientX, e.clientY);

//     if (b > 0) {
//         a.removeEventListener("click", x);
//     }
// };

// let a = document.getElementsByTagName("button")[0];
// a.addEventListener("click", x);

// Synchronous programming
// executes evry operation one by one (one after another)

// Asynchronous Programming
// execute after some time or in random order

// function loadScript(src, callback) {
//     var script = document.createElement("script");
//     script.src = src;
//     script.onload = function() {
//         console.log("Script loaded successfully");
//         callback(null,src);
//     };
//     script.onerror = function(){
//         console.log("Error" + src)
//         callback("New error comes in " + src)
//     }
//     document.body.appendChild(script);
// }
// function hello(error1,src) {
//     alert("Hello" + src);
//     console.log(error1)
//     return
// }
// function hello(src) {
//     alert("Hello" + src);
// }

// loadScript("core_concepts.js", hello);  // if error comes in script then error hello executes otherwise hello null comes

// Pyramid of Doom or Callback Hell
// code expands horizontally and traps itself in a continuous loop


// Promises
// let promise1 = new Promise(function(resolve,reject){
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         alert("I am new promise and fulfilled")
//         resolve(true)
//         //reject(new Error("I am an rejected"))
//     },5000)
// })
// let promise2 = new Promise(function(rersolve,reject){
//     console.log("Promise is pending")
//     setTimeout(()=>{
//         alert("I am new promise and fulfilled")
//         //resolve(true)
//         reject(new Error("I am rejected"))
//     },5000)
// })

// promise1.then((value)=>{
//     console.log(value)
// })
// promise2.catch((error)=>{
//     console.log("error occured in proomise2")
// })
//console.log(promise1,promise2)   // parallely fired
// promise1.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log(error)
// })

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log("Resolved after 2 seconds");
//         resolve(56);
//     }, 2000);
// });

// p1.then((value) => {
//     console.log(value);
//     return new Promise((resolve, reject) => {
//         console.log("Promise 2");
//         resolve("Promise 2");
//     });
// }).then(() => {
//     console.log("p3 resolved");
// });

// const loadscript = (src) => {
//     return new Promise((resolve, reject) => {
//         let script = document.createElement("script")
//         script.src = src
//         script.type = "text/javascript"
//         document.body.appendChild(script)
//         script.onload = () => {
//             resolve(1)
//         }
//         script.onerror = () => {
//             reject(0)
//         }
//     })
// }

// let p1 = loadscript("core_concepts.js")
// p1.then((value) => {
//     console.log(value)
// }).catch((error)=>{
// console.log("We are having a problem with loading javascript")
// })

// let p1 = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     console.log("I am resolved")
//     resolve(1)
// },3000)
// })

// p1.then((value)=>{
// console.log(value)
// return value
// }).then((value)=>{
// console.log("Yes!!!" + value)
// })

// let p1 = new Promise((resolve,reject)=>{
// setTimeout(()=>{
//     resolve("value 1")
// },1000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject("value 2")
//     },2000)
//     })

// let promise_all = Promise.all([p1,p2])  // all promises at same time, if error comes then it stops all other execution
// promise_all.then((value)=>{
// console.log(value)
// })
// let promise_settled = Promise.allSettled([p1,p2])  // all promises at same time and run even one is rejected
// promise_settled.then((value)=>{
// console.log(value)
// })
// let promise_race = Promise.race([p1,p2])  // lowest execution time promise first even the rejected one
// promise_race.then((value)=>{
// console.log(value)
// })
// let promise_any = Promise.any([p1,p2])  // first resolved promise
// promise_any.then((value)=>{
// console.log(value)
// })

// async function Hello(){
// let p1 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("yes 1")
//     },2000)
// })
// let p2 = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve("yes 2")
//     },5000)
// })

// console.log("Fetching p1")
// let p11 = await p1
// console.log("Completed p1")
// console.log("Fetching p2")
// let p22 = await p2
// console.log("Completed p2")
// return [p11,p22]
// }

// // async functions execute in parallel
// // await functions wait for the prior processes to execute

// Hello().then((x)=>{
//     alert(x)
// })

// try and catch
// setTimeout(() => {
//     console.log("1 processing")
// }, 1000)
// try {
//     console.log(hello); // Accessing undefined variable to trigger a ReferenceError
//     throw new ReferenceError("Please check for error!");
// } catch (error) {
//     console.log(error); // Log the error object
//     console.log(error.message); // Log the error message
//     console.log(error.name); // Log the error name
//     console.log(error.stack); // Log the error stack trace
// }
// setTimeout(() => {
//     console.log("2 processing")
// }, 3000)
// setTimeout(() => {
//     console.log("3 processing")
// }, 4000)
// setTimeout(() => {
//     console.log("4 processing")
// }, 6000)

// finally
// try{
//     console.log(Program)
//     console.log("try executed")
// }
// catch{
//     console.log("This is an error")
//     console.log(p)
// }
// finally{  // finally assures that all the code in this clause run in every condition even errors comes in try and catch clause
//     console.log("Yes executed")
// }

// let p = fetch("https://goweather.herokuapp.com/weather/Ny")
// p.then((value)=>{
//     console.log(value.status)
//     console.log(value.ok)
//     console.log(value.headers)
//     return value.json()
// }).then((value)=>{
//     console.log(value)
// })

// const createTodo = async (todo) => {
//     let options = {
//         method: "POST",
//         headers: {
//             "Content-type": "application/json"
//         },
//         body: JSON.stringify(todo)
//     }

//     let response = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let data = await response.json()
//     return data
// }

// let getdata = async (id) =>{
//    let r = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
//    let data1 = await r.json()
//    return data1 
// }

// const mainFun = async () =>{
//     let todo1 = { title: 'foo',
//     body: 'bar',
//     userId: 1,}
//     let todo = await createTodo(todo1)
//     console.log(todo)
//     let get = await getdata(5)
//     console.log(get)
// }

// mainFun()

//Cookies
// console.log(document.cookie)
// document.cookie = "name = hammad1212"     // set call
// document.cookie = "name1 = hammad121233"  ///add it not replace it
// document.cookie = "name = hammad"  // 4KB for a data
// let key = "applicant"
// let value = "Zohaib"
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)};path='/a'`
// console.log(document.cookie)

// key = "applicant";
// value = "Zohaib";
// let encodedKey = encodeURIComponent(key);
// let encodedValue = encodeURIComponent(value);
// document.cookie = `${encodedKey}=${encodedValue}; path=/a`//:expires="timestamp"`;
// console.log(document.cookie);

// localstorage
// localStorage.setItem("name","Hammad")
// console.log(localStorage.getItem("name"))
// //localStorage.removeItem("name")
// //localStorage.clear()
// console.log(localStorage.length)
// console.log(localStorage.key(0))

//Session Storage
// sessionStorage.setItem("name","Hammad")   // data remains for only current browser
// // same functions

// window.onstorage = (e) =>{
//     alert("changed")
//     console.log(e)    // change when value for some is changed
// }
