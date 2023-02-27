// Power of Two

// var isPowerOfTwo = function(n) {
//   if(n==0){
//       return false
//   }
//   while(n !=1){
//       if(n%2 !=0){
//           return false

//       }
//       n=n/2
//   }
//   return true
// };
// console.log(isPowerOfTwo(3))

// ***********************|||||||*******************************************

// var countPrimes = function(n) {
//     let outCount=0
//     for(i=1;i<n;i++){
//         let count=0
//         for(j=1;j<n;j++){
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
// };
// console.log(countPrimes(2))

// ***********************|||||||*******************************************

// Remove Duplicates from Sorted Array

// var removeDuplicates = function(nums) {
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
//     let length= newArr.length
//     nums=newArr
//     return {length, nums:nums}
// };
// console.log(removeDuplicates(
//     [1,1,2]))

// ***********************|||||||*******************************************

// Merge Two Sorted Lists

// var mergeTwoLists = function(list1, list2) {
//     let newArr=list1.concat(list2)
//     // console.log(newArr)
// // let outArr=[]
//     for(i=0;i<newArr.length;i++){
//         for(j=i+1;j<newArr.length;j++){
//             if(newArr[i]>newArr[j]){
//                 let temp=newArr[i]
//                 newArr[i]=newArr[j]
//                 newArr[j]=temp

//             }
//         }
//     }
//     return newArr

// };
// console.log(mergeTwoLists([1,2,4], [1,3,4]))

// ***********************|||||||*******************************************

// Reverse Words in a String III

// var reverseWords = function(s) {
//     // console.log(s.split(' '))
//     let arr= s.split(' ')
//     // console.log(arr)
//     let result=[]
//     // let temp=""
//     for(i=0;i<=arr.length-1;i++){
//        console.log( arr[i])
//        let temp=" "
//        for(j=arr[i].length-1;j>=0;j--){
//            console.log(arr[i][j])
//            temp=temp+arr[i][j]
// console.log(temp)
//        }
//        result.push(temp)
//     }
//     console.log(result)
//     let out=''
//     for(i=0;i<result.length;i++){
//         out= out+result[i]
//     }
//     console.log(out)
//     // return temp
// };
// console.log(reverseWords("Let's take LeetCode contest"))

// ***********************|||||||*******************************************

// Count Good Triplets

// Given an array of integers arr, and three integers a, b and c. You need to find the number of good triplets.
// A triplet (arr[i], arr[j], arr[k]) is good if the following conditions are true:
// 0 <= i < j < k < arr.length
// |arr[i] - arr[j]| <= a
// |arr[j] - arr[k]| <= b
// |arr[i] - arr[k]| <= c
// Where |x| denotes the absolute value of x.

// Return the number of good triplets.

// var countGoodTriplets = function(arr, a, b, c) {
//     let count=0
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             for(k=j+1;k<arr.length;k++){
//                 if(Math.abs(arr[i] - arr[j]) <= a && Math.abs(arr[j] - arr[k]) <= b && Math.abs(arr[i] - arr[k]) <= c){
//                     count++
//                 }

//             }
//         }

//     }
//     // console.log(count)
//   return count
// };
// console.log(countGoodTriplets([3,0,1,1,9,7],7,2, 3))

// ***********************|||||||*******************************************

// Implement strStr()

// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack,
// or -1 if needle is not part of haystack.

// Clarification:

// What should we return when needle is an empty string? This is a great question to ask during an interview.

// For the purpose of this problem, we will return 0 when needle is an empty string. This is consistent to
// C's strstr() and Java's indexOf()

// var strStr = function(haystack, needle) {
//     // console.log(haystack.length)
//     // console.log(needle)
//     if(needle.length==0){
//         return 0
//     }
//     if(needle=== haystack){
//         return 0
//     }
//     for(i=0;i<haystack.length;i++){
//         if(needle=== haystack.substring(i,i+needle.length))
//         {
//             return i
//         }

//     }
//     return -1
// };

// console.log(strStr("hello","ll"))

// --------------orr-------------

// var strStr = function(haystack, needle) {
//     // console.log(haystack.length)
//     // console.log(needle)
//     if(needle.length==0){
//         return 0
//     }
//     if(needle=== haystack){
//         return 0
//     }
//     for(i=0;i<haystack.length;i++){
//         let j=0
//         for(;j< needle.length;j++){
//             if(haystack[i+j]== needle[j]){
//                 continue
//             }
//             else{
//                 break
//             }
//         }
//         if(j== needle.length){
//             return i
//         }
//     }
//     return -1
// };

// console.log(strStr("aaaaa","bba"))

// ***********************|||||||*******************************************

//  Maximum Subarray

// Given an integer array nums, find the contiguous subarray (containing at least one number)
// which has the largest sum and return its sum.

// A subarray is a contiguous part of an array.

// var maxSubArray = function(nums) {
//     let maxSum= nums[0]
//     let currentSumm=nums[0]
//     for(i=1;i<nums.length;i++){
//        if(currentSumm+ nums[i]>nums[i]){
//            currentSumm=currentSumm+nums[i]
//        }
//        else{
//            currentSumm= nums[i]
//        }
//        maxSum= Math.max(maxSum,currentSumm)
//     }
//     return maxSum
// };
// console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

// ***********************|||||||*******************************************

// var isSubsequence = function(s, t) {
//     let j=0
//     for(i=0;i<t.length;i++){
//         if(t[i]===s[j]){
//             j++
//         }
//     }
//     if(s.length===j){
//         return true
//     }
//     else
//         {
//             return false
//         }
// };

// ***********************|||||||*******************************************

// Remove Palindromic Subsequences

// var removePalindromeSub = function(s) {
//     let rev=""
//     for(i=s.length-1;i>=0;i--){
//         rev=rev+s[i]
//     }
//     if(s==rev){
//         return 1
//     }
//     else{
//         return 2
//     }
// };
// console.log(removePalindromeSub("ababa"))

// Pascal's Triangle

// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown

// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// var generate = function(numRows) {
//     let arr=new Array(numRows)
//     if(numRows==1){
//         arr.push(1)
//         return arr
//     }
//     // if(numRows==2){
//     //     arr=[1,1]
//     //     return arr
//     // }
//     let previousRow=[1,1]
//     let currentRow=[]
//     for(i=2;i<=numRows;i++){
//         currentRow=[1]
//         for(j=1;j<=i-2;j++){
//             currentRow[j]=previousRow[j]+previousRow[j-1]

//         }
//         currentRow.push(1)
//         previousRow=currentRow
//             arr[0]=[1]
//             // arr[1]=[1,1]
//             arr[i-1]=currentRow.map(x=>+x)

//     }

//     return arr
// };
// console.log(generate(1))

// ***********************|||||||*******************************************

// Valid Palindrome

// var isPalindrome = function(s) {
//     rev =""
//     digit=""
//     for(i=0;i<s.length;i++){
//         let temp= s.split(' , ')
//         console.log(temp)
//     }
//     console.log(digit)
//     // for(s=s.length-1;i>=0;i++){
//     //     rev
//     // }
// };
// console.log(isPalindrome("A man, a plan, a canal: Panama"))

// ***********************|||||||*******************************************

// fold array

// function foldArray(){
//     let arr=[-1,4,2,3,1]
//     let fold=1
//     for(i=0;i<fold;i++){
//         let newArr=[]
//         let left=arr.length-1
//         let right=0
//         while(left>=right){
//             if(left===right){
//                 newArr.push(arr[left])
//             }
//             else{
//                 let add=arr[left]+arr[right]
//                 newArr.push(add)
//             }
//             left--
//             right++

//         }
//         arr=newArr
//     }
//     console.log(arr.length)
//     console.log(arr)
// }
// foldArray()

// ***********************|||||||*******************************************

// add list

// (from front)

// function AddList(){
//     let arr1=[2,5,2]
//     let arr2=[4,2]
//     let i=0,j=0
//     let res='';carry=0
//     while(i<arr1.length || j<arr2.length){
//         let sum=0
//         if(i<arr1.length){
//             sum=sum+arr1[i]
//         }
//         if(j<arr2.length){
//             sum=sum+arr2[j]
//         }
//         sum=sum+carry;
//         res=res+sum%10
//         carry=parseInt(sum/10);
//         i++
//         j++
//     }
//     if(carry>0){
//         res=res+carry
//     }
//     console.log(res)
// }
// AddList()

// ***********************|||||||*******************************************

// image icon match

// function imageIconMatch(){
//     let mainArr=[7,27,31,8,9,10,25,8,9,11]
//     let iconArr=[8,9]
//     let count=0

//     let m=mainArr.length
//     let n=iconArr.length

//     for(i=0;i<m;i++){
//         if(mainArr[i] != iconArr[0]){
//             continue
//         }
//         else{
//             if(n+i<= m){
//                 k=i
//                 for(j=0;j<n;j++){
//                     if(iconArr[j] != mainArr[k]){
//                         break
//                     }
//                     k++
//                     if(j===n-1){
//                         count++
//                     }
//                 }
//             }
//         }
//     }
//     console.log(count)

// }
// imageIconMatch()

// ***********************|||||||*******************************************

// function resturantOrder(){
//     let seats=[1,2,3,4,3]
//     let n= seats.length
//     let price=[100,200,300,500,200]
//     let newArr=seats.concat(price)
//     let count={}
//     for(i=0;i<n;i++){
//         count[newArr[i]]=count[newArr[i]] ? count[newArr[i]]+newArr[i+n] : newArr[i+n]
//     }
// console.log(count)
// let max= count[newArr[0]]
// for(i in count){
//     // console.log(count[i])
//     if(count[i]>max){
//         max= count[i]

//     }
// }
// console.log(max)
// for(i in count){
//     if(count[i]===max){
//         console.log(i)
//     }
// }
// }

// resturantOrder()

// ***********************|||||||*******************************************

// good pairs

// function goodPairs(){
//     let arr=[1,2,3,1,1,3]
//     let count=0
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]==arr[j]){
//                 count=count+1
//             }
//         }
//     }
//     console.log(count)
// }
// goodPairs()

// ***********************|||||||*******************************************

// nobel integer

// function nobelInteger(){
//     let arr=[3,2,1,3]
//     let isBoolean=false
//     for(i=0;i<arr.length;i++){
//         let count=0
//         for(j=0;j<arr.length;j++){
//             if(arr[i]<arr[j]){
//                 count++
//             }
//         }
//         if(arr[i]==count){
//             isBoolean=true
//         }
//     }
//     if(isBoolean){
//         return 1
//     }
//     else{
//         return -1
//     }
// }
// console.log(nobelInteger())

// ***********************|||||||*******************************************

// Valid Parentheses

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
//     return arr.length
// };
// console.log(isValid("()[]{}"))

//  Add Two Numbers

// let l1 = [2,4,3]
// let l2 = [5,6,4]
// var addTwoNumbers = function(l1, l2) {
//     // console.log(l1)
//     let str=""
//     let str2=""
//     for(i=l1.length-1;i>=0;i--){
//         str+=l1[i]

//     }
//     for(i=l2.length-1;i>=0;i--){
//         str2+=l2[i]

//     }
//     // console.log(str)
//     // console.log(str2)
//     // console.log(parseInt(str)+parseInt(str2))
//     let result=parseInt(str)+parseInt(str2)
//     return result

// };
// console.log(addTwoNumbers(l1,l2))

// Median of Two Sorted Arrays

// var findMedianSortedArrays = function(nums1, nums2) {
//     // console.log(nums2,nums1)
//     let newArr=nums1.concat(nums2)
//     // console.log(newArr)
//     let sortedArr=newArr.sort((a,b)=> a-b)
//     // console.log(sortedArr)
//     let length=sortedArr.length
//     let n=parseInt(sortedArr.length/2)
//     if(length%2!==0){

//         return sortedArr[n]
//     }
//     else{
//         let result=(sortedArr[n]+sortedArr[n-1])/2
//         return result
//     }

// };
// console.log(findMedianSortedArrays([1,2],[3,4]))

// Valid Parentheses

// var isValid = function(s) {
//     let brackets={
//     '(':')',
//     '[':']',
//     '{':'}'
// }
// let arr=[]
// for(i of s){
//     if(brackets[i]){
//         arr.push(brackets[i])
//     }
//     else{
//         if(arr.pop()!==i){
//             return false
//         }
//     }
// }
// return true
// };

// Remove Duplicates from Sorted Array

// var removeDuplicates = function(nums) {
//     const length = nums.length;

//     if( length <= 1 ){
//         return length;
//     }

//     let i = 0;

//     for(let j = 1; j < length; j++){
//         if( nums[i] != nums[j] ){
//             i++;
//             nums[i] = nums[j];
//         }
//     }

//     return i + 1;
// };
// console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]))

// color sort  orrr Sort Colors

// var sortColors = function(nums) {
//     let left=0;
//     let right= nums.length-1
//     let temp;
//     for(i=0;i<right;){
//         if(nums[i]==0){
//             temp=nums[i]
//             nums[i]=nums[left]
//             nums[left]=temp
//             i++
//             left++

//         }
//         else if(nums[i]==2){
//             temp=nums[i]
//             nums[i]=nums[right]
//             nums[right]=temp
//             right--

//         }
//         else{
//             i++
//         }
//     }
//     return nums

// };
// console.log(sortColors([2,0,2,1,1,0]))

// var sortColors = function(nums) {
//   let first=0,second=0,third=0
//   for(i=0;i<nums.length;i++){
//       if(nums[i]==0){
//           first++
//       }
//       else if(nums[i]==1){
//         second++
//     }
//     else{
//         third++
//     }
//   }
//   for(i=0;i<first;i++){
//       nums[i]=0;
//   }
//   for(i=first;i<first+second;i++){
//     nums[i]=1;
// }
// for(i=first+second;i<first+second+third;i++){
//     nums[i]=2;
// }
// return nums
// };
// console.log(sortColors([2,0,2,1,1,0]))

// -------------------*******-----------------------------

// var sortColors = function(nums) {
//   let left=0,mid=0,right=nums.length-1
//   while (mid<=right) {
//       let temp=nums[mid]
//       if(temp==0){
//         //   swap(nums[left],nums[mid])
//         let x = nums[left];
//         nums[left] = nums[mid];
//         nums[mid] = x;
//           left++;
//           mid++;
//       }
//       else if(temp==1){
//           mid++
//       }
//       else{
//         //   swap(nums[right],nums[mid])
//         let y = nums[right];
//         nums[right] = nums[mid];
//         nums[mid] = y;
//           right--;
//       }

//   }
//   return nums
//   };
//   console.log(sortColors([2,0,2,1,1,0]))

// sorting sequence

// let arr=[5,-4,-1,0,3,10]
// function sortingSequence(arr){
// // console.log(arr)
// // let neBwArr=arr.map((res)=>res*res)
// // console.log(newArr)
// let isBoolean=false
// while (!isBoolean) {
//     isBoolean=true
//     for (var i = 1; i < arr.length; i += 1) {
//         if (arr[i - 1]**2 > arr[i]**2) {
//             isBoolean=false
//           var tmp = arr[i - 1];
//           arr[i - 1] = arr[i];
//           arr[i] = tmp;
//         }
//       }
// }
// return arr;
// }
// console.log(sortingSequence([5,-4,-1,0,3,10]))

// Squares of a Sorted Array

// space complexity=o(n)
// t.c= o(n)
// var sortedSquares = function(nums) {
//     let newArr= new Array(nums.length).fill(0)
//     // console.log(nums)
//     // console.log(newArr)
//     let left=0;
//     let right=nums.length-1;
//     let index=nums.length-1
//     while (left<=right) {
//         if(nums[left]**2 < nums[right]**2){
//             newArr[index]=nums[right]**2
//             right--;
//             index--;

//         }
//         else{
//             newArr[index]=nums[left]**2;
//             left++;
//             index--
//         }

//     }
//     return newArr
// };
// console.log(sortedSquares([-4,-1,0,3,10]))

// Sort an Array

// var sortArray = function(nums) {

// };
// console.log(sortArray([5,2,3,1]))

//  alternate soritng

// input : [25, 37,0,-53,21,-7,89]
// output: [89,-53,25,-7,21,37,0]

// ecplanation
// even indices-: sorting in decending order
// odd indices-: sorting in asending order

// function alternatesort(arr){
//     // console.log(arr)
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]>arr[j]){
//                let temp=arr[j]
//                arr[j]=arr[i]
//                arr[i]=temp
//             }
//         }
//     }
// return arr
// }
// console.log(alternatesort([25, 37,0,-53,21,-7,89]))

// merge sort

// function mergeSortedArray(arr1,arr2){
//     let n=arr1.length
//     let m=arr2.length
//     let i=0;
//     let j=0;
//     let arr=[]
//     while (i<n || j<m) {
//         if(i<n  && j<m){
//             // both i and j are vaild poistions
//             if(arr1[i]<=arr2[j]){
//                 arr.push(arr1[i])
//                 i++
//             }
//             else{
//                 arr.push(arr2[j])
//                 j++
//             }
//         }
//         else if(i<n){
//             // only i is vaild position
//             arr.push(arr1[i])
//             i++
//         }else{
//             // only j is valid position
//             arr.push(arr2[j]);
//             j++;
//         }

//     }
//     return arr
// }

// function mergeSort(arr){
//     let n=arr.length

//     // base case
//     if(n==1){
//         return arr
//     }

//     // we split an array into 2 smaller part

//     let arr1=[]
//     let arr2=[]

//     for(i=0;i<n;i++){
//         if(i<Math.floor(n/2)){
//             arr1.push(arr[i])
//         }
//         else{
//             arr2.push(arr[i])
//         }

//     }
//   // then we recursively sort these
//   arr1=mergeSort(arr1)
//   arr2=mergeSort(arr2)
//     // and merge them to get a sorted array
//     let sorted=mergeSortedArray(arr1,arr2);
//     return sorted;

// }
// console.log(mergeSort([5,1,1,2,0,0]))

// ------------**********----------------------

// function mergeSortedArray(arr1,arr2){
//     let n=arr1.length
//     let m=arr2.length
//     let i=0;
//     let j=0;
//     let arr=[]
//     while (i<n || j<m) {
//         if(i<n  && j<m){
//             // both i and j are vaild poistions
//             if(arr1[i]<=arr2[j]){
//                 arr.push(arr1[i])
//                 i++
//             }
//             else{
//                 arr.push(arr2[j])
//                 j++
//             }
//         }
//         else if(i<n){
//             // only i is vaild position
//             arr.push(arr1[i])
//             i++
//         }else{
//             // only j is valid position
//             arr.push(arr2[j]);
//             j++;
//         }

//     }
//     return arr
// }

// function mergeSort(arr){
//     let n=arr.length

//     // base case
//     if(n==1){
//         return arr
//     }

//     // we split an array into 2 smaller part

//     // let arr1=[]
//     // let arr2=[]

//     // for(i=0;i<n;i++){
//     //     if(i < Math.floor(n/2)){
//     //         arr1.push(arr[i])
//     //     }
//     //     else{
//     //         arr2.push(arr[i])
//     //     }

//     // }

//     let arr1=arr.slice(0,Math.floor(n/2))
//     let arr2=arr.slice(Math.floor(n/2), n) //if we dont pass second then it will cut till the end

//   // then we recursively sort these
//   arr1=mergeSort(arr1)
//   arr2=mergeSort(arr2)
//     // and merge them to get a sorted array
//     let sorted=mergeSortedArray(arr1,arr2);
//     return sorted;

// }
// console.log(mergeSort([5,1,1,2,0,0]))

// -------------------***********---------------------------

// function mergeSortedArray(arr1,arr2){
//     let n=arr1.length
//     let m=arr2.length
//     let i=0;
//     let j=0;
//     let arr=[]
//     while (i<n || j<m) {
//         if(i<n  && j<m){
//             // both i and j are vaild poistions
//             if(arr1[i]<=arr2[j]){
//                 arr.push(arr1[i])
//                 i++
//             }
//             else{
//                 arr.push(arr2[j])
//                 j++
//             }
//         }
//         else if(i<n){
//             // only i is vaild position
//             arr.push(arr1[i])
//             i++
//         }else{
//             // only j is valid position
//             arr.push(arr2[j]);
//             j++;
//         }

//     }
//     return arr
// }

// function mergeSort(arr, depth=0){
//     let n=arr.length

//     // base case
//     if(n==1){
//         return arr
//     }

//     console.log("depth:", depth,"sorting",arr.join(", "))

//     // we split an array into 2 smaller part
//     let arr1=arr.slice(0,Math.floor(n/2))
//     let arr2=arr.slice(Math.floor(n/2), n) //if we dont pass second then it will cut till the end

//   // then we recursively sort these
//   arr1=mergeSort(arr1,depth+1)
//   arr2=mergeSort(arr2,depth+1)
//     // and merge them to get a sorted array
//     let sorted=mergeSortedArray(arr1,arr2);
//     return sorted;

// }
// console.log(mergeSort([5,1,1,2,0,0]))

// ------------**********-----------------------------------------

//  for k number of an array
// merge sort for 2D sorted array

// output=[-3,1,2,4,4,7,9,12,13,21,23,30,40,42,67,42,85,90]

// let arr=[   //k pointers
//     [1,4,7,9],    //0
//     [-3,2,21,30,40,42], //0
//     [4,42,67,90],   //0
//     [12,13,23,85],   //0
// ]
// function mergeSortedArray(arr){
//     let k=arr.length
//     let sorted=[]

//     // will manage k pointers each for a row
//     let pointers=[] // these pointers each will point to a row, will update on each iteration

//     for(let i=0;i<k;i++){
//         pointers.push(0);
//     }

//     // loop each time to find the smallest element that is not selected

//     let elementAvailable=true // updatew this according to logic

//     while (elementAvailable) {
//         let selectedRow=null;
//         let smallest=Infinity;

//         for(i=0;i<k;i++){
//             let pointer=pointers[i];

//             if(pointer< arr[i].length){ //checking weather the ith pointer is valid or not

//                 let value=arr[i][pointer] //value at ith pointer

//                 if(value < smallest){
//                     smallest=value;
//                     selectedRow=i;
//                 }
//             }
//         }
//         // if row is selected , pick the element from the selected row and push it in the sorted
//         // and update the pointer from that row

//         if(selectedRow==null){
//             elementAvailable=false

//         }
//         else{
//             let position=pointers[selectedRow]
//             let value=arr[selectedRow][position]

//             sorted.push(value)
//             pointers[selectedRow]++

//         }

//     }
//     return sorted;
// }

// console.log(mergeSortedArray(arr))

// time complexity for above program or 2D program

// time complexity==>o(n+k)

// Sort an Array

// const merge=(arr1,arr2)=>{
//     let result=[]
//     let i=0;j=0
//     while (i<arr1.length && j< arr2.length) {
//         if(arr1[i]<=arr2[j]){
//             result.push(arr1[i])
//             i++
//         }
//         else{
//             result.push(arr2[j])
//             j++
//         }
//     }
//     while (i<arr1.length) {
//         result.push(arr1[i])
//         i++

//     }
//     while (j<arr2.length) {
//         result.push(arr2[j])
//         j++

//     }
//     return result
// }

// var sortArray = function(nums) {

//     if(nums.length<=1){
//         return nums
//     }
//     let mid= Math.floor(nums.length/2)
//     let left=sortArray(nums.slice(0,mid))
//     let right= sortArray(nums.slice(mid));

//     return merge(left,right)

// };
// console.log(sortArray([5,2,3,1]))

// sorting array of objects

// sorting array with objects,
// check prime -> prefer that
// check amount greater is p[refered
// check quantity of items-> less quantity is prefered

// const orders=[
//     {prime: true, amount:200, quantity:1},
//     {prime: false, amount:3400, quantity:5},
//     {prime: true, amount:348, quantity:2},
//     {prime: false, amount:1800, quantity:3},
//     {prime: true, amount:10, quantity:1},
//     {prime: true, amount:200, quantity:2},
// ]

// // for a to appear before b in sorted array, we return -ve

// // for b to appear before a in sorted array, we return +ve
// // for a and b relatively same position, we return 0

// function compareOrders(a,b){
//     if(a.prime==b.prime){
//         // both prime or both non-prime

//         if(a.amount>b.amount){
//             return -1;
//         }
//         else if(b.amount>a.amount){
//             return +1
//             if(a.quantity< b.quantity){
//                 return -1
//             }
//             else if(b.quantity<a.quantity){
//                 return +1
//             }
//             else{
//                 return 0
//             }
//         }

//     }
//     else{
//         // either one is prime
//         // clear distinction which one to prefer
//         if(a.prime){
//             return -1;
//         }
//         else{
//             return +1
//         }
//     }
// }

// orders.sort(compareOrders);
// //when comparing 2 orders array's sort methods vwill call our compareOrder function
// // let result=compareOrders(order1,order2)
// console.log(orders)

// class Marks{
//     constructor(maths,physics,chemistry){
//         this.maths=maths
//         this.physics=physics;
//         this.chemistry=chemistry;
//     }
//     getTotal(){
//         return this.maths+this.physics+this.chemistry
//     }
// }

// let marks=[
//     new Marks(87,45,89),
//     new Marks(34,95,68),
//     new Marks(12,30,46),
//     new Marks(16,100,47),
//     new Marks(45,87,89)
// ]

// function compareMarks(a,b){
//     if(a.getTotal()>b.getTotal()){
//         return -1
//     }
//     else if(b.getTotal()>a.getTotal()){
//         return +1
//     }
//     else{
//         // both students got the same total marks
//         if(a.maths>b.maths){
//             return -1
//         }
//         else if(b.maths> a.maths){
//             return +1
//         }
//         else{
//             // same total,andB same marks in maths
//             if(a.physics>b.physics){
//                 return -1

//             }
//             else if(b.physics>a.physics){
//                 return +1
//             }
//             else{
//                 // same total marks, samr marks in maths,and same marks in physics

//                 return 0
//             }
//         }
//     }
// }
// marks.sort(compareMarks)
// console.log(marks)

// Merge sort with comparator

// function mergeSortedArray(arr1,arr2){
//     let n=arr1.length
//     let m=arr2.length
//     let i=0;
//     let j=0;
//     let arr=[]
//     while (i<n || j<m) {
//         if(i<n  && j<m){
//             // both i and j are vaild poistions
//             let a=arr1[i];
//             let b=arr2[i]
//             let result=compareOrders(a,b)
//             if(result<0){
//                 arr.push(a)
//                 i++
//             }
//             else if(result>0){
//                 arr.push(b)
//                 j++
//             }
//             else{
//                 arr.push(a)
//                 i++
//             }
//         }
//         else if(i<n){
//             // only i is vaild position
//             arr.push(arr1[i])
//             i++
//         }else{
//             // only j is valid position
//             arr.push(arr2[j]);
//             j++;
//         }

//     }
//     return arr
// }

// const orders=[
//     {prime: true, amount:200, quantity:1},
//     {prime: false, amount:3400, quantity:5},
//     {prime: true, amount:348, quantity:2},
//     {prime: false, amount:1800, quantity:3},
//     {prime: true, amount:10, quantity:1},
//     {prime: true, amount:200, quantity:2},
// ]

// // for a to appear before b in sorted array, we return -ve

// // for b to appear before a in sorted array, we return +ve
// // for a and b relatively same position, we return 0

// function compareOrders(a,b){
//     if(a.prime==b.prime){
//         // both prime or both non-prime

//         if(a.amount>b.amount){
//             return -1;
//         }
//         else if(b.amount>a.amount){
//             return +1
//             if(a.quantity< b.quantity){
//                 return -1
//             }
//             else if(b.quantity<a.quantity){
//                 return +1
//             }
//             else{
//                 return 0
//             }
//         }

//     }
//     else{
//         // either one is prime
//         // clear distinction which one to prefer
//         if(a.prime){
//             return -1;
//         }
//         else{
//             return +1
//         }
//     }
// }

// orders.sort(compareOrders);
// //when comparing 2 orders array's sort methods vwill call our compareOrder function
// // let result=compareOrders(order1,order2)
// console.log(orders)

// union intersection

// having 2 arrays having unique numbers only

// const arr1=[1,4,6,8,0,-1,5]
// const arr2=[4,5,7,8,9]

// // union means the numbers which are present in arr1 and arr2
// // union=[1,4,6,8,0,-1,5,7,8,9]

// // intersection means which are present in both the arrays
// // intersection=[4,5,8]

// function compare(a,b){
//     if(a<=b){
//         return -1
//     }
//     else{
//         return +1
//     }

// }

// function unionAndIntersection(arr1,arr2){

//     arr1=arr1.sort(compare)
//     arr2=arr2.sort(compare)

//     let n=arr1.length
//     let m =arr2.length

//     let union=[]
//     let intersection=[]

//     let i=0;
//     let j=0;

//     while (i<n || j< m) {

//         if(i<n && j<m){
//             // both the pointers are valid position
//             let a=arr1[i];
//             let b= arr2[j];

//             if(a==b){
//                 // put in both intersection and union
//                 union.push(a);
//                 intersection.push(a);
//                 i++
//                 j++
//             }
//             else{
//                 // put the smaller one in union
//                 if(a<b){
//                     union.push(a)
//                     i++;
//                 }
//                 else{
//                     union.push(b)
//                     j++
//                 }
//             }

//         }
//         else if(i<n){
//             // i is valid position
//             union.push(arr1[i])
//             i++;
//         }
//         else{
//             // j is valid position
//             union.push(arr2[j])
//             j++
//         }

//     }
//     return{
//         union,intersection
//     }
// }

// console.log(unionAndIntersection(arr1,arr2))

//  Longest Palindromic Substring

// const getDrom=(left,right,s)=>{
//     while (left>=0 && right<s.length) {
//         if(s[left]!==s[right]) break;
//         left--
//         right ++;

//     }
//     return [left+1,right]
// }
// var longestPalindrome = function(s) {

//     // expand from center algorithm

//     let max=[0,1]
//     for(let i=0;i<s;i++){
//         let even=getDrom(i-1,i,s)
//         let odd=getDrom(i-1,i+1,s)
//         let currentMax=odd[1]-odd[0]>even[1]-even[0] ? odd : even;

//         max=max[1]-max[0] > currentMax[1]-currentMax[0] ? max : currentMax
//     }
//     return s.slice(max[0],max[1]);

// };
// console.log(longestPalindrome("babad"))

// const expandFromCenter=(s,i,j)=>{
//     while(i>=0 && j<s.length && s.charAt(i)==s.charAt(j)){
//         i--
//         j++
//     }
//     return j-i-1;
// }

// var longestPalindrome = function(s) {
//     let start=0;
//     let end=0
//     for(i=0;i<s.length;i++){
//         let len1=expandFromCenter(s,i,i+1)
//         let len2=expandFromCenter(s,i,i)

//         let len=Math.max(len1,len2)
//         if(end-start<len){
//             start= i-(len)/2
//             end= i+len/2
//         }
//     }
//     return s.substring(start,end+1);
// };
// console.log(longestPalindrome("cbbd"))

// move zero

// var moveZeroes = function(nums) {

// 	let count=0
// 	for(i=0;i<nums.length;i++){
// 		if(nums[i]!=0){
// 			nums[count]=nums[i]
// 			count++
// 		}
// 	}
// 	for(i=count;i<nums.length;i++){
// 		nums[i]=0
// 	}
//   return nums
// };

// Non-decreasing Array

// /**
//  *
//  * @param {Array} nums
//  */

//  var checkPossibility = function(nums) {
//      let count=0
//   for (let i = 1; i < nums.length; i++){
//       if(nums[i-1]>nums[i]){
//           count++;
//           if(i-2<0 || nums[i-2]<=nums[i]){
//               nums[i-1]=nums[i]
//           }
//           else{
//               nums[i]=nums[i-1]
//           }

//       }
//       return count<=1
   
//   }
// };
// console.log(checkPossibility([4, 2, 1]))



// ------************------------------------

// quick sort

// function quickSort(arr, start,end){
//     // to get to know that from where we will have to apply recursion
//     let pivotIdx=0;
//     let left=0;
//     let right= arr.length-1;

//     while (true) {
//         while (left<=end &&arr[left]<=arr[pivotIdx]) {
//             left++;
            
//         }
//         while (arr[right]>arr[pivotIdx]) {
//             right--;
            
//         }
//         if(left< right){
//             let temp=arr[left];
//             arr[left]=arr[right]
//             arr[right]=temp
//         }
//         else{
//             let temp=arr[right]
//             arr[right]= arr[pivotIdx];
//             arr[pivotIdx]=temp  
//             break;
//         }
          
//     }
//     // sort the left subarray
//     if(start<=right-1){
//         quickSort(arr,start,right-1)
//     }

//     // sort the right subarray
//     if(right+1<=end)
//     {
//     quickSort(arr,right+1,end)
//     }
// }

// let arr=[7,5,9,8,1,4]


// function countPairs(arr,b){
//     let count=0
//     for(i=0;i<arr.length;i++){
//         for(j=i+1;j<arr.length;j++){
//             if(arr[i]+arr[j]==b){
//                 count++
//             }
//         }
//     }
//     return count;
// }
// console.log(countPairs([1,1,1],2))


// function maxOfOddEven(A){
//     let max=A[0]
//     let min=A[0]
//     for(i=0;i<A.length;i++){
//         if(i%2==0){
//             if(max<A[i]){
//                 max=A[i]
//             }
//         }
//         else{
//             if(min>A[i]){
//                 min=A[i]
//             }
//         }
//     }
// console.log(min,max)
// return min-max
// }
// console.log(maxOfOddEven([-98,54,-52,15,23,-97,12,-64,52,85]))


// function maxOfOddEven(A){
//     let even=[]
//     let odd=[]
//     // let max=A[0]
//     // let min=A[0]
//     for(i=0;i<A.length;i++){
//         if(A[i]%2==0){
//            // if(max<A[i]){
//            //     max=A[i]
//            // }
//            even.push(A[i])
//         }
//         else{
//            // if(min>A[i]){
//            //     min=A[i]
//            // }
//            odd.push(A[i])
//         }
//     }
//     let max=Math.max(...even)
//     let min=Math.min(...odd)
//     return max-min
    
// }
// console.log(maxOfOddEven([-98,54,-52,15,23,-97,12,-64,52,85]))



// function commonElem(A,B){
//     let out=[]
//    A.sort((a,b)=>a-b)
//    B.sort((a,b)=>a-b)
//    let i=0;j=0
//    while (i<A.length && j<B.length) {
//        if(A[i]==B[j]){
//            out.push(A[i])
//            i++;
//            j++
//        }
//        else if(A[i]<A[j]){
//            i++;
//        }
//        else{
//            j++
//        }
       
//    }
//    return out
// }
// console.log(commonElem([1,2,2,1],[2,3,1,2]))

// function commonElem(A,B){
//     let arr=[]
//     for(let i=0;i<A.length;i++){
//         for(let j=0;j<B.length;j++){
//             if(A[i]===B[j]){
//                 arr.push(B[j])
//                 B[j]="-"
//             }
//         }
//     }
//     // console.log(arr);
//     return arr
// }
// console.log(commonElem([1,2,2,1],[2,3,1,2]))

//  function pow (A, B, C){
//     if(A==0){
//         return 0;
//     }
//     else if(B==0){
//         return 1;
//     }
//     else if(B%2==0){
//         let temp= pow(A,Math.floor(B/2),C);
//         return (temp*temp)%C
//     }
//     else{
//         return ((pow(A,B-1,C))*A%C)%C;
//     }
// }
// console.log(pow(2,3,3))