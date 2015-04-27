var PromptInput = prompt("Please enter a number - The console will then print out numbers 1 to your number");
n = parseInt(PromptInput);

// FizzBuzz function
// Increment numbers 1 to whatever is entered by user
function fizzbuzz(n) {
  for ( i = 1; i < n + 1; i++) 
  
  //if divisible by three and five, write fizzbuzz
  if ( i % 3===0 && i % 5===0) {
    console.log("FIZZBUZZ");
  }
  
  //if divisible by five, write BUZZ
  else if (i % 5===0) {
    console.log("BUZZ");
  }
  
  //if divisible by five, write fizz
  else if (i % 3===0) {
    console.log("FIZZ");
  }
  
  else {
    console.log(i);
  }
  
}

fizzbuzz(n);

