// Coding challenge #19: Create a function that will return in an array the first "nPrimes" prime numbers greater than a particular number "startAt"

function isPrime(nPrimes, startAt) {
    let array = [];
    let i = startAt;

    while (array.length < nPrimes) {
        if (primeNumber(i)) {
            array.push(i);
        }
        i++
    }
    return array;
}

function primeNumber(n) {


    if (n < 2) {
        return false;
    }

    if (n == 2) {
        return true;
    }


    let num = Math.sqrt(n)

    for (let i = 2; i <= num; i++) {
        if (n % i == 0) {
            return false;
        }


    }
    return true;
}
console.log(isPrime(50, 100));


