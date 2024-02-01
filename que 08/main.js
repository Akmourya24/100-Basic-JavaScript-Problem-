// Coding challenge #16: Create a function that will return a Boolean specifying if a number is prime

function cheakPrime(n){
    if ( n<2){
        return false;
    }
    if(n==2){
return true;
    }
    let maxdiv =Math.sqrt(n);
        for(let i=2; i<=maxdiv; i++){
            if(n%i==0){
                return false;
            }
            else 
            return true
        }
    

    
}
console.log(cheakPrime(1));
console.log(cheakPrime(11));
console.log(cheakPrime(20));
console.log(cheakPrime(13));
console.log(cheakPrime(12));
console.log(cheakPrime(19));
console.log(cheakPrime(23));
