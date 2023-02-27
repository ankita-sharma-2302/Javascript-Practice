
// ***********************|||||||*******************************************



// const P= 1000;
// const T= 10;
// const R= 5;
// const SI= parseInt((P*T*R)/100)
// console.log(SI)



// ***********************|||||||*******************************************

// Arithmetic Progression
// given first 3 numbers of airthmatic progression, predict the next number

// let num1= 2
// let num2= 5
// let num3 = 8
// let difference= num2-num1
// let num4= difference+num3
// console.log(num4)



// ***********************|||||||*******************************************

// Geometric Progression
// given first 3 number of a geometric progression, predict the next number


// let num1= 2
// let num2= 4
// let num3= 8
// let power= num2/num1
// let result= num3*power
// let number = parseInt(result)
// console.log(number)



// ***********************|||||||*******************************************

// Travel Time
// ank is travelling from hydrabad to banglore on a Car. Assume the distance from hydrabad to banglore is 600kms.
// u will be given the average speed of ank car n u hve to calculate the travel time.

// const speed= parseInt(readLine())
// const travel_time= parseInt(600/speed)
// console.log(travel_time)




// ***********************|||||||*******************************************

// Sum of first n Numbers
// Given n, find the sum of first n integers.

// let number= 5
// let sum=0;
// for(i=1;i<=number;i++){
//   sum = sum+i
// }
// console.log(sum)




// ***********************|||||||*******************************************

// Given length and breadth of a rectangle, compute the area of the rectangle.

// Input
// Two lines containing one integer each. First line contains 
//  length and second line contains the breadth.

// Output
// One line containing one integer, which is the area of the given rectangle.

// Print 0 if no such rectangle exists


// Area of rectange

// let length= 5
// let breadth= 3

// if(length>0 && breadth>0 && length!= breadth){
//   let area= length*breadth
//   console.log(area)
 
// }
// else{
//   console.log(0)
// }





// ***********************|||||||*******************************************


// Perimeter of a Rectangle
// Given the length and breadth of a rectangle, compute and print
//  its perimeter. If no such rectangle exists print 0.

// Input
// Two lines containing one integer each

// Output
// One line containing one integer


// let length= 7
// let width = 3
// if(length>0 && width>0 && length!= width){
//   let param= 2*(length+width)
//   console.log(param)
// }
// else{
//   console.log(0)
// }






// ***********************|||||||*******************************************


// Dice
// You are given a cubic dice with 6 faces. All the individual faces 
// have a number printed on them. The numbers are in the range of 1 to 6, 
// like any ordinary dice. You will be provided the number on the top face of this 
// cube, your task is to guess the number on the opposite face of the cube.

// let number= 6
// let oppositeNumber= 7-number
// console.log(oppositeNumber)




// ***********************|||||||*******************************************

// Predict the quadrant

// Given a point on a two dimensional plane, predict the quadrant to which it belongs.
//  Quadrants are named as Q1, Q2, Q3 and Q4.
//  Given a point P(x, y), quadrant of P is defined as follows.
// Q1, if x > 0 and y > 0
// Q2, if x < 0 and y > 0
// Q3, if x < 0 and y < 0
// Q4, if x > 0 and y < 0
// Predict the quadrant
// Given a point on a two dimensional plane,
//  predict the quadrant to which it belongs.
//   Quadrants are named as Q1, Q2, Q3 and Q4. Given a point P(x, y),
// 	 quadrant of P is defined as follows.

// Q1, if x > 0 and y > 0
// Q2, if x < 0 and y > 0
// Q3, if x < 0 and y < 0
// Q4, if x > 0 and y < 0
// Input
// First line contains a positive integer n, denoting the number of test cases. 
// It is followed by n lines. Each of the n lines contains two space separated integers x and y. 
// Assume that neither x nor y is 0.

// Output
// n lines containing the quadrant to which the corresponding point belongs.


// let x= 2
// let y=-9
// 	console.log(x)
// 	console.log(y)
// 	if (x > 0 && y > 0){
// 		console.log("Q1")
// 		}
// 		 if (x < 0 && y > 0){
// 			 console.log("Q2")
// 		 }
// 		 if (x < 0 && y < 0){


// 			console.log("Q3")
// 		}
// 		 if (x > 0 && y < 0){
// 		console.log("Q4")
// 		}




// ***********************|||||||*******************************************


// Rating Content
// A programming competition site regularly holds programming contests at different levels.

// The first level contest is called ABC, which is open for contestants with ranking less than 1200.

// The contest level after the ABC is called ARC, which is open for contestants with ranking less than 2800.

// The contest level after the ARC is called AGC, which is open for all contestants.

// Help Ramesh in figuring out which is the next level for him given his current rank 'R'.
// Input
// One Integer, denoting R.

// Output
// Print the name of the next contest rated for Ramesh (ABC, ARC or AGC).



// let ranking=1199
// if(ranking< 1200){
// 	console.log("ABC")
// }
// else if(ranking<2800){
// 	console.log("ARC")
// }
// else{
// 	console.log("AGC")
// }




// ***********************|||||||*******************************************

// Train
// There is an N-car train.
// You are given an integer i. Find the value of j such that the following statement is true: 
// "the i-th car from the front of the train is the j-th car from the back."
// Constraints
// 1 <= i <= N
// Input
// Two space seperated integers, denoting N,i respectively.
// Output
// One integer, denoting j.

// Example
// Input1:
// 4 2
// Output1:
// 3
// Explanation1:
// The second car from the front of a 4-car train is the third car from the back.


// let i= 4
// // console.log(i)
// let j = 2
// // console.log(j)
// let n= (i+1)-j
// console.log(n)




// ***********************|||||||*******************************************

// Vectors
// Given two force vectors, find out whether they are parallel, perpendicular or neither.
//  Let the first vector be A = a1 i +a2 j + a3 k and the second vector be B = b1 i + b2 j + b3 k.
// A.B = a1 x b1 + a2 x b2 + a3 x b3
// A x B = (a2 x b3 - a3 x b2) i - (a1 x b3 - b1 x a3) j + (a1 x b2 - a2 x b1) k
// |A|2 = a12 + a22 + a32
// If A.B = 0, then A and B are perpendicular.
// If |A X B| = 0, then A and B are parallel.
// Input
// First line contains three space seperate values denoting, a1, a2, a3 respectively. 
// Second line contains three space seperate values denoting, b1, b2, b3 respectively.
// Output
// Print 1 if they are parallel to each other, 2 if they are perpendicular to each other and 0 otherwise.

// Example
// Input1:
// 3 2 1
// 6 4 2
// Output1:
// 1
// Explanation:
// |A X B| = 0



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
// let A= readLine().split(" ")
// // console.log(A)
// let B= readLine().split(" ")
// // console.log(B)
// const a1=parseInt(A[0])
// const a2= parseInt(A[1])
// const a3= parseInt(A[2])
// const b1=parseInt(B[0])
// const b2=parseInt(B[1])
// const b3= parseInt(B[2])
// // console.log(a1)
// // console.log(a2)
// // console.log(a3)
// // console.log(b1)
// // console.log(b2)
// // console.log(b3)
// let  perpendicular= a1 * b1 + a2 * b2 + a3 * b3
// // console.log(perpendicular)
// const parallel=   (a2 * b3 - a3 * b2)*2 - (a1 * b3 - b1 * a3)2 + (a1 * b2 - a2 * b1)*2
// // console.log(parallel)
// if(parallel==0){
// 	console.log(1)
// }
// else if(perpendicular==0){
// 	console.log(2)
// }
// else{
// 	console.log(0)
// }





// ***********************|||||||*******************************************

// Iterate
// Given an integer n. You need to print first n natural numbers
//  which are divisible by n (excluding zero).

// Input Format:
// First line denotes n.

// Output Format:
// Print the desired result. One integer in one line.

// Example:
// Input:

// 5
// Output:

// 5
// 10
// 15
// 20
// 25
// Explanation:

// 5, 10, 15, 20, 25 are the first 5 natural numbers divisible by 5.

// let num= 5
// for(i=1;i<=num;i++){
// 	const mul= num*i
// 	console.log(mul)
// }




// ***********************|||||||*******************************************

// Square Sum
// Given a natural number n as input, find the sum of squares of first n natural numbers.

// Input
// One Integer, denoting n.

// Output
// One Integer, denoting the required sum.

// Example
// Input: 3

// Output: 14

// Explanation:

// 1*1+2*2+3*3 = 14

// let n = 3
// let sum =0
// for(i=1;i<=n;i++){
// 	const Square= i*i
// 	sum= sum + Square
// }
// console.log(sum)






// ***********************|||||||*******************************************

// Crackers
// Kumar has decided to distribute N Crackers to K users of as evenly as possible.
//  When all the crackers are distributed, find the minimum possible (absolute) 
// difference between the largest number of crackers received by a user and the smallest
//  number received by a user.

// Input
// Two space seperated Integers, denoting N, K respectively.

// Output
// One integer, denoting result.

// Example
// Input1:

// 7 3
// Output1:

// 1
// Explanation1:

// When the users receive two, two and three crackers, respectively,
//  the (absolute) difference between the largest number of crackers received by a user
//   and the smallest number received by a user, is 1.
// 123456789

// let N = 7
// let k= 3
// if(N%k==0){
// 	console.log(0)
// }
// else{
// 	console.log(1)
// }





// ***********************|||||||*******************************************

// Armstrong
// For a given 3 digit number, find whether it is armstrong number or not.
//  An Armstrong number of three digits is an integer such that the sum of the cubes of its
//   digits is equal to the number itself. Print Yes if it is a armstrong number else print No.

// Input
// One integer, denoting the 3 digit number.

// Output
// One string, denoting Yes or No.

// Example
// Input1:

// 153
// Output1:

// Yes
// Explanation:

// 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let Num= readLine()
// let number= Num.split("")
// // console.log(number)
// let a= parseInt(number[0])
// // console.log(Math.cbrt(a))
// let b= parseInt(number[1])
// // console.log(Math.cbrt(b))
// let c= parseInt(number[2])
// // console.log(c)
// let sum=a*3+b3+c*3
// // console.log(sum)
// if(sum==Num){
//   console.log("yes")
// }
// else{
//   console.log("no")
// }

// orrrr

// let num= 153
// let temp=num
// let sum = 0;
// while(num>0){
//   // console.log(num)
//   let remainder= parseInt(num % 10);
//   // console.log(remainder)
//   sum= sum + remainder**3
//   // console.log(sum)
//   num = parseInt(num/10)
//   // console.log(num)
// }
// console.log(sum)
// console.log(num)
// if(temp == sum){
//   console.log("Yes")
// }
// else{
//   console.log('No')
// }



// ***********************|||||||*******************************************

// abc odd
// You are given integers A and B, each between 1 and 3 (inclusive).

// Determine if there is an integer C between 1 and 3 (inclusive) such that A×B×C is an odd number.

// Constraints
// 1 <= A,B <= 3
// Input
// Two space seperated integers, denoting A,B respectively.

// Output
// If there is an integer C between 1 and 3 that satisfies the condition, print Yes; otherwise, print No.

// Example
// Input1:

// 3 1
// Output1:

// Yes
// Explanation1:

// Let C = 3. Then, A×B×C = 3×1×3 = 9, which is an odd number..

// let first_num= 3
// let sec_num= 1
// let result=1
// for(i=1;i<=3;i++){
//   // console.log(i)
//    result= first_num*sec_num*i
  
// }
// if(result % 2 !=0){
//   console.log("Yes")
// }
// else{
//   console.log("No")
// }





// ***********************|||||||*******************************************

// Product & SUM
// Given an integer number N, return the difference between the product of 
// its digits and the sum of its digits. Assume that the number N can never be negative number.

// Input
// One line containing the number N

// Output
// One line for the difference between product and sum

// Example
// Input: 234

// Output: 15

// Product of digits = 2 3 4 = 24 Sum of digits = 2 + 3 + 4 = 9 Result = 24 - 9 = 15

// Input: 4421

// Output: 21

// Product of digits = 4 4 2 * 1 = 32 Sum of digits = 4 + 4 + 2 + 1 = 11 Result = 32 - 11 = 21


// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let num= parseInt(readLine())
// let number= readLine()
// // console.log(number.length)
// let sum=0;
// let product=1;
// for(i=0;i<number.length;i++){
// 	const num= parseInt(number[i])
// 	// console.log(num)
// 	sum= sum+num
// 	// console.log(sum)
// 	product= product*num
// 	// console.log(product)
// }
// // console.log(sum)
// // console.log(product)
// const difference= product-sum
// console.log(difference)

// or

// let n = 234

// // console.log(n);
// sum = 0
// product = 1

// // console.log(sum);
// // console.log(product);

// while(n > 0) {
//   rem = parseInt(n % 10)
//   // console.log(rem);
//   product = (product * rem)
//   // console.log(product);
//   sum = (sum + rem)
//   // console.log(sum);
//   n = parseInt(n / 10)
//   // console.log(n)
// }
// // console.log(sum, product)
// let difference = product - sum 
// console.log(difference);





// ***********************|||||||*******************************************

// Reduce to 1
// Given a number n. You are required to reduce the given number to 1.
//  To do this you can substract any number greater than equal to 2 from the given number.
//  You can perform this operation any times. You are required to tell the minimum number of 
// operations required to do this or report its not possible.

// Input
// First line contains n. Then next n lines contain a number each.

// Output
// Print the required result number of operations if possible or print -1 if not possible.

// Example
// Input:

// 2

// 1

// 3

// Output:

// -1

// 1

// Explanation
// Testcase1: Since the number is already 1 thus you cant reduce it further.
// TestCase 2: substract 2 from 3 and we get 1 the number of operations used are 1.


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

// let inputTotal = parseInt(readLine());
// for (let i = 0; i < inputTotal; i++) {
//     let number1 = parseInt(readLine());
//     if (number1 > 1) {
//       let count=0
//         let result = number1 - (number1 - 1);
//         console.log(result);
//     } else console.log(-1);
// }





// ***********************|||||||*******************************************


// Arithmetics
// Given two integers a and b, print the following three lines as output.

// The first line contains the sum of the two numbers.
// The second line contains the difference of the two numbers (first - second).
// The third line contains the product of the two numbers.
// Input
// The first line contains the first integer, a. The second line contains the second integer, b.

// Output
// Print the three lines as explained above.

// Example
// Input:

// 3
// 2
// Output:

// 5
// 1
// 6
// Explanation:

// 3+2 => 5
// 3-2 => 1
// 3*2 => 6

// let num1=3
// let num2= 2
// console.log(num1+num2)
// console.log(num1-num2)
// console.log(num1*num2)




// ***********************|||||||*******************************************

// Triangle Angle
// Given two integers a and b denoting the two angles of a triangle (in degrees), 
// find the third angle of the triangle (in degrees).

// Note: The given angles will always be of a valid triangle.

// Input
// First line contains an integer denoting a, the first angle.

// Second line contains an integer denoting b, the seocnd angle.

// Output
// One Integer, denoting the third angle of the triangle.

// Example
// Input:
// 30
// 110
// Output:
// 40

// let a = 30
// let b= 110

// let sum= a+b
// if(sum<180){
// 	const output= 180-sum
// 	console.log(output)
// }




// ***********************|||||||*******************************************

// Given an integer n, return true if it is a power of two. Otherwise, return false.

// An integer n is a power of two, if there exists an integer x such that n == 2x.

 

// Example 1:

// Input: n = 1
// Output: true
// Explanation: 20 = 1

// Example 2:

// Input: n = 16
// Output: true
// Explanation: 24 = 16
// Example 3:

// Input: n = 3
// Output: false
 

// Constraints:

// -231 <= n <= 231 - 1



// function isPowerOfTwo(n)
// {
//         if (n%2 != 0){
//           return false;

//         }
//         else{
//           return true
//         }
// } 
 
// console.log(isPowerOfTwo(5))




// ***********************|||||||*******************************************

// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].
// Example 2:

// Input: nums = [1,1,1,1,1]
// Output: [1,2,3,4,5]
// Explanation: Running sum is obtained as follows: [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1].
// Example 3:

// Input: nums = [3,1,2,10,1]
// Output: [3,4,6,16,17]
 

// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6
// Accepted
// 513,687

// function runningSum(){
//   let nums = [1,2,3,4]
//   let arr=[]
//   let sum=0;
//   for(i=0;i<nums.length;i++){
//     // console.log(nums[i])
//     sum= sum+nums[i]
//     // console.log(sum)
//     arr.push(sum)
//   }
//   return arr
// }
// console.log(runningSum())



// ***********************|||||||*******************************************


// Given an array nums of integers, return how many of them contain an even number of digits.

 

// Example 1:

// Input: nums = [12,345,2,6,7896]
// Output: 2
// Explanation: 
// 12 contains 2 digits (even number of digits). 
// 345 contains 3 digits (odd number of digits). 
// 2 contains 1 digit (odd number of digits). 
// 6 contains 1 digit (odd number of digits). 
// 7896 contains 4 digits (even number of digits). 
// Therefore only 12 and 7896 contain an even number of digits.
// Example 2:

// Input: nums = [555,901,482,1771]
// Output: 1 
// Explanation: 
// Only 1771 contains an even number of digits.
 

// Constraints:

// 1 <= nums.length <= 500
// 1 <= nums[i] <= 105


// function evenNumber(){
//   const arr= [555,901,482,1771]
//   let evenNumbers=0
//   for(i=0;i<arr.length;i++){
//     const temp= arr[i]
//     const num= temp.toString()
//     // console.log(num)
//     // console.log("5555",num)
//     let count=0



//     for(j=0;j<num.length;j++){
//       // console.log(num[j])
//       count=count+1
//     }
//     // console.log("count",count)
//     // console.log(temp)
//     if(count % 2==0){
//       evenNumbers= evenNumbers+1
//       // console.log(evenNumbers)

//     }
//   }
//   return evenNumbers
// }

// console.log(evenNumber())

// orrrrrrrrrrr

// function evenNumber(nums){
//   // const arr= [12,345,2,6,7896]
//   // let evenNumbers=0
//   let count= 0
//   for(i=0;i<nums.length;i++){
//     const temp= arr[i]
//     const num= temp.toString()
//     // console.log(num)
//     // console.log("5555",num)
//     const length= num.length
    
//     if(length%2==0){
// count= count+1
//     }
//   }
//     return count
// }

// console.log(evenNumber())



// ***********************|||||||*******************************************


// 3. Longest Substring Without Repeating Characters
// Medium

// 23305

// 1049

// Add to List

// Share
// Given a string s, find the length of the longest substring without repeating characters.

 

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.


// function longestString(){
//     let s = "abcabcbb"
//     let S= [...new Set(s)].join('');
//     console.log(S)
//     for (i=0;i< S.length; i++){
//         const temp=S[i]
//         let count=0
//         // console.log("11111111111",temp)
//         for(j=0;j<s.length;j++){
//             const temp2= s[j]
//             if(temp==temp2){
//                 count=count+1
//             }
//             // console.log("2222222222222",temp2)
//         }
//         console.log(temp,count)
//         console.log(S.length)
//     }
// }
// longestString()




// ***********************|||||||*******************************************

// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]


// function twoSum(){
//     const nums = [2,7,11,15]
//     const index=[]
//     const target = 6
//     for(i=0;i<nums.length;i++){
//         // console.log(i)
//         const sum= nums[i]+nums[i+1]
//         // console.log(sum)
//         if(sum==target){
//             // console.log(0)
//             index.push(i)
//             index.push(i+1)
//             break
//         }
//     }
//     console.log(index)

// }
// twoSum()






// ***********************|||||||*******************************************

// 2. Add Two Numbers

// Add to List
// You are given two non-empty linked lists representing two non-negative integers.
//  The digits are stored in reverse order, and each of their nodes contains a single digit.
//  Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.

// Input: l1 = [2,4,3], l2 = [5,6,4]
// Output: [7,0,8]
// Explanation: 342 + 465 = 807.
// Example 2:

// Input: l1 = [0], l2 = [0]
// Output: [0]
// Example 3:

// Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
// Output: [8,9,9,9,0,0,0,1]


// function addTwoNumbers(){
//     const l1 = [2,4,3]
//     const l2 = [5,6,4]

//     const resultant=[]
//     var x=0
//     var y=0
//     const rem=[]

//     for(i=0;i< l1.length;i++){
//         let sum = l1[i]+ l2[i]
//         const temp= sum.toString()
//         console.log(temp.length)
//         if(temp.length>1){
//             const data=temp.split('')
//             var x= parseInt( data[0])
//             let y= parseInt( data[1])
//             console.log(x,y)
//             resultant.push(y)
//             sum=sum+x
//         }
//         else{
//         resultant.push(sum+x)
//         }
//     }
//     console.log(resultant)
// }
// addTwoNumbers()



// ***********************|||||||*******************************************

// function CountString(){
//     let arr=["a","b","a","d","f","b","a"]
//     // console.log(arr)
//     count={}
//     for(i=0;i<arr.length;i++){
//         count[arr[i]]=count[arr[i]]? count[arr[i]]+1 : 1

//     }
//     // console.log(count)
//     for(i in count){
//         // console.log(i)
//         if(count[i]===3){
//             console.log(i)
//         }
//     }
// }
// CountString()



// ***********************|||||||*******************************************



// function UseReduce(){

//     let arr1=[[1,2,3],[8,4,5],[7,9,6]]
//     let newArr=arr1.reduce((a,b)=>a+b)
// console.log(newArr)
// }
// UseReduce()



// ***********************|||||||*******************************************

// const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
// let newFxn= words.filter((elem)=> elem.length>6)
// console.log(newFxn)


// ***********************|||||||*******************************************

// const array1 = [5, 10, 8, 130, 44];
// let number= array1.find((elem)=> elem>10)
// let num= array1.findIndex((elem)=> elem>12)
// console.log(number)
// console.log(num)

// const arr1 = [[1,2,3],[8,4,5],[7,9,6]];
// console.log(arr1.flat());

// const arr2 = [0, 1, 2, [[[3, 4]]]];
// console.log(arr2.flat(3));

// let arr= [ 0, 1, 2, 3, 4 ]
// // let newArr=arr.map((elem)=> elem*elem)
// let arrnew= arr.forEach((e)=> console.log(e))
// console.log(arrnew)

// const elements = ['Fire', 'Air', 'Water'];
// console.log(elements.join())

// let arr1=[[1,2,3],[8,4,5],[7,9,6]]
// console.log(arr1.join())


// ***********************|||||||*******************************************

// Alternate 101
// You have been given an array of size N. You need to find the sum of alternate values in the given array, starting from the first element.

// Input
// One integer, denoting N, the size of the array. The next line contains N space seperated integers, denoting the elements of the given array.

// Output
// One Integer, denoting the required sum.

// Example
// Input1:

// 7
// 1 4 6 8 9 0 -34
// Output1:

// -18
// Explanation:

// 1 + 6 + 9 - 34 = -18

// let iteration=7;
// let givenArray= [1 4 6 8 9 0 -34]
// let result=0
// // console.log(givenArray)
// for(i=0;i<iteration;i=i+2){
// 		// console.log(givenArray[i])
// 		result=result+givenArray[i]
	
	
// }
// console.log(result)



// ***********************|||||||*******************************************

// 26. Remove Duplicates from Sorted Array

// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique 
// element appears only once. The relative order of the elements should be kept the same.

// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed 
// in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k 
// elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.

// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:

// The judge will test your solution with the following code:

// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length

// int k = removeDuplicates(nums); // Calls your implementation

// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 

// Example 1:

// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).
 

// ***********************|||||||*******************************************


// Constraints:

// 1 <= nums.length <= 3 * 104
// -100 <= nums[i] <= 100
// nums is sorted in non-decreasing order.


// ***********************|||||||*******************************************

// let arr=[1,4,9,16,25]
// let output= arr.map((ele)=> Math.sqrt(ele)).filter((elem)=> elem%2==0)
// console.log(output)



// ***********************|||||||*******************************************



// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

 

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]
 

// Constraints:

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.


// // var twoSum = function(nums, target) {
//     function twoSum(){
//     const nums = [3,2,4]
//     const index=[]
//     const target = 6
//     for(i=0;i<nums.length;i++){
//         // console.log(nums[i])
//         for(j=i+1;j<nums.length;j++){
//             if(nums[j]==target-nums[i]){
//                 // console.log(0)
//                 index.push(i)
//                 index.push(j)
//                 break
//             }
//         }
//         // const sum= nums[i]+nums[i+1]
//         // console.log(sum)
        
//     }
//     console.log(index)

// };
// twoSum()


// ***********************|||||||*******************************************


// Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. 
// This matrix has the following properties:

// Integers in each row are sorted in ascending from left to right.
// Integers in each column are sorted in ascending from top to bottom.
 

// Example 1:


// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
// Output: true
// Example 2:


// Input: matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
// Output: false


// function searchMatrix(){

//     let matrix=[[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]] 
//     let target=20
//     let isBoolean=false
//     for(i=0; i<matrix.length;i++){
//         for(j=0;j<matrix[i].length;j++){
//             // console.log(matrix[i][j])
//             if(matrix[i][j]==target){
//                 isBoolean=true
//                 // return true
//             }
           
//         }
//     }
//     if(isBoolean){
//         return true
//     }
//     else{
//         return false
//     }
// }
// console.log(searchMatrix())



// ***********************|||||||*******************************************


// 1773. Count Items Matching a Rule
// You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, 
// and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.

// The ith item is said to match the rule if one of the following is true:

// ruleKey == "type" and ruleValue == typei.
// ruleKey == "color" and ruleValue == colori.
// ruleKey == "name" and ruleValue == namei.
// Return the number of items that match the given rule.

 

// Example 1:

// Input: items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]], 
// ruleKey = "color", ruleValue = "silver"
// Output: 1
// Explanation: There is only one item matching the given rule, which is ["computer","silver","lenovo"].
// Example 2:

// Input: items = [["phone","blue","pixel"],["computer","silver","phone"],["phone","gold","iphone"]], ruleKey = "type", ruleValue = "phone"
// Output: 2
// Explanation: There are only two items matching the given rule, which are ["phone","blue","pixel"] and ["phone","gold","iphone"]. 
// Note that the item ["computer","silver","phone"] does not match.


// function countMatches(){
//    let  items = [["phone","blue","pixel"],["computer","silver","lenovo"],["phone","gold","iphone"]],
//    ruleKey = "type", ruleValue = "phone"
//    let count=0
//      for(i=0;i<items.length;i++){
//          for(j=0;j<items[i].length;j++){
//             //  console.log("hhhh",items[i])
//             //  console.log(items[i][j])
//              if(ruleKey==items[i][j]){
//                 //  console.log(i)
//                 count=count+1
//              }
//              else if(ruleValue==items[i][j]){
//                  count=count+1
//              }
//          }
//      }
//      console.log(count)
// }
// countMatches()


// ***********************|||||||*******************************************


// 852. Peak Index in a Mountain Array
// Add to List

// Share
// Let's call an array arr a mountain if the following properties hold:

// arr.length >= 3
// There exists some i with 0 < i < arr.length - 1 such that:
// arr[0] < arr[1] < ... arr[i-1] < arr[i]
// arr[i] > arr[i+1] > ... > arr[arr.length - 1]
// Given an integer array arr that is guaranteed to be a mountain, return any i such that arr[0] < arr[1] < ... arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

 

// Example 1:

// Input: arr = [0,1,0]
// Output: 1
// Example 2:

// Input: arr = [0,2,1,0]
// Output: 1
// Example 3:

// Input: arr = [0,10,5,2]
// Output: 1

// function peakIndexInMountainArray(){
//     let arr = [0,1,0]
//     let left= 1
//     let right= arr.length-1
//     while(left<right){
//         const mid= left +right;
//         console.log(mid)
//         if(arr[mid]> arr[mid+1]){
//             right = mid;
//         }
//         else{
//             left = mid+1;
//         }
//     }
//     return left;
// }
// console.log(peakIndexInMountainArray())

// var peakIndexInMountainArray = function () {
//     // let arr = [0,1,0]
    // let left = 1;
    // let right = arr.length - 2;
    // while (left < right) {
    //     const mid = (left + right) >> 1;
    //     if (arr[mid] > arr[mid + 1]) {
    //         right = mid;
    //     } else {
    //         left = mid + 1;
    //     }
    // }
    // return left;
// };
// console.log(peakIndexInMountainArray())


// ***********************|||||||*******************************************


// Pascal's Triangle II

// Add to List

// Share
// Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:

// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]
 

// Constraints:

// 0 <= rowIndex <= 33



// var getRow = function(rowIndex) {
//     if(rowIndex===1){
//         return [1]
//     }
//     else if(rowIndex===2){
//         return [1,1]
//     }
//     let previousRow=[1,1]
//    let currentRow=[]
//     for(let i=3;i<=rowIndex;i++){
//         currentRow=[1]
//         for(let j=1;j<=i-2;j++){
//             currentRow[j]=previousRow[j] +previousRow[j-1]
//         }
//         currentRow.push(1)
//         previousRow=currentRow

//     }
//     return currentRow
    
// };
// console.log(getRow(5))


// ***********************|||||||*******************************************


// 66. Plus One

// Add to List

// Share
// You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. 
// The digits are ordered from most significant to least significant in left-to-right order. The large integer does not 
// contain any leading 0's.

// Increment the large integer by one and return the resulting array of digits.

 

// Example 1:

// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].



// var plusOne = function(digits) {
//     console.log(digits)
//     let str=""
//     let newArr=[]
//     for(i=0;i<digits.length;i++){
//         // console.log(JSON.stringify(digits[i]))
//         str=str+digits[i]    // 99
//     }
//     console.log(parseInt(str))
//     let outRes=parseInt(str)+1  //100
//     let out= JSON.stringify(outRes)
//     // console.log(typeof(outRes))
//     for(i=0;i<out.length;i++){
//         // console.log(out[i])
//         newArr.push(parseInt(out[i]))

//     }
//     // console.log(newArr)
//     return newArr 
// };
// console.log(plusOne(
//     [9,9]))



// -------------------orrrrrrrrrrrr---------------------------------------

// Palindrome Number

// Add to List

// Share
// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.

// For example, 121 is a palindrome while 123 is not.
 

// Example 1:

// Input: x = 121
// Output: true
// Explanation: 121 reads as 121 from left to right and from right to left.
// Example 2:

// Input: x = -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:

// Input: x = 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.

// var isPalindrome = function(x) {
//     let temp=x
//     let result=0
//     if(x<0){
//         x=x*(-1)
//     }
//     while(x!=0){
//         let lastDigit=x%10
//         result=result*10+lastDigit
//         x=parseInt(x/10)
//     }
//     // console.log(typeof(result))
//     // console.log(typeof(x))
//     // console.log(result)
//     if(temp===parseInt(result)){
//         return true
//     }
//     else{
//         return false
//     }
// };
// console.log(isPalindrome(121))


// ***********************|||||||*******************************************

// var reverse = function(x) {
//     let result=0
//     while(x!=0){
//         let lastDigit=x%10
//         result=result*10+lastDigit
//         x=parseInt(x/10)
//     }
//     return result
// };
// console.log(reverse(123))

// ***********************|||||||*******************************************

// Roman to Integer

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII,
//  which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. 
// Instead, the number four is written as IV. Because the one is before the five we subtract it making four. 
// The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9. 
// X can be placed before L (50) and C (100) to make 40 and 90. 
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

 

// Example 1:

// Input: s = "III"
// Output: 3
// Explanation: III = 3.
// Example 2:

// Input: s = "LVIII"
// Output: 58
// Explanation: L = 50, V= 5, III = 3.
// Example 3:

// Input: s = "MCMXCIV"
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].



// var romanToInt = function(s) {
//    const data={I:1,V:5,X:10,L:50,C:100,D:500,M:1000}
//    let result=0;
//    s.split('').forEach((num,i) => {
//     //    console.log(num,i)
//     // console.log(data[num],data[s[i+1]])
//        if(data[num] < data[s[i+1]]){
//            result-=data[num]
//        }
//        else{
//            result+=data[num]
//        }
       
//    });
//    return result
// };
// console.log(romanToInt("LVIII"))



// ***********************|||||||*******************************************

// function ImageIconMatch(){
//     let mainArr=[7,27,31,8,9,10,25,8,9,11]
//     let iconArr=[8,9]
//     let m= mainArr.length
//     let n= iconArr.length
//     let count=0
//     for(i=0;i<m;i++){
//         if(mainArr[i] !=  iconArr[0]){  
//             continue;
//         }
//         else{
//             if(i+n+1<=m){  
//                 let k=i;
//                 for(let j=0;j<iconArr.length;j++){
//                     if(mainArr[k] != iconArr[j]){
//                         break

//                     }
//                     k++;
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



// Third Maximum Number

// Given an integer array nums, return the third distinct maximum number in this array. If the third
// maximum does not exist, return the maximum number.


// var thirdMax = function(nums) {
    
//     for(i=0;i<nums.length;i++){
//        for(j=i+1;j<nums.length;j++){
//         if(nums[i]>=nums[j]){
//             let temp = nums[i]
//             nums[i]=nums[j]
//             nums[j]=temp
//         }
//        }
//     }
//     // console.log(nums)  //4-2
//     let currentelem=nums[0]
//     let newArr=[]
//     for(i=1;i<=nums.length;i++){
//         if(currentelem!=nums[i]){
//             newArr.push(currentelem)
//             currentelem=nums[i]
//         }

//     }
//     console.log(newArr.length)
//     if(newArr.length<=2){
//         return newArr[newArr.length-1]
//     }
//     return newArr[newArr.length-3]
// };
// console.log(thirdMax([3,2,3,1,2,4,5,5,6]))

 


// ***********************|||||||*******************************************


// Longest Common Prefix

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

// var longestCommonPrefix = function(strs) {
//     if(strs.length===0){
//         return ""
//     }
//   for(i=0;i<strs[0].length;i++){
//       for(j=1;j<strs.length;j++){
//           if(strs[0][i]!= strs[j][i]){
//               return strs[0].slice(0,i)
//           }
//       }
//   }
//   return strs[0]
// };
// console.log(longestCommonPrefix(["flower","flow","flight"]))



// find the output

// (function() {
//     console.log('this is the start');
//     setTimeout(function cb() {
//       console.log('Callback 1: this is a msg from call back');
//     });
//     console.log('this is just a message');
//     setTimeout(function cb1() {
//       console.log('Callback 2: this is a msg from call back');
//     }, 0);
//     console.log('this is the end');
//   })();



// program to separate array in unique and duplicate

// output:
// Duplicate = [“sample”]
// Unique = [“collection”, “dual”, “map”, “value”]

// let Array1 = ['collection','sample','dual','map']
// let Array2 = ['sample','value']

// let Duplicate=[]
// let Unique=[]
// let newArr= Array1.concat(Array2)
// // console.log(newArr)
// let count={}
// for(i=0;i<newArr.length;i++){
//     count[newArr[i]]= count[newArr[i]] ? count[newArr[i]]+1 : 1
    
// }

// // console.log(count)
// for(i in count){
//     // console.log(count[i])
//     if(count[i]>1){
//         Duplicate.push(i)
//     }
//     else{
//         Unique.push(i)
//     }
// }
// console.log("dulpi",Duplicate)
// console.log("unique",Unique)


// Given two arrays combine arrays and find max value from that array

// let arr1=[1,5,7,8,5]
// let arr2=[5,6,7,9,8]
// let newArr= arr1.concat(arr2)
// // console.log(newArr)
// // let max=Math.max(...newArr)
// // console.log(max)
// let max=newArr[0]
// for(i=0;i<newArr.length;i++){
//     if(newArr[i]>max){
//         max=newArr[i]
//     }
// }
// console.log(max)


// const inputArray = [
//     "b",
//     "a",
//     "k",
//     "e",
//     "",
//     "c",
//     "a",
//     "k",
//     "e",
//     "",
//     "e",
//     "a",
//     "t"
//   ];

// expected o/p:
// eat
// cake
// bake

// const inputArray = [
//     "b",
//     "a",
//     "k",
//     "e",
//     "",
//     "c",
//     "a",
//     "k",
//     "e",
//     "",
//     "e",
//     "a",
//     "t"
//   ];
//   let string=""
// for(i=0;i<inputArray.length;i++){
//     if(inputArray[i]!=""){
//     string=string+inputArray[i]
//     }
//     else{
//         string=string+" "
//     }
// }
// console.log(string)
// let newArr=string.split(" ")
// console.log(newArr)
// let outArr=[]
// for(i=newArr.length-1;i>=0;i--){
//     outArr.push(newArr[i])
// }
// console.log(outArr)


// parenthesis validation

// var isValid = function(s) {
//     let brackets={
//         '(':')',
//         '[':']',
//         '{':'}'
//     }
//     let arr=[]
//     for(i of s){
//         if(brackets[i]){
//             arr.push(brackets[i])
//         }
//         else{
//             if(arr.pop()!==i){
//                 return false
//             }
//         }
//     }
//     if(arr.length!==0){
//         return false
//     }
//     else{
//         return true
//     }
// };
// console.log(isValid("()]{}"))


// sum of amounts

// const txns = [
//     [
//         {id: 1, name: 'Transaction 1', amount: 5 },
//         {id: 2, name: 'Transaction 2', amount: 15 }
//     ],
//     [
//         { id: 3, name: 'Transaction 3', amount: 10 },
//     ],
//     [
//         { id: 4, name: 'Transaction 4', amount: 10 },
//         { id: 5, name: 'Transaction 5', amount: 5 }
//     ],
//     [],
// ]

// let sum=0
// for(i=0;i<txns.length;i++){
//     // console.log(txns[i])
//     for(j=0;j<txns[i].length;j++){
//         // console.log(txns[i][j].amount)
//         sum=sum+txns[i][j].amount
//     }
// }
// console.log(sum)


// add list

// let arr1=[9,9,9]
// let arr2=[1]

// let res="",carry=0
// let i=0,j=0

// while (i<arr1.length || j< arr2.length) {
//     let sum=0
//     if(i<arr1.length){
//         sum=sum+arr1[i]
//     }
//     if(j<arr2.length){
//         sum=sum+arr2[j]
//     }
//     sum=sum+carry
//     res=res+sum%10;
//     carry=parseInt(sum/10)
//     i++
//     j++
    
// }
// if(carry>0){
//     res=res+carry
// }
// console.log(res)


// steep array

// n=5
// arr=[1,2,3,5,4]
// let max=arr[n-1]
// let newArr=[...arr]

// for(i=n-1;i>=0;i--){
//     if(newArr[i]>max){
//         max=newArr[i]
//     }
//     else{
//         newArri[i]=max
//     }
// }
// // console.log(newArr)
// let sum=0;
// for(i=0;i<n;i++){
//     let temp=newArr[i]-arr[i]
//     sum=sum+temp
// }
// console.log(sum)



// nobel integer

// let n=4
// let arr=[3,2,1,3]
// let isBoolean=false

// for(i=0;i<n;i++){
//     let count=0
//     for(j=0;j<n;j++){
//         if(arr[i]<arr[j]){
//             count++
//         }
//     }
//     if(arr[i]==count){
//         isBoolean= true
//     }
// }
// if(isBoolean){
//     console.log(1)
// }
// else{
//     console.log(-1)
// }


// monotonic array

// let n=5
// let arr=[3,12,34,34,56]

// if(n==0 || n==1){
//     console.log(1)
// }

// else{
//     let inc=false
//     let dec=false
//     for(i=0;i<n-1;i++){
//         if(arr[i]>=arr[i+1]){
//             dec=true
//         }
//         else{
//             dec=false
//             break
//         }
//     }

//     for(i=0;i<n-1;i++){
//         if(arr[i]<=arr[i+1]){
//             inc=true
//         }
//         else{
//             inc=false
//             break
//         }
//     }
//     if(!inc && !dec){
//         console.log(0)
//     }
//     else{
//         console.log(1)
//     }
// }


// peak element

// function peakElem(n, arr){
//     if(n===1){
//         return 1;
//     }
//     for(i=0;i<n;i++){
//         if(i>0 && i<n-1){
//             if(arr[i]>arr[i-1] && arr[i]> arr[i+1]){
//                 return i+1
//             }
//         }
//         if(i==0){
//             if(arr[i]> arr[i+1]){
//                 return i+1
//             }
//         }
//         if(i==n-1){
//             if(arr[i]>arr[i-1]){
//                 return i+1
//             }
//         }
//     }

// return -1

// }
// console.log(peakElem(5,[1,3,6,4,9]))


// sorting sting

function stringsorting(str){
    str=str.split("")
    let outstr=""
    for(i=1;i<str.length;i++){
        let j=i-1;
        let key = str[i]
        while(j>=0 && key<str[j]){
            str[j+1]=str[j];
            j--;
        }
        str[j+1]=key
    }
    for(i=0;i<str.length;i++){
        outstr+=str[i]
    }
    return outstr

}
console.log(stringsorting("adcb"))