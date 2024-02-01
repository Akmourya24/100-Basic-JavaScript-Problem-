// Coding challenge #13: Find the maximum number in an array of numbers

let arr =[432,45,3,56,3,6,3,6,3,6,33,534,3];
let arr1 =[54,6,4,7,4,74,8,6,58,5,7,4,8,45,7,45,8,5,75,75,856,75,8];
let arr2 =[3,35,6,4,6,3,7,347,5,7,23,57,8,4,8733,7];
let arr3 =[89,679,68,6,8,96,5,565,6,45]

let len = arr.length;
let len1 = arr1.length;
let len2 = arr2.length;
let len3 = arr3.length;


function findBiggestArray(){
    if (len >len1 &len>len2 &len>len3){
        console.log("Biggest array="+len)
        console.log(arr)
    }
   else 
    if (len1 >len &len1>len2 &len1>len3){
        console.log("Biggest array="+len1)
        console.log(arr1)
    }
    else 
    if (len2 >len1 &len2>len &len2>len3){
        console.log("Biggest array="+len2)
        console.log(arr2)
    }
    else{
        console.log("Biggest array"+len3)
        console.log(arr3)

    }
}
findBiggestArray();