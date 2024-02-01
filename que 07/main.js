// Coding challenge #14: Print the first 10 Fibonacci numbers without recursion

let f0 = 0;
console.log(f0);

let f1 = 1;
console.log(f1);

for(let i = 2; i < 10; i++)
{
    let fi = f1 + f0;
    console.log(fi);
    
    f0 = f1;
    f1 = fi;
}

// Coding challenge #15: Create a function that will find the nth Fibonacci number using recursion

function findFibonacci(n)
{
    if (n == 0)
        return 0;
        
    if (n == 1)
        return 1;
        
    return findFibonacci(n - 1) + findFibonacci(n - 2);
}

let n = findFibonacci(20);
console.log(n);
