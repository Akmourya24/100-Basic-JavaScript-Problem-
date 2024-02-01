// Coding challenge #17: Calculate the sum of digits of a positive integer number

function adddigit(n){
    
    let val = n.toString()
    
    let sum =0
    for (const number of val) {
        let digits =parseInt(number)
        sum+=digits;
    }
    return sum;
}
console.log(adddigit(185124589735))

let str = 85125641

console.log(str.toString())
let number = parseInt(42136851)

console.log(number)