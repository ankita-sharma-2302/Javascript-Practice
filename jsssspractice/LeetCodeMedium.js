// Best Time to Buy and Sell Stock II

// var maxProfit = function(prices) {
//     let profit=0
//     for(let i=1;i<prices.length;i++){
//         if(prices[i]>prices[i-1]){
//             profit=profit+(prices[i]-prices[i-1])
//         }
//     }
//     return profit

// };
// console.log(maxProfit([7,1,5,3,6,4]))

// -------------------------*******************----------------------------------------------

// Find All Duplicates in an Array

// var findDuplicates = function(nums) {
//     let map= new Map()
//     let result=[]
//     for(i=0;i<nums.length;i++){
//         if(map.has(nums[i])){
//             map.set(nums[i],map.get(nums[i])+1)
//         }
//         else{
//             map.set(nums[i],1)
//         }
//     }
//     // console.log(map)
//     for(i of map){
//         // console.log(i)
//         if(i[1]>1){
//             result.push(i[0])
//         }
//     }
//     return result

// };
// console.log(findDuplicates([4,3,2,7,8,2,3,1]))

// -------------------------*******************----------------------------------------------

// Product of Array Except Self

// var productExceptSelf = function(nums) {
//     // let temp=nums[0]
//     let result=[]
//     for(i=0;i<nums.length;i++){
//         let temp=1
//         for(j=0;j<nums.length;j++){
//             if(j != i){
//                 // console.log("hii")
//                 temp*=nums[j]
//             }
//         }
//         result.push(temp)
//     }
//     return result
// };
// console.log(productExceptSelf([-1,1,0,-3,3]))

// ----------------------orrrrrrrrrrrrr-----------------------

// var productExceptSelf = function(nums) {
//     let result=[]
//     if(nums.length==0){
//         return result
//     }
//     for(i=0;i<nums.length;i++){
//        let temp=nums.filter((res)=>{
//            return nums[i]!==res
//        })
//     let sum=1
//     let res= temp.reduce((a,b)=>a*b)
//     // result.push(sum)
//     // sum=1
//     // console.log(res)
//     result.push(res)
//     }
//     return result
// };
// console.log(productExceptSelf([-1,1,0,-3,3]))

// -------------------------*******************----------------------------------------------

// var productExceptSelf = function(nums) {
//     let result=new Array(nums.length)
//     if(nums.length==0){
//         return result
//     }
//     // console.log(result)
//     let product=1
//     // left pass
//     for(i=0;i<nums.length;i++){
//         // console.log(product)
//         result[i]=product;
//         product=product*nums[i]
//     }
//     product=1;
//     for(i=nums.length-1;i>=0;i--){
//         // console.log(product)
//         result[i]=result[i]*product
//         product=product*nums[i]
//     }
//    return result
// };
// console.log(productExceptSelf([-1,1,0,-3,3]))

// -------------------------*******************----------------------------------------------

// 3Sum

// var threeSum = function(nums) {
//     let result=[]
//     for(i=0;i<nums.length;i++){
//         for(j=i+1;j<nums.length;j++){
//             for(k=j+1;k<nums.length;k++){

//                 if(nums[i]+nums[j]+nums[k]==0){

//                     // console.log(nums[i],nums[j],nums[k])
//                     result.push([nums[i],nums[j],nums[k]])
//                 }
//             }
//         }

//     }
//     console.log(result)
// };
// console.log(threeSum([-1,0,1,2,-1,-4]))

// ------------------or-------------------------------

// function twoSum(i,target,nums){
//     // console.log(i)
//     // console.log(nums)
//     // console.log(target)
//     let j=nums.length-1
//     let result=[]
//     while(i<j){
//         let leftValue=nums[i]
//         let right=nums[j]
//         if(leftValue+right> target){
//             j--
//         }
//         else if(leftValue+right < target){
//             i++
//         }
//         else{
//             result.push([(target*-1),leftValue,right])
//             while(i<j && nums[i]===nums[i+1]) i++
//             while(i<j && nums[j]===nums[j+1]) j--
//             i++
//             j--
//         }
//     }
//     return result
// }

// var threeSum = function(nums) {
//     nums.sort((a,b)=>a-b)
//     let result=[]
//     for(i=0;i<nums.length;i++){
//         if(nums[i]===nums[i-1]) continue
//         let target= nums[i]*-1;
//         let subResult=twoSum(i+1,target,nums)
//         result.push(...subResult)

//     }
//     return result
// };
// console.log(threeSum([-1,0,1,2,-1,-4]))

// -------------------------*******************----------------------------------------------

// Add Strings

// var addStrings = function(num1, num2) {
//     let result=parseInt(num1)+parseInt(num2)
//     return result.toString()

// };
// console.log(addStrings("9333852702227987","85731737104263"))

// -------------------------*******************----------------------------------------------

// Subarray Sum Equals K

// var subarraySum = function(nums, k) {
//     let count=0
//     for(i=0;i<nums.length;i++){
//         // console.log(i)
//         let sum=0
//         for(j=i;j<nums.length;j++){
//             sum+=nums[j]
//             if(sum==k){
//                 count++
//             }
//         }

//     }
//     return count

// };
// console.log(subarraySum([1,1,1],2))

// --------------orrrrrr-----------------------------------

// -------------------------*******************----------------------------------------------

// Merge Intervals

// var merge = function(intervals) {
//     for(i=1;i<intervals.length;i++){
//       // console.log(intervals[i-1][1])
//       if(intervals[i][0]<=intervals[i-1][1]){
//           // console.log("yessss",i-1)
//           // console.log(intervals.splice(i,1))
//           intervals[i]=[intervals[i-1][0],intervals[i][1]]
//           intervals.splice(i-1,1)
//       }
//   }
//   // console.log(intervals)
//   return intervals
// };
// console.log(merge([[1,4],[2,3]]))

// -------------------------*******************----------------------------------------------

// Pow(x, n)

// var myPow = function(x, n) {
//     if (n == 0) {
//   return 1;
// }
// if (n < 0) {
//   return myPow(1 / x, -n);
// }
// else if(n%2==0){
//     let temp=  myPow(x,n/2)
//     return temp*temp
// }
// else{
//     return x*myPow(x,n-1)
// }

// };
// console.log(myPow(2.0, 10));


// -------------------------*******************----------------------------------------------

// Subsets

function helperFun(arr,nums,i, subset){
    // console.log(nums)
    if(nums.length==i){
        arr.push(subset)
    }
    helperFun(arr,nums,i+1,subset);
    subset.push(nums[i]);
    helperFun(arr,nums,i+1,subset);
    subset.pop();
}
var subsets = function(nums) {
    let subset=[]
    let arr=[]
    helperFun(arr,nums,0,subset)
    
};
console.log(subsets([1,2,3]))


// -------------------------*******************----------------------------------------------

// Permutations



// var permute = function(nums) {
//     var ans=[]
//     function permuteHelper(position,nums){
//         if(position==nums.length){
//         //   console.log(nums)
//         // console.log(ans.push(nums))
//         ans.push(nums.slice())
//            return 
//         }
//         for(let i=position;i<nums.length;i++){
//             // swap(nums[i],nums[position])
//             let temp=nums[i]
//             nums[i]=nums[position]
//             nums[position]=temp;
//             // [nums[position],nums[i]]=[nums[i],nums[position]]
//             permuteHelper(position+1,nums)
//             // swap(nums[i],nums[position])
//             // [nums[position],nums[i]]=[nums[i],nums[position]]
//             let temp1=nums[i]
//             nums[i]=nums[position]
//             nums[position]=temp1
//         }
//     }
//     permuteHelper(0,nums)
//     return ans
    
// };
// console.log(permute([1,1,2]))


// -------------------------*******************----------------------------------------------


// var permuteUnique = function(nums) {
//     let ans=[]

//     const permuteUniqueHelper=(position,nums)=>{
//         if(position>=nums.length){
//             ans.push(nums.slice())
//             return
//         }
//         let count={}
//         for(let i=position;i<nums.length;i++){
//             if(count[nums[i]]) continue
//             count[nums[i]]=true
//             let temp=nums[i]
//             nums[i]=nums[position]
//             nums[position]=temp
//             permuteUniqueHelper(position+1,nums)
//             let temp1=nums[i]
//             nums[i]=nums[position]
//             nums[position]=temp1
//         }
//     }
//     permuteUniqueHelper(0,nums)
//     return ans
// };
// console.log(permuteUnique([1,1,2]))


