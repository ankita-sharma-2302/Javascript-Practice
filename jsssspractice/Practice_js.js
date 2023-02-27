// Median of Two Sorted Arrays

// Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

// The overall run time complexity should be O(log (m+n)).

 

// Example 1:

// Input: nums1 = [1,3], nums2 = [2]
// Output: 2.00000
// Explanation: merged array = [1,2,3] and median is 2.
// Example 2:

// Input: nums1 = [1,2], nums2 = [3,4]
// Output: 2.50000
// Explanation: merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.
 

// Constraints:

// nums1.length == m
// nums2.length == n
// 0 <= m <= 1000
// 0 <= n <= 1000
// 1 <= m + n <= 2000
// -106 <= nums1[i], nums2[i] <= 106

// function Median(){
//     let nums1 = [1,2]
//     let nums2 = [3,4]
//     let newArr= nums1.concat(nums2)
//     console.log(newArr)
//     let sortedArray= newArr.sort()
//     console.log(sortedArray)
//     const length= sortedArray.length
//     console.log(length)
//     const medianIndex= parseInt(length/2)
//     console.log(medianIndex)
//     console.log(sortedArray[medianIndex])
    

// }
// Median()


// ***********************|||||||*******************************************

// reverse integer
// Given an integer, reverse digits of an integer

// Input
// 1 line containing the integer to reverse

// Output
// 1 line containing the reversed integer

// Example
// Input: 123

// Output: 321

// Input: 120

// Output: 21 because starting 0 can be removed

// Input: -123

// Output: -321


// let num = 2547

// let reverse = 0;

// while(num != 0){
// 	let lastNum = num % 10;
//   reverse = reverse * 10 + lastNum;
//   num = Math.floor(num/10);
// }

// console.log(reverse);



// orrrrrr

// let number=-23458;
// let reverse= number.split('').reverse().join('')
// console.log( Math.sign(number)*parseInt(reverse))



// ***********************|||||||*******************************************

// Life, the Universe, and Everything
// Your program is to use the brute-force approach in order to find the Answer to Life, 
// the Universe, and Everything. More precisely... rewrite small numbers from input to output. 
// Stop processing input after reading in the number 42. All numbers at input are integers of
//  one or two digits.
 

// Example
// Input:
// 1
// 2
// 88
// 42
// 99

// Output:
// 1
// 2
// 88

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// while(true){
//   let num= parseInt(readLine())
//   if(num==42){
//     break
//   }
//   console.log(num)
// }




// ***********************|||||||*******************************************



// Multiple
// You are given a positive integer N. Find the minimum positive integer divisible by both 2 and N.

// Constraints
// 1 <= N <= 109
// Input
// One Integer, denoting N.

// Output
// One Integer, denoting the minimum positive integer divisible by both 2 and N.

// Example
// Input1:

// 3
// Output1:

// 6
// Explanation1:

// 6 is divisible by both 2 and 3. Also, there is no positive integer less than 6 that is divisible by both 2 and 3. Thus, the answer is 6.
// Input2:

// 999999999
// Output2:

// 1999999998



// let num= 3
// if(num %2 ==0){
//   console.log(num)
// }
// else{
//   console.log(num*2)
// }






// ***********************|||||||*******************************************



// Given an integer array nums of length n, you want to create an array ans of length 2n where ans[i] == nums[i] and ans[i + n] == nums[i] for 0 <= i < n (0-indexed).

// Specifically, ans is the concatenation of two nums arrays.

// Return the array ans.

 

// Example 1:

// Input: nums = [1,2,1]
// Output: [1,2,1,1,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[0],nums[1],nums[2]]
// - ans = [1,2,1,1,2,1]
// Example 2:

// Input: nums = [1,3,2,1]
// Output: [1,3,2,1,1,3,2,1]
// Explanation: The array ans is formed as follows:
// - ans = [nums[0],nums[1],nums[2],nums[3],nums[0],nums[1],nums[2],nums[3]]
// - ans = [1,3,2,1,1,3,2,1]
 

// Constraints:

// n == nums.length
// 1 <= n <= 1000
// 1 <= nums[i] <= 1000

// function Concatenation(){
//   let nums = [1,2,1]
//   let newarr=[]
//   for(i=0;i<nums.length;i++){
//     newarr.push(nums[i])
//   }
//   // console.log(newarr)
//   return nums.concat(newarr)
// }
// console.log(Concatenation())





// ***********************|||||||*******************************************




// Clock
// Given two positive integers num1 and num2, the task is to find the sum of the two numbers on a 12 hour clock rather than a number line.

// Input
// Two space seperated values denoting num1, num2 respectively.

// Output
// One integer, denoting the required result.

// Example
// Input1:

// 5 7
// Output1:

// 12
// Input2:

// 5 10
// Output2:

// 3


// let num1= 5
// let num2 = 7
// let clockhour=(num1+num2)%12
// if(clockhour !=0 && clockhour < 12){
//   console.log(clockhour)
// }
// else{
//   console.log(12)
// }





// ***********************|||||||*******************************************


// Eating Symbols
// There is always an integer in Rakesh's mind.

// Initially, the integer in Rakesh's mind is 0. Rakesh is now going to eat some symbols, each of which is + or -. When he eats +, the integer in his mind increases by 1; when he eats -, the integer in his mind decreases by 1.

// The symbols Rakesh is going to eat are given to you as a string S. The i-th character in S is the i-th symbol for him to eat.

// Find the integer in Rakesh's mind after he eats all the symbols.

// Input
// One String, denoting S.

// Output
// One Integer, denoting the result.

// Example
// Input1:

// +-++
// Output1:

// 2
// Explanation1:

// Initially, the integer in Rakesh's mind is 0.
// The first integer for him to eat is +. After eating it, the integer in his mind becomes 1.
// The second integer to eat is -. After eating it, the integer in his mind becomes 0.
// The third integer to eat is +. After eating it, the integer in his mind becomes 1.
// The fourth integer to eat is +. After eating it, the integer in his mind becomes 2.

// Thus, the integer in Rakesh's mind after he eats all the symbols is 2.

// let symbols= ['+','-','+','+']
// // console.log(symbols.length)
// let count=0
// for(i=0;i<symbols.length;i++){
//   let temp= symbols[i]
//   // console.log(temp)
//   if(temp=='+'){
//     // console.log("hiiiiiiii")
//     count= count+1
//   }
//   else{
//     // console.log("hllpp")
//     count = count-1
//   }
// }
// console.log(count)





// ***********************|||||||*******************************************


// Special Range
// Given a range, as [m, n] both inclusive, print all non-negative integers in the range.

// Input
// First line contains an integer which is starting value of range, say m

// Second line contains an integer which is ending value of range, say n

// Output
// Print all non-negative integers in that range. One integer per line.

// If no such integers exist, print -1.

// Example
// Input:

// -5
// 4

// Output:

// 0
// 1
// 2
// 3
// 4


// let startNum= -5
// let endNum= 4

// for(i= startNum; i<=endNum; i++){
//   if(i>=0){
//     console.log(i)
//   }
// }
//  if(startNum<0 && endNum<0){
//   console.log(-1)
// }





// ***********************|||||||*******************************************

// find the max element in an array

// function maxElement(){
//     let arr=[10,11,7,6,50,103,155]
//     let maxValue=arr[0]
//     for (i=1;i<arr.length;i++){
//         if(maxValue< arr[i]){
//             maxValue= arr[i]
//         }

//     }
//     console.log(maxValue)
// }
// maxElement()





// ***********************|||||||*******************************************

// find the min element in an array

// function maxElement(){
//     let arr=[10,11,7,6,50,103,155]
//     let maxValue=arr[0]
//     for (i=1;i<arr.length;i++){
//         if(maxValue> arr[i]){
//             maxValue= arr[i]
//         }

//     }
//     console.log(maxValue)
// }
// maxElement()



// ***********************|||||||*******************************************


// given a sorted list of n non negative integers.
// find the integer which is accuring the max Times.
// if no such number exists, please print -1. 
// if there are multile numbers with the same maximum accurance Count. print alll of them in assending order


// function maxAccuringArray(){
//     let arr=[1,2,2,2,2,3]
//     let newArr= [...new Set(arr)]
//     // console.log(arr)
//     // console.log(newArr)

//     for(i=0;i< newArr.length;i++){
//         let count=0
//         const temp=newArr[i]
//         for(j=0;j< arr.length;j++){
//             if(temp=== arr[j]){
//                 count=count+1

//             }
//             else{
//                 count=count
//             }
//         }

//     console.log(temp,":",count)
//     }
// }
// maxAccuringArray()


// --------------------ooorrr.................................


// function maxAccuringArray(){
//     let arr=[1,2,2,2,2,3]
//     // let maxAccurance=0
   

//     // let temp = arr[0]

//     for(i=0;i< arr.length;i++){
//         const temp=arr[i]
//         let currAccurance=1
//         let j= i+1
//         for(j=i+1; i< arr.length;j++){
//             if(temp== arr[j]){
//                 currAccurance++
//             }
//             else {
//                 i=j
//                 break
//             }
//         }
//         i=i+currAccurance

//        console.log("element :: "+ temp+ "accured :: "+currAccurance)
//     }
// }
// maxAccuringArray()



// ***********************|||||||*******************************************


// Predict the seat
// A typical sleeper coach in Indian Railways contains 72 berths. The coach is divided into different blocks. Each block has the following pattern of berths: Lower - Middle - Upper - Lower - Middle - Upper - Side Lower - Side Upper. Berth number 1 is Lower, berth number 2 is Middle and so on. Write a program that predicts the berth type from the berth number.

// Input
// First line contains a positive integer n, denoting the number of test cases. It is followed by n lines. Each of the n lines contains two space separated positive integers c and b. c is the total number of berths in a coach and b is a berth number.

// Output
// n lines containing the type of berth of the corresponding test case. Berth type is defined as follows.

// L for Lower
// M for Middle
// U for Upper
// SL for Side Lower
// SU for Side Upper
// Invalid for invalid berth number
// Example
// Input:

// 3
// 72 8
// 72 42
// 56 28
// Output:

// SU
// M
// L
// First line is 3, i.e. 3 test case.

// First test case is 72 8. There are 72 berths and we are querying for berth number 8,
//  which is a Side Upper.
//  So we should print SU.

// Second test case is 72 42. There are 72 berths and we are querying for berth number 42,
//  which is a Middle. So we should print M.

// Third test case is 56 28. There are 56 berths and we are querying for berth number 28, 
// which is a Lower. So we should print L.



// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// // lower-1,middle-2,uper-3,again lower-4,midle-5,uper-6 and side lower-7,side uper-8

// let iteration= parseInt(readLine())

// for(i=0;i<iteration;i++){
//   let number = readLine().split(' ')
//   // console.log(number)
//   let berths= parseInt(number[0])
//   let berthNum= parseInt(number[1])
//   // console.log(berthNum)
//   // console.log(berths)

//   if(berths<=72 && berthNum>0){
//     if (berthNum % 8 == 1 ||
//       berthNum % 8 == 4)
//  console.log("L")
//   else if (berthNum % 8 == 2 ||
//            berthNum % 8 == 5)
//      console.log("M")
//   else if(berthNum % 8 == 3 ||
//            berthNum % 8 == 6)
//      console.log("U")
//   else if(berthNum % 8 == 7)
//      console.log("SL")
//   else
//       console.log( "SU") 
//   }
//   else
//              console.log("Invalid")
// }







// ***********************|||||||*******************************************


// Min Occurence
// You have been given n integer values. Lets say the given values are a1, a2, a3, a4 ...

// You need to find the number of occurence of the first value in the given inputs.

// Input Format:
// First line denotes n, the number of inputs. The next n lines contains one integer in each line.

// Output Format:
// One integer denoting the result, as mentioned above.

// Example:
// Input:

// 5
// 10
// 20
// 30
// 40
// 10
// Output:

// 2
// Explanation:

// From the given 5 integers, the number of occurence of the first number (10) is 2.


// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
// 	idx++;
// 	return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let iterations= parseInt(readLine())

// let firstNum= parseInt(readLine())
// let count=1
// for(i=0;i<iterations;i++){
//   const checkNums= parseInt(readLine())
//   if(firstNum===checkNums){
//     count=count+1

//   }
//   else{
//     count= count
//   }

// }
// console.log(count)




// ***********************|||||||*******************************************


// Count odd even numbers
// Count number of odd and even number in given list.

// Input
// First line contains length of the list. Each line contains integer specifying each element in list.

// Output
// 2 integers in each line specifying count of odd and even numbers respectively.

// Example
// Input:

// 5
// 12
// 14
// 15
// 13
// 18

// Output:

// 2
// 3



// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let iterations= parseInt(readLine())
// // console.log(iterations)
// let odd_Count =0
// let even_Count=0
// for(i=0;i<iterations; i++){
//   const temp= parseInt(readLine())
//   if(temp%2==0){
//     even_Count= even_Count+1
//   }
//   else{
//     odd_Count= odd_Count+1
//   }
// }
// console.log(odd_Count)
// console.log(even_Count)


// ***********************|||||||*******************************************

// counting the string

// function countingAnArray(){
//      const arr= ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
//      var count = {}
//      for( var i=0;i<arr.length;i++){
//          const v1=arr[i]
//          count[v1]= count[v1] ? count[v1]+1 : 1;
//      }
//      console.log(count)
// }
// countingAnArray()


// ***********************|||||||*******************************************

// Longest Palindromic Substring

// Given a string s, return the longest palindromic substring in s.

// function LongestPalidrom(){
//     let s = "babad"
//     let count=0
//     console.log(s.length)
//     for(i=0; i<s.length;i++){
//         const _temp= s[i]+s[i+1]
//         const temp=s[i+1]+ s[i]
//         console.log(_temp,temp)
//         if(_temp==temp){

//             console.log("number")
//         }
//         else{
//             console.log("444444")
//         }
//     }

// }
// LongestPalidrom()



// ***********************|||||||*******************************************
 
// prime number

// function PrimeNumber(){
//     let num=20;
//     for(i=1;i<num;i++){
//         let count=0;
//         for(j=1;j<=num;j++){
//             if(i%j==0){
//                count=count+1
//             }
//         }
//         if(count>2){
//             console.log(i,"::","number is not prime")
//         }
//         else{
//             console.log(i,"::","number is prime")
//         }
//     }
// }
// PrimeNumber()


// ------------orrrrr------------------------

// function PrimeNumber(){
//     let num=20
//     for (i=2;i<num;i++){

//     }
// }



// ***********************|||||||*******************************************

// Baseball Game

// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.

// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops[i] is the ith operation you must apply to the record and is one of the following:

// An integer x - Record a new score of x.
// "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record. The test cases are generated so that the answer fits in a 32-bit integer.

 

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:

// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.


// function BaseballGame(){
//     let ops = ["5","2","C","D","+"]
//     let record=[]
//     let result=0
//     for(i=0;i< ops.length;i++){
//         // let temp = parseInt(ops[i])
//         console.log(ops[i])
//         if(!isNaN(ops[i])){
//             record.push(parseInt(ops[i]))
//             // console.log("111111111",record)
//         }
//         else if(ops[i]=="C"){
//             record.pop()
//             // console.log("22222222222222",record)
//         }
//         else if(ops[i]== "D"){
//             record.push(2*parseInt(record[record.length-1]))
//             // console.log("333333333332333",record)
//         }
//         else if(ops[i]=='+'){
//             record.push(parseInt(record[record.length-2]+record[record.length-1]))
//             // console.log("4444444444444444",record)
//         }
//     }
//     console.log(record)
//    result= record.reduce((a,b)=>a+b,0)
//    console.log(result)

// }
// BaseballGame()


// ***********************|||||||*******************************************

// valid perfect square

// given a positive integernum, write a function  which return true if num is perfect square else false

// function perfectSquare(){
//     let num=14
//     let isBoolean=false
//     for(i=1;i<=num;i++){
//         if(i*i==num){
//             isBoolean=true
//         }
//     }
//     if(isBoolean){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(perfectSquare())



// ***********************|||||||*******************************************

// maxmimum accurance

// function maxAccurance(){

//     let arr=[1,5,6,2,1,3,6,5,3,1,2,7,1,2]
//     let sortedArr=arr.sort()
//     let newArr= [...new Set(arr)]
//     console.log(sortedArr)
//     console.log(newArr)

// }
// maxAccurance()


// ***********************|||||||*******************************************

// Reverse Words in a String 

// Given a string s, reverse the order of characters in each word within a sentence while 
// still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// function reverseNumber(){
//     let s = "Let's take LeetCode contest"
//     let result=""
//     // let out=""
//     // let output=""
//     for(i=s.length-1;i>=0;i--){
//         // console.log(s[i])
// // result.push(s[i])
// result+=s[i]
//     }
//     console.log(s)
//     console.log(result)
    
// }
// reverseNumber()


// ***********************|||||||*******************************************

// remove duplicate from Sorted array



// function removeDupli(){
//     let nums=[0,0,1,1,1,2,2,3,3,4]
//     let newArr=[]
//     let len= nums.length
//     for(i=0;i<len;i++){
//         if(newArr.indexOf(nums[i])===-1){
//             newArr.push(nums[i])
//         }
//     }
//     console.log(newArr)
// }
// removeDupli()

// -------------orrr---------------


// function removeDupli(){
//     let nums=[1,1,2]
//     let newArr=[]
//     let len= nums.length
//     let temp
//     for(i=0;i<len;i++){
//         if(nums[i]!==temp){

//             newArr.push(nums[i])
//             temp=nums[i]
//         }
//     }
//     // console.log(newArr)
//     return newArr
// }
// console.log(removeDupli())




// ***********************|||||||*******************************************

// maximum number of balloons

// function countBalloons(){
//     let text= "nlaebolko"
//     let count={
//         b:0,
//         a:0,
//         l:0,
//         o:0,
//         n:0
//     }
//     for(i=0;i<text.length;i++){
//         const c=text[i]
//         if (count[c] !== undefined){
//             count[c]++;
//         }
//     }
//     count["l"]= Math.floor(count['l']/2)
//     count["o"]= Math.floor(count['o']/2)
//     let minCont= Number.MAX_VALUE;
//     // console.log(minCont)
//     for(let c in count){
//         if(count[c]< minCont){
//             minCont = count[c]
//         }
//     }
//     console.log(minCont)
// }
// countBalloons()


// ***********************|||||||*******************************************

// Difference of sum of Even Odd Index numbers
// Write a function which takes a list of positive integers and returns the difference of 
// sum of numbers at even and odd index positions.

// Your function should take the list, sum all the numbers which are located at even index 
// poistion of list and sum all the numbers which are located at odd index poistion of list 
// and subtract odd postion sum from even position sum.

// you should name the function as differenceOfSumOfEvenOddIndexnumbers and it should take a list.

// Index of the list starts from 0.

// If list has only one element, then sum of odd = 0

// function differenceOfSumOfEvenOddIndexnumbers(){
//     let arr=[23,52,0,31,200]
//     let evenSum=0;
//     let oddSum=0;
//     for(i=0;i<arr.length;i++){
//         if(i%2==0){
//             evenSum=evenSum+arr[i]

//         }
//         else{
//             oddSum=oddSum+arr[i]
//         }
        
//     }
//     // console.log(evenSum)
//     //     console.log(oddSum)
//         let difference= evenSum-oddSum
//         // console.log(difference)
//         return difference
// }
// console.log(differenceOfSumOfEvenOddIndexnumbers())





// ***********************|||||||*******************************************

// image icon match

// function ImageIconMatch(){
//     let arr1=[7,27,31,8,9,10,25,8,9,11]
//     let arr2=[8,9]
//     let count=0
//     let m=arr1.length
//     let n=arr2.length
//     for(i=0;i<m;i++){
//         if(arr1[i] != arr2[0]){
//             continue
//         }
//         else{
//             if(i+n-1<m){
//                 let k=1
//                 for(j=0;j<n;j++){
//                     if(arr1[k] != arr2[j]){
//                         break
//                     }
//                     k++
//                     if(j==n-1){
//                         count=count+1
//                     }
//                 }
//             }
//         }
//     }
//     console.log(count)
// }
// ImageIconMatch()


// ***********************|||||||*******************************************

// string repeat
// input= abc, repeat=0
// output- abc abc abc

// function repeatingString(){
//     let string= "abc"
//     let repeat= 3
//     let result=""
//     for(i=0;i<repeat-1;i++){
//         result+= string+" "
//     }
//     result+=string
//     console.log(result)
// }
// repeatingString()

// ***********************|||||||*******************************************

// Even Odd Separator

// Write a function which takes a list of positive integers and return a 
// list with all the odd numbers at the start followed by even numbers.

// All the odd numbers should appear in the same order as they present, similarly the even number

// Input:

// [2,5,4,10,1,3,7,8,11,13,6]

// Output:

// [5,1,3,7,11,13,2,4,10,8,6]

// function evenOddSeparator(){
//     let arr= [2,5,4,10,1,3,7,8,11,13,6]
//     let outEven=[]
//     let outOdd=[]
//     for(i=0;i<arr.length;i++){
//         let V1= arr[i]
//         if(V1%2==0){
//             outEven.push(V1)
//         }
//         else{
//             outOdd.push(V1)
//         }
//     }
//     // console.log(outEven)
//     // console.log(outOdd)
//     let result= outOdd.concat(outEven)
//     // console.log(result)
//     return result
// }
// console.log(evenOddSeparator())





// ***********************|||||||*******************************************

// Implement strStr().

// Given two strings needle and haystack, 
// return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.
// function FirstAcc(){
//     let haystack = "hello" 
//     let needle = "ll"

//     for(i=0;i<haystack.length;i++){
//         for(j=0;j<needle.length;j++){

//         }
//     }
// }




// ***********************|||||||*******************************************


// count primes

// input n=10
// output = 4
//  there r 4 prime number less then 10,they r 2,3,5,7.

// function primeNumberCheck(){
//     n=10;
//     let outCount=0
//     for(i=1;i<=n;i++){
//         let count=0
//         for(j=1;j<=n;j++){
//             if(i%j==0){
//                 count=count+1
//             }
//         }
//         // console.log(i,"::", count)
//         if(count==2){
//             outCount=outCount+1
//         }
//     }
//     // console.log(outCount)
//     return outCount
// }
// primeNumberCheck()



// ***********************|||||||*******************************************

// fibonacci number


// function fibonacci(){
//  var n1 = 0 , n2 = 1,nextTerm;
//  var number = 4;
//  for (let i=2; i<=number; i++){
//     //  console.log(n1);
//      nextTerm=n1+n2;
//      n1=n2;
//      n2=nextTerm;
    
//  }
//  return n2
// }
// console.log(fibonacci())




// ***********************|||||||*******************************************

// Longest Palindromic Substring

// function is_Palindrome(s) {
//     var rev = s.split("").reverse().join("");
//     // console.log("reevvv",rev)
//     // console.log("strrrrrr11",s)
//     return s == rev;
//     }
    
//     function longest_palindrome(s){
    
//     var max_length = 0,
//     maxp = '';
    
//     for(var i=0; i < s.length; i++) 
//     {
//     var subs = s.substr(i, s.length);
    
//     for(var j=subs.length; j>=0; j--) 
//     {
//     var sub_subs_str = subs.substr(0, j);
//     if (sub_subs_str.length <= 1)
//     continue;
    
//     if (is_Palindrome(sub_subs_str))
//     {
//     if (sub_subs_str.length > max_length) 
//     {
//     max_length = sub_subs_str.length;
//     maxp = sub_subs_str;
//     }
//     }
//     }
//     }
    
//     return maxp;
//     }
//     console.log(longest_palindrome("babad"));
    
//     // console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 




// ***********************|||||||*******************************************

// 11. Container With Most Water
// Medium

// 17186

// 957

// Add to List

// Share
// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints 
// of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1



// var maxArea = function(height) {
//   let water=0,left=0,right=height.length-1;
// //   console.log(left,right)
// //   console.log(height)
//   while(left<right){
//     //   water= max(water,currentWater)
//     // currentWater=height*length
//     // height= min(height[left],height[right])
//     // length=right-left
//     water= Math.max(water,Math.min(height[left],height[right])*(right-left));
//     // console.log("wwwwwwwwwww",water)
//     if(height[left]> height[right]){
//         right--

//     }
//     else{
//         left++
//     }
  
//   }  
//   return water
  
// };
// console.log(maxArea([1,8,6,2,5,4,8,3,7]))





// ***********************|||||||*******************************************


// 53. Maximum Subarray
// Easy

// 21039

// 1044

// Add to List

// Share
// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

 

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23



// kadanes algorith

var maxSubArray = function(nums) {
    
};