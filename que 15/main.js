// Coding challenge #25: Create a function that will receive two arrays of numbers as arguments and return an array composed of all the numbers that are either in the first array or second array but not in both

let arr1 = [1, 2, 3, 4, 5]
let arr2 = [6, 7, 8, 9, 0,5,4,12,11,40,6 ]

function isArray(arr1, arr2) {

    let ar = [];

    for (const array of arr1) {

        if (!arr2.includes(array)) {
            ar.push(array)
        }
    }
    for (const array of arr2) {

        if (!arr1.includes(array)) {
            ar.push(array)
        }
    }

    return ar;
}
let ar = isArray(arr1, arr2);
console.log(ar)