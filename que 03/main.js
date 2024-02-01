// Coding challenge #9: Create a function that will convert from  Celsius to farhrenheit

function convert(C){ 
    let fer = (C*9/5)+32;   
    console.log(fer)
}
convert(37);


// Coding challenge #9: Create a function that will convert from Fahrenheit to Celsius

 function convertCelsius(f){
    return 5/9*(f-32);
    
 }
 console.log(convertCelsius(98.6));