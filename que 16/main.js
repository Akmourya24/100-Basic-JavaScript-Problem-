// Coding challenge #26: Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second
   
let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 0,5,4,12,11,40,6 ]


function createArrays(arr1,arr2){

    let arrays =[];
    
    for (const ar of arr1) {
        if(!arr2.includes(ar))
        {
            arrays.push(ar)
        }
    }
return arrays;
}
let arrays =createArrays(arr1,arr2);
console.log(arrays)