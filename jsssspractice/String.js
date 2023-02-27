// first Unique Character

// let integer="abc"
// let obj={}
// let is=false
// for(i=0;i<integer.length;i++){
//     // console.log(integer[i])
//     obj[integer[i]]= obj[integer[i]] ? obj[integer[i]]+1:1


// }
// for(i in obj){
//     // console.log(obj[i])
//     if(obj[i]>1){
//         is=true 
//     }
// }
// if(is){
//     console.log(0)
// }
// else{
//     console.log(-1)
// }


// Trek

// let steps=8
// let dir="UDDDUDUU"
// let countUp=0;
// let count=0
// let countDown=0
// for(i=0;i<steps;i++){
//     if(dir[i]=="U"){
//         countUp++
//     }
//     else{
//         countDown++
//     }
//     if(countUp-countDown==0 && dir[i]=="U"){
//         count++
//     }
// }
// console.log(count)




// longest Substring

// function longestSubstring(string){
//     let count={}
//     let max=0
//     let start=0
//     if(!string){
//         return 0
//     }
//     for(let end=0;end<string.length;end++){
//         let lastChar=string[end]
//         if(count[lastChar]===undefined){
//             count[lastChar]=0;
//         }
//         count[lastChar]+=1;
//         while(count[lastChar]>1){
//             let firstChar=string[start]
//             count[firstChar]-=1
//             start+=1

//         }
//         max=Math.max(max,end-start+1)
//     }
//     return  max
// }
// console.log(longestSubstring("abcabcbb"))



// forming names

// let string=["t","a","n","m","a","y"]
// let arr=["y","t","n","m","b","a","r"]
// let count=0
// for(i=0;i<string.length;i++){
//     if(arr.indexOf(string[i]) != -1){
//         count++
//     }
// }
// console.log(count)


// console.log(Number.NaN===NaN)
// console.log(isNaN(NaN))
// console.log(isNaN(Number.NaN))
// console.log(Number.isNaN(NaN))