// console.log("CONNECTED");


// Farenhite to Celcius HOMEWORK
function FarToCel (celcius){
    let result = celcius * 1.8 + 32;
    return result;
}

function CelToFar (farenhite){
    let result = (5/9) * (farenhite - 32);
    return result;
}
 let personChoice = prompt("Press F for Farenhite or press C for Celcius");
 let personInput = parseInt(prompt("Please enter value"));

 if(personChoice === "F"){
 console.log(`${CelToFar(personInput)}C`)
 }  else if(personChoice === "C"){
	console.log(`${FarToCel(personInput)}F`);
} else {
	console.log("ERROR!");
}

// Calculating your age HOMEWORK

//Forgot howold you are 
//Forgot how old you are? Calculate it!

// Write a function named calculateAge that: DONE
// takes 2 arguments: birth year, current year. done
// calculates the age based on those years.
// outputs the result to the screen like so: "You are NN years old"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.
// Time to accomplish: 15 minutes.

function calculateAge(){
    let birthYear = prompt("When were you born?");
    console.log(`I was born in ${birthYear}`);
    
    let currentYear = prompt("What year is it today?");
    console.log(`Today is ${currentYear}`);

    let calculateAge = currentYear - birthYear;
    console.log(`You are ${calculateAge} years old`);

}
calculateAge(calculateAge);



// OFFICIAL HOMEWORK #1 Returning the type of the parametar

function parametars (type){
    console.log(`This is a ${type}`);
    return type;
   
}

let numero = 23;

let person = { 
    name: 'John',
    age: 20
}

parametars("String");
parametars(typeof Number(numero));
parametars(true);
parametars();
parametars(person)

