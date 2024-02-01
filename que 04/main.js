// Coding challenge10: Calculate the sum of numbers in an array of numbers


let arr =[234,45,23,2,3,2,4,5,6,34,67,34,7,4,3,534,6,3,4];
let sum =0;

arr.forEach(Number => {
    sum+=Number;
});
console.log(sum);

// Coding challenge11: Calculate the avgrage of numbers in an array of numbers

let myarr =[234,45,23,2,3,2,4,5,6,34,67,34,7,4,3,534,6,3,4];
 let add =0;
 let avg =0;

 myarr.forEach(Element => {
    add+=Element;
    avg=add/(myarr.length);
 });
 console.log(avg)


