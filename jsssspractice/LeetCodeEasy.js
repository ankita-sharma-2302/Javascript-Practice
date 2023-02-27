// Best Time to Buy and Sell Stock

// var maxProfit = function(prices) {
//     let minPrice=prices[0]
//     let maxProfit=0
//     for(i=0;i<prices.length;i++){
//         maxProfit=Math.max(maxProfit,prices[i]-minPrice)
//         minPrice=Math.min(minPrice,prices[i])
//     }
//     // console.log(minProfit)
//     return maxProfit;
// };
// console.log(maxProfit([7,1,5,3,6,4]))

// ----------------------------------******----------------------------------------

// Merge Sorted Array

// var merge = function(nums1, m, nums2, n) {
//     nums1.splice(m)
//     // console.log(nums1)
//     nums1.push(...nums2)
//     nums1.sort((a,b)=>a-b)
//     return nums1
// };
// console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

// ----------------------------------******----------------------------------------

// Find Pivot Index

// var pivotIndex = function(nums) {
//     for(i=0;i<nums.length;i++){
//         let leftsum=0
//         let rightSum=0
//         for(j=0;j<i;j++){
//             leftsum+=nums[i]
//         }
//         for(k=nums.length;k>i;k--){
//             rightSum+=nums[i]
//         }
//         if(leftsum==rightSum){
//             return i
//         }
//     }
//     return -1
// };
// console.log(pivotIndex([2,1,-1]))

// -----------or--------------------

// var pivotIndex = function (nums) {
//   let sum = nums.reduce((a, b) => a + b);
//   let leftsum = 0;
//   let rightSum = sum;
//   for (let j = 0; j < nums.length; j++) {
//     //   console.log("losum",leftsum)
//     //   console.log("hiii122",rightSum)
//     rightSum -= nums[j];
//     // console.log("hello",rightSum)
//     if (leftsum == rightSum) {
//         // console.log("enter")
//       return j;
//     }
//     leftsum += nums[j];
//   }
//   return -1
// };
// console.log(pivotIndex([1,7,3,6,5,6]));



// ----------------------------------******----------------------------------------

// Majority Element

// var majorityElement = function(nums) {
//     let n=Math.ceil(nums.length/2)
//     let map=new Map()
//     for(i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             map.set(nums[i],map.get(nums[i])+1)
//         }
//         else{
//             map.set(nums[i],1)
//         }
//     }
// //    console.log(map)
// for(let i of map){
//     // console.log(i)
//     if(i[1]>=n){
//         return i[0]
//     }

// } 
// };
// console.log(majorityElement([3,2,3]))


// ----------------------------------******----------------------------------------

// Squares of a Sorted Array


// var sortedSquares = function(nums) {
//     let newArr=nums.map((res)=> res**2)
//     // console.log(newArr)

//     for(i=1;i<newArr.length;i++){
//         let j=i-1;
//         let key=newArr[i]
//         while(j>=0 && key< newArr[j]){
//             // console.log("hii")
//             newArr[j+1]=newArr[j];
//             j--
//         }
//         newArr[j+1]=key
//     }
//  return newArr
// };
// console.log(sortedSquares([-4,-1,0,3,10]))




// ----------------------------------******----------------------------------------

// var generate = function(numRows) {
//     let arr=new Array(numRows)
//     if(numRows==1){
//         arr[0]=[1]
//         return arr
//     }
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



// ----------------------------------******----------------------------------------

// Remove Duplicates from Sorted Array

// var removeDuplicates = function(nums) {
//     const length = nums.length;
//   let count=0
//       if( length <= 1 ){
//           return length;
//       }
  
//       let map= new Map()
//       for(i=0;i<length;i++){
//           if(map.has(nums[i])){
//               map.set(nums[i], map.get(nums[i])+1)

//           }
//           else{
//               map.set(nums[i],1)
//           }
//       }
//     //   console.log(map)
//     for(i of map){
//         // console.log(i)
//         if(i[0]){
//             count++
//         }
//     }
//     return count
//   };
//   console.log(removeDuplicates([1,1,2]))



// ----------------------------------******----------------------------------------

// Reverse String

// function reverseArr(left,right,s){
//     // console.log(left)
//     // console.log(right)
//     if(left>=right) return 
//     let temp=s[right]
//     s[right]=s[left]
//     s[left]= temp
//    reverseArr(left+1,right-1,s)
   
// }

// var reverseString = function(s) {
//     let left=0
//     let right= s.length-1;
//     // console.log(left)
//     // console.log(right)
//     // console.log(s)

// reverseArr(left,right,s)
//  return s
// };

// console.log(reverseString(["h","e","l","l","o"]))




// ----------------------------------******----------------------------------------

// Valid Palindrome


// // function checkPalindrom(s,left,right){
// //     // console.log(s[left],s[right])
// //     console.log(left,right)
// //     if(left>=right) return true
// //     if(s[left] !=s[right]) return false
// //   return checkPalindrom(left+1,right-1,s)
// // }
// var isPalindrome = function(s) {
//     // console.log(s.length)
// //     s=s.toLowerCase()
// //     s = s.replace(/[^a-z0-9]/gi, ""); 
// //     console.log(s)
// //     let left=0
// //     let right=s.length-1
// //   while(left<right) { 
// //     //   console.log("hiiiii")
// //        if(s[left]==s[right]){
// //         left++
// //         right--;
// //         continue
// //     }
// //         return false
// // }
// // return true

//     return checkPalindrom(s,left,right)
//     // console.log(right)
// };
// console.log(isPalindrome("race a car"))



