// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//       console.log(i); // What is logged?
//     }, 1000);
//   }




// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
//   foo();




// const a
// a = 'hello'
// console.log(a)


// let a
// a = 'hello'
// console.log(a)


// obj ={
//     name:'jack'
//     }
    
//     function parent(){
//     function child(){
//     console.log(this.obj.name)
//     }
//     }



// console.log(1);

// setTimeout(() => console.log(2), 1000);

// console.log(3);



// const a = [1,2,3]

// const b = […a]

// const c = a;

// a[1] = 1;


 

// console.log(a);

// console.log(b);

// console.log(c);





// console.log(x);
// var x=5;
// console.log(x);



// console.log(x);
// let x=5;
// console.log(x);





// function foo() {
//     let a = b = 0;
//     a++;
//     return a;
//   }
//   console.log(foo());
//   typeof a; // => ???
//   typeof b; // => ???




//     Example of indexOf

// let chars = ['a','b','a','c','b']
// console.log(chars.indexOf('b'));


//  difference b/w normal function and arrow function

//  function show(x,y){ 
//      console.log(arguments)
//     return x+y;
//   }; 
//   show(10,5)  ;


    // let add = (x,y)=> { 

    //         console.log(arguments);
    //     return x+y;
    //     }; 
    //     console.log (add(10,5))  ;



// difference between null and undefined
// var a;
// console.log(a)  //undefined

// var a=null;
// console.log(a)  //null



// delete a particular value from an array

// var array=['a','b','c','d']
// var value='b';
// var deleteValue=array.filter(item=>value!=item)
// console.log(deleteValue)


// remove the duplicate item from the array
//  var array=['a','b','c','d','a','c','d']
//  var dupli=[...new Set(array)]
//  console.log(dupli)


// empty an array
//1. assigning with an empty array
// var array=[1,2,3,4,5,6,7,8]
// array=[]
// console.log(array)



//2.set it's length with array
// var array=[1,2,3,4,5,6,7,8]
// array.length=0
// console.log(array)

//3. using splice method
// var array=[1,2,3,4,5,6,7,8]
// array.splice(0,array.length)
// console.log(array)

//4. pop method
// var array=[1,2,3,4,5,6,7,8]
// while(array.length>0)
// array.pop()
// console.log(array)


//to print an fabb... series
//  var n1 = 0 , n2 = 1,nextTerm;
//  var number = 20;
//  for (let i=1; i<=number; i++){
//      console.log(n1);
//      nextTerm=n1+n2;
//      n1=n2;
//      n2=nextTerm;
    
//  }


// print prime number series
// var number=20;
// for (var i=0; i<=number; i++){
//      var notPrime=false;
//      for(var j=2; j<=i; j++){
//          if (i%j===0 && j!==i){
//              notPrime=true;
//          }
//         }
//          if(notPrime===false){
//              console.log(i)

//      }
// }



// function Mobile(model,price){
//     this.model=model;
//     this.price=price;
//     }

//     const samsung=new Mobile('note2',1000)
//     const apple=new Mobile(10,50000)
//     const realme=new Mobile('pro',30000)
//     const onePlus=new Mobile('pro2',49000)

//     Mobile.prototype.getcolor='white'   

//     console.log(samsung);
//     console.log(apple);
//     console.log(realme);
//     console.log(onePlus);




// setTimeout(()=>{console.log('3')},10);
// Promise.resolve().then(()=>
// console.log('hello'))
// .then(()=>console.log('come hello'))
// .catch(()=>console.log('error'));



// async await function concept

// console.log("this is me")

// async function harry(){
//     console.log('inside harry function');
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     console.log('before response');
//     const users = await response.json();
//     console.log('users resolved')
//     return users;
//     //return "harry";
// }
// console.log("before calling harry")
// let a= harry();
// console.log("after calling harry")
// console.log(a);
// a.then(data => console.log(data))
// console.log("last line of this js file")

// var arr=[1,4,6,5,8,5,9]
//console.log(Math.min(1,4,6,5,8,5,9))   //return the minimum value from the array
//const minimum = Math.max(...arr)       //return the maximum value from the array
//console.log(minimum)
// console.log(Math.max(...arr))



// arr.pop()                            // delete the last value form the array
// console.log(arr)

// arr.push(2)                          // insert the value at the last of the Array
// console.log(arr)

// arr.shift()                         // delete the value from the starting for the array
// console.log(arr)


// arr.unshift("hello")               //add the value at the starting of the array
// console.log(arr)

// console.log(isNaN("hello"))        //it return true if it a number else false     


// var my="kajal"
// console.log(typeof(my))              //return the type of the variable


// var array=[2,56,8,5,7,89,4]
// console.log(array.indexOf(55))     // return -1 if we don't pass any value or if the value is not present in the array


// var array=[2,4,6,8,1,3,5,7,9]
// var addition=array[0]+array[array.length-1];  
// console.log(addition)


//          prototye inheritence
// var school={
//     teachers:"ten",
//     garden:"two"
// }

// var colg={
//     courses:"five"
// }

// console.log(school.teachers)
// colg._proto_=school;

// console.log(colg.teachers)



// var arr=[2,5,6,8,9,4,7]        ///deletig a particular index value from an array
// console.log(...arr.slice(0,3),...arr.slice(3+1))


// var arr = [4, 144, 36, 49, 64, 81];
  
// var newArr = arr.map(function(item, index){
//     return { value:item*item};
// })
  
// console.log(newArr)


// var x1=arr.map(Math.sqrt);
// console.log(x1);

// var x2=arr.map(item=>item*item)
// console.log(x2)



// var arr = [4, 144, 36, 49, 64, 81];
// var x3=arr.filter(item=>item%2!==0)
// console.log(x3)



// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

// const result = words.filter(word => word.length > 6);

// console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]


// 10 array methods
// 1. forEach()= this method help us to loop over array
  
// var arr=[1,2,3,4,5,6,7,8,9]
// arr.map(item=>{
// console.log(item)
// })


// 2. includes= this check that the value is present in the array or not
                //returns  true of false 
// var arr=[1,2,3,4,5,6,7,8,9]
// console.log(arr.includes(8))
// console.log(arr.includes(0))

// 3. filter = this array return new array when the given condition satisfied
 
// var arr=[1,2,3,4,5,6,7,8,9]
// var filtered=arr.filter(item=>item%2==0)
// console.log(filtered)

// 4. map = this function return the new array by providing the function in every element 

// var arr=[1,2,3,4,5,6,7,8,9]
// var addition=arr.map(item=>item+10)
// console.log(addition)

// 5. reduce = add whole values of an array and return single value

// var arr=[1,2,3,4,5,6,7,8,9]
// var sum=arr.reduce((total,item)=>total+item)
// console.log(sum)


// 6.7. some()/every() = it basically check many condition whether it is true of not
//             if satisfied it return true if not return false

// var arr=[1,2,3,4,5,6,7,8,9]
// var larger=arr.some(item=>item<5)
// console.log(larger)


// 8.sort() = sort the array i  ascending and descending order 
// var arr=[2,7,8,9,3,5]
// var number=arr.sort((a,b)=>a>b ? 1 : -1)
// console.log(number)


// var arr2=['c','b','a','f','m','j']
// var number2=arr2.sort((a,b)=>a<b ? 1 : -1)
// console.log(number2)

// 9. Array.from()= convert the string into array
// var string='hello'
// var newArray = Array.from(string)
// console.log(newArray)


// 10. Array.of() = this create array from every argument
// var newArray=Array.of(5,'hello',7,'bye')
// console.log(newArray)


// undefined
// let b
// let a='null'
// console.log(b)
// console.log(a)



// program to generate fibonacci series up to n terms

// take input from the user
// const number = parseInt(prompt('Enter the number of terms: '));
// let n1 = 0, n2 = 1, nextTerm;

// console.log('Fibonacci Series:');

// for (let i = 1; i <= number; i++) {
//     console.log(n1);
//     nextTerm = n1 + n2;
//     n1 = n2;
//     n2 = nextTerm;
// }




// sum of all the numbers

// function summition(num){
//     var sum=0
//     for (var i=0;i<=num;i++){
//         sum=sum+i
//     }
//     return sum
// }
// console.log (summition(10))


// sum of all the even numbers
// function summition(num){
//     var sum=0
//     for (var i=0;i<=num;i++){
//         if(i%2==0){
//             sum=sum+i
//         }
//     }
//     return (sum)
// }
// console.log(summition(10))


// IIFE-> imediately invoked fxn expression
// {function sum (){
//     console.log("trying out iife")
// }} sum ()




// callback function===>>>process of passing a function to another function is called callback function
// function addnum(callback){
//     return callback
// }
// function getnum(){
//     return callback
// }
// console.log (addnum(getnum))



// arrow function
// const biodata=()=>{
//     let name='ankita'
//     let age=24
//     return name+age
// }
// console.log(biodata())



// promise

// function demo(age){
//     return Promise=new Promise((resolve, reject) =>{
//         if (age>2){
//             resolve("promise success")
//         }
//         else{
//             reject("sorry there is an error")
//         }
//         .then(data=>{
//             console.log(data)
//         })
        
//     }
// }



// let var and const

// if (true) {
//     var a = 'ankita';
//     let b = 'sharma';
//     const c = 'didu';
  
//     console.log(a); // 'peekaboo!';
//     console.log(b); // 'i see u';
//     console.log(c); // 'baby blue!';
//   }
  
//   console.log(a); // 'peekaboo!';
//   console.log(b); // ReferenceError: bar is not defined
//   console.log(c); // ReferenceError: baz is not defined




// arrow function

// const fname=(a)=>{
//     const value= a*a
//     return value 

// }
// console.log(fname(2))


// var a=5;
// var a=6;
// console.log(a)


// hoisting

// function fname(){
//     console.log(a)
//     var a=6;
    
// }
// fname()



// var arr=[1,2,3,4,5,6,7,8,9]
// value=6
// var aar1= arr.filter((e)=>e!=value)
// console.log(aar1)



// var arr=[1,2,3,4,5,6,7,8,9]
// var arr1=[...arr.slice(0,5),...arr.slice(6)]
// console.log(arr1)


// string length
// var str = "Hello World!";
// var n = str.length;
// console.log(n)


//repeated number count

// var obj={}
// var repeats=[];
// str='banana'

// for(x = 0, length = str.length; x < length; x++) {
//     var l = str.charAt(x)
//     obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
// }

// console.log(obj)



// clousers

// function outerFun(){
//     var a="you are in outer";
//     console.log(a);
    
//     function innerFun(){
//       var b="you are on inner"
//       console.log(a);
//     console.log(b)
    
//      }
//  innerFun()
//   }
//   outerFun()


// difference between protoype and constructor

// function Vehicle(wheel,price){
//     this.wheel=wheel;
//     this.price=price;
//     }
  
//   const bike=new Vehicle(2,1000);
//   const car=new Vehicle(4,2000);
  
//   Vehicle.prototype.getcolor="blue"
  
  
//    console.log(bike)
//    console.log(car)




// count

// var arr=['b','b','c','d','b','d','b']
// var count=0
// var value='b'
// for(i=0;i<=arr.length;i++){
//     if(value==arr[i]){
//         count=count+1
//     }
//     else{
//         count=count
//     }

// }
// console.log(count)



// var arr=['b','b','c','d','b','d','b']

// for(let i=0;i<=arr.length;i++){
//     var number=arr[i]
//     var count=0
//     for (let j=0;j<=arr.length;j++){
//         var V1=arr[j]
//         if(number==V1){
//             count=count+1
//         }
       
//     }
//     console.log(number,"count",count)
   
// }



// let number=20;
// for(let i=1;i<=number;i++){
//     var count=0;
//     for(let j=1;j<=number;j++){
//         if(i%j==0){
//            count=count+1
//         }
//     }

// if(count>2){
//     console.log(i,":","number is not Prime")
// }
// else{
//     console.log(i,":","number is prime")
// }
// }


// Write the code to save the square of all elements of an array into another array and
// then print it (both by using map method)

// var Arr = [1,2,3,4,5,6];
// for(i=0;i<=Arr.length-1;i++){
//     ch=Arr[i]
//     squar=ch*ch
//     console.log(squar)
// }


// var Arr = [6,8,3,7,3];
// console.log(Arr.map((item)=> item*item))




// Write the code to filter the array of all elements that are zero and save into another
// array and then print it (using filter function )

// var Arr = [1,0,3,0,0,6];
// var z= Arr.filter((item)=>item!=0)
// console.log(z)


// var Arr = [6,8,3,7,0];
// for(i=0;i<=Arr.length-1;i++){
//     ch=Arr[i]
//     if(ch!=0){
//         console.log(ch)
//     }
// }



// Find the difference between the sum of the squares of the first 
// one hundred natural numbers and the square of the sum.

// n=10;
// sum=0;
// sum1=0;
// for(i=1;i<=n;i++){
//     ch=i
//     sum1=sum1+i
//     square=ch*ch
//     sum=sum+square

// }
// console.log(sum)
// console.log(sum1)
// console.log(sum-sum1)



// A palindromic number reads the same both ways. The largest palindrome made from the product
//  of two 2-digit numbers is 9009 = 91 × 99.
// Find the largest palindrome made from the product of two 3-digit numbers

// for (i=999;i>100;i--){
//     ch=i
//     for(j=999;j>100;i--){
//         ch1=j
//         var mul= ch*ch1
//         if(isPalin)
//     }
// }


// If the numbers 1 to 5 are written out in words: one, two, three, four, five, 
// then there are 3 + 3 + 5 + 4 + 4 = 19 letters used in total.
// If all the numbers from 1 to 1000 (one thousand) inclusive were 
// written out in words, how many letters would be used?
// n=100;
// for(i=0;i<=n;i++){
//     ch=i

// }





// //  count of string in an array
// const getcount=()=>{
//   const arr=['dog','cat','mouse','dog','dog','cat']
// const count={}
//   for (var i=0;i<=arr.length;i++){
// const item = arr[i]
// console.log(item)
// count[item]= count[item] ? count[item]+1 : 1
// console.log(count)
// }

// return count
// }
// getcount()











// function getcount(){
//   const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//   const alphabet = alpha.map((x) => String.fromCharCode(x));
//   console.log(alphabet);
//   const name="ANKITA"
//   let count={}
//   for (var i=0;i<=alphabet.length-1;i++){
// // var character= alphabet[i]
// // console.log(character)
// for(var j=0; j<=name.length-1;j++){
//   // var namee= name[j]
//   // console.log(namee)
//   // count[character]= count[namee] ? count[character]+1 : 1
// // console.log(count)
// if(alphabet[i]== name[j]){
//   console.log("hiiiiiiiiiiiiiiiii", alphabet[i])
//   count[alphabet[i]]= count[alphabet[i]] ? count[alphabet[i]]+1 : 1
//   console.log(count)
// }
  
// }
// // // console.log("nameeeee",namee)
// // if(count[i] != alphabet[i]){
// // console.log("88888888888",alphabet[i])
// // }

//   }
// }
// getcount()






// function getcount(){
//   const alpha = Array.from(Array(26)).map((e, i) => i + 65);
//   const alphabet = alpha.map((x) => String.fromCharCode(x));
//   console.log(alphabet);
//   const name="ANKITA"
  
//   let count={}
//   for(i=0;i<=name.length-1;i++){
//     alphabet.push(name[i])
//   }
//   console.log("nammmee", alphabet)
//   for(j=0;j<=alphabet.length-1;i++){
//     const namme= alphabet[j]
//     console.log("1111111111111111111",namme)
//     count[namme]=count[namme] ? count[namme]+1 : 1;
//     // console.log(count)
//   }
//   console.log(count)
// }
// getcount()





// bubbleSort
// const bubbleSort = ()=> {
//   const array=[1,5,3,7,4,2]
//   let swaps;
//   do {
//     swaps = false;
//     for (let i = 0; i < array.length - 1; i++) {
//       if (array[i] > array[i + 1]) {
//         let temp = array[i + 1];
//         array[i + 1] = array[i];
//         array[i] = temp;
//         swaps = true;
//       }
//     }
//   } while (swaps);
//   console.log(array)
//   return array;
// };
// bubbleSort()
  


//    or
// const bubblesort=()=>{
//   const array=[1,5,3,7,4,2]
//   let swap;
//   do{
//     swap= false
//     for(i=1;i<=array.length;i++){
//       if(array[i]> array[i+1]){
//         const temp= array[i]
//         array[i]= array[i+1]
//         array[i+1]= temp
//         swap= true;
//       }
//     }
//   } while(swap)
//   console.log(array)
// }
// bubblesort()




// Write a function called lucky_sevens which takes an array of integers 
// and returns true if any three consecutive elements sum to 7.

// const lucksevenfunction=()=>{
//   const arr=[2, 9, 5, 1, 0,6,6]
//   for(i=0;i<=arr.length-1;i++){
//     if(arr[i]+ arr[i+1]+ arr[i+2]===7){
// return true
//     }
//     return false
//   }
// }
// console.log(lucksevenfunction())
  



// orrrrr

// function lucky_sevens(arr) {
  
//   // if less than 3 elements then this challenge is not possible
//   if (arr.length < 3) {
//     return "not possible";
//   }
  
//   // because we know there are at least 3 elements we can
//   // start the loop at the 3rd element in the array (i=2)
//   // and check it along with the two previous elements (i-1) and (i-2)
//   for (var i = 2; i < arr.length; i++) {
//     if (arr[i] + arr[i-1] + arr[i-2] === 7) {
//       return true; 
//     }
//   }
  
//   // if loop is finished and no elements summed to 7
//   return false;
  
// }

// console.log(lucky_sevens([2, 9, 5, 5, 0,6,6]));



// You will be given a number N that represents where the minute hand currently is on a clock.
//  Your program should return the angle that is formed by the minute hand
//   and the 12 o'clock mark on the clock.

// function simpleClockAngle(num) {

//   // we got 6 because 360/60 = 6
//   // 360 represents the full number of a degrees in a circle and
//   // 60 is the number of minutes on a clock, so dividing these two numbers
//   // gives us the number of degrees for one minute
//   return 6 * num;

// }

// console.log(simpleClockAngle(15));



// You will be given an array of several arrays 
// that each contain integers and your goal is to write a 
// function that will sum up all the numbers in all the arrays.
//  For example, if the input is [[3, 2], [1], [4, 12]] 
// then your program should output 22 because 3 + 2 + 1 + 4 + 12 = 22. 
// Solve without and with reduce

// function sum_array(arr) {
//   // store our final answer
//   var sum = 0;
//   // loop through entire array
//   for (var i = 0; i < arr.length; i++) {
//     // loop through each inner array
//     for (var j = 0; j < arr[i].length; j++) {
//       // add this number to the current final sum
//       sum += arr[i][j];
//     }
//   }
  
//   return sum;
// }

// console.log(sum_array([[3, 2], [1], [4, 12]]));




// You will be given 2 parameters: a low and high number.
//  Your goal is to print all numbers between low and high, 
//  and for each of these numbers print whether or not the number is divisible by 3. 
// If the number is divisible by 3, print the word "div3" directly after the number

// function test_divisors(low, high) {
  
//   // we'll store all numbers and strings within an array
//   // instead of printing directly to the console
//   var output = [];
  
//   for (var i = low; i <= high; i++) {
    
//     // simply store the current number in the output array
//     output.push(i);
    
//     // check if the current number is evenly divisible by 3
//     if (i % 3 === 0) { output.push('div3'); }
    
//   }
  
//   // return all numbers and strings
//   return output;
  
// }

// console.log(test_divisors(2, 10));




// Write a function called oddball_sum which 
// takes in a list of numbers and returns the sum 
// of all the odd elements. Try to solve with and without reduce function.

// const addball_sum=()=>{
//   const arr= [1, 2, 3, 4, 5]
//   let sum=0;
//   for(i=0;i<=arr.length-1;i++){
//     // console.log(arr[i])
//     if(arr[i]%02!=0){
// sum= sum+arr[i]
//     }
//   }
//   console.log(sum)
// }
// addball_sum()



// Remove duplicates of an array and return an array of only unique elements  


// function removeDulpi(){
//     var array = [1, 2, 3, 5, 1, 5, 9, 1, 2, 8];

//     const newarr=console.log([...new Set(array)])
//     console.log(newarr)
// }
// removeDulpi()


// function uniqueArray(array) {
//     var hashmap = {};
//     var unique = [];
  
//     for(var i = 0; i < array.length; i++) {
//       // If key returns undefined (unique), it is evaluated as false.
//       if(!hashmap.hasOwnProperty(array[i])) {
//         hashmap[array[i]] = 1;
//         unique.push(array[i]);
//       }
//     }
  
//     return unique;
//   }
//   console.log(uniqueArray([1, 2, 3, 5, 1, 5, 9, 1, 2, 8]))








// // Find out if a string is a rotation of another string. 
// var insertionSort = function(a) {
//     // Iterate through our array
//     for (var i = 1, value; i < a.length; i++) {
//         // Our array is split into two parts: values preceeding i are sorted, while others are unsorted
//         // Store the unsorted value at i
//         value = a[i];
//         // Interate backwards through the unsorted values until we find the correct location for our `next` value
//         for (var j = i; a[j - 1] > value; j--) {
//             // Shift the value to the right
//             a[j] = a[j - 1];
//         }
//         // Once we've created an open "slot" in the correct location for our value, insert it
//         a[j] = value;
//     }
//     // Return the sorted array
//     return a;
// };
// console.log(insertionSort([5,8,6,2,4,1,3]))








// Write a function that takes an array of integers and
//  returns the sum of the integers after adding 1 to each.


// for(var i=0;i<3;i++){
//     setTimeout(function(){i},1000+i)
// }

// function fic(x){
//     return new Promise(function(resolve){
//         setTimeout(function(){
//             resolve(x)
//         },5000)
//     })
// }
// async function add(x){
//     const a=fic(2)
//     const b=fic(3)
//     returnx
// }


// var person=function(fname,lname,dob,m){
//     this.fname=fname
//     this.lname=lname;
//     this.dob=dob
//     this.m=m
// }
//     person= new person("wondr","women", new Date(),{
//         weight:""
//     })

