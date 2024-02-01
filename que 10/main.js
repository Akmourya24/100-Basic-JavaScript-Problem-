// Coding challenge #18: Print the first 100 prime numbers


function cheakPrime(nprime){
    let n= 0;
    let i= 2;
    while(n<nprime){
        if( primeNumber(i)){
            console.log(n,"-->",i);
            n++
        }
        i++;
    }
}

function primeNumber(n){
    if(n<2 )
        return false;
    
    if(n==2 )
        return true;
    

    let num = Math.sqrt(n)

    for (let i =2; i<=num; i++){
        if(n % i ==0){
            return false;
    
        }
    }
    return true;
    
}

cheakPrime(100);


