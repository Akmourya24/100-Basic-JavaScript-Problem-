// Coding challenge #20: Rotate an array to the left 1 position

let arr = [1,2,3,6,8,4,7,5];

   function rotateLeft(){
       let  left =arr.shift(2);
        arr.push(left);


        console.log(arr)
   }
   rotateLeft(arr)

//    Coding challenge #21: Rotate an array to the right 1 position

   function rotateRight(){
    let right =arr.pop();
    arr.unshift(right);
    console.log(arr)
   }
   rotateRight(arr)

   console.log(arr.unshift())
   console.log(arr.pop())
   console.log(arr.sort())
   
//    Coding challenge #22: Reverse an array

   console.log(arr.reverse())

   let ar = [1, 2, 3];
let ar2 = reverseArray(ar);
console.log((ar2));

function reverseArray(ar)
{
    let ar2 = [];
    
    for(let i = ar.length - 1; i >= 0; i--)
    {
        ar2.push(ar[i]);
    }
    
    return ar2;
}