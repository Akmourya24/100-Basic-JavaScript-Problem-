// Coding challenge #1: Print numbers from 1 to 10

for( let i =1; i<=100; i++){
    console.log(i);
}

// Coding challenge #2: Print the odd numbers less than 100

for( let i =1; i<=100; i+=2){
    console.log(i);
}

for (let i =0; i<=100; i+=2){
    console.log(i)
}


// Coding challenge #3: Print the multiplication table with 7

for (let i =1; i<=10; i++){
    console.log(i*7)
}

// Coding challenge #4: Print all the multiplication tables with numbers from 1 to 10

let arr =[1,2,3,4,5,6,7,8,9,10];

arr.forEach(element => {
    for(let i=1; i<=10; i++){
        let mul =`${element} * ${i} = ${element * i}`;
        console.log(mul);
    }
    
});