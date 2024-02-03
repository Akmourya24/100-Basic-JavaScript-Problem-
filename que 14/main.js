// Coding challenge #24: Create a function that will merge two arrays and return the result as a new array



let arr1 =[1,2,3,4,5]
let arr2 =[6,7,8,9,0]

// let add =[];

//  let fill =add.concat(arr1,arr2);

// add.push(fill);

// console.log(add)

function addArrays(){
    let array =[];

    for (let  ar of arr1) {
        array.push(ar);
    }
    for (let  ar of arr2) {
        array.push(ar);
    }

        
    console.log(array)
}
addArrays();
    