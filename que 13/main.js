// Coding challenge #23: Reverse a string

let string ='AlokMourya';

function reverseString(){
    let str= '';

    for( let i=string.length-1; i>=0; i--){
        let char =string[i];
        str+=char;
    }
    console.log(string)

    
}
reverseString()