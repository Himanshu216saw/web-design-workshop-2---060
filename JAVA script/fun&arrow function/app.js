function addNumbers(a1, b1) {
    return a1 + b1;
}
console.log("normal Function:", addNumbers(2, 3));
console.log(`"normal Function:", ${addNumbers(5, 7)}`);



let name = "John";
console.log(`Hello, ${name}!`); // Output: Hello, John!




const greetexp=function(){
    return "Hello from the function expression!";   

};



console.log(greetexp());






cont squarefunc=function(x){
    return x*x;
};
console.log("square with normal function expression:", squarefunc(5));







// arrow function

// santax 
// const functionname=(parameters)=> Expression;


const addNumbersArrow=(a2,b2)=>a2+b2;
console.log("Arrow Function:", addNumbersArrow(4, 6));





// arrow function with no parameter


const greetArrow=()=>"Hello from the arrow function!";
console.log(greetArrow());






// arrow function with one parameter

const squareArrow=x=>x*x;
console.log("square with arrow function:", squareArrow(5)); 



// arrow function with multiple parameters

const multiplyArrow=(a3,b3)=>a3*b3;
console.log("multiply with arrow function:", multiplyArrow(4, 6));  





const numbersArray=[1,2,3,4,5];

