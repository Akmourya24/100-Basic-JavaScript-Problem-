// Coding challenge #12: Create a function that receives an array of numbers and returns an array containing only the positive numbers

// solustion1

function getPositivearr(){
    let arr2 =[];
     
    for (let i=1; i<=arr1.length; i++){
        let arr3 =arr1[i];

        if( arr3>0){
            arr2.push(arr3);
        }
    }
    return arr2;
}
arr1 =[1,4,2,-3,-56,23,-2,56-3,6-3,2,-5,4-3,24,303,3]


let arr2 =getPositivearr(arr1)
console.log(arr2)


// solution2

let array =[ 1,2,3,4,0,-1,-2,-3,-4,-5,-6,35,-2,64,548,345, -3 ,39,-383];
let len = array.length;
console.log(" lenght of array="+len);
let myarr1=[];
let  myarr = [];
array.forEach(Element => {
    if(Element>0){
        
       myarr.push(Element)
       // console.log(`${Element} is positive`);
       
    }
    else
    myarr1.push(Element)

// console.log(`${Element} is nagative number`)
})
console.log(myarr);
console.log(myarr1)


