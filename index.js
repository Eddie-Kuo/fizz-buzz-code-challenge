// Fizz Buzz

// Task
// The program prints 1 to 100.
// Each number that is evenly divisible by 3, instead of writing the number, write fizz.
// If the number is evenly divisible by 5, instead of writing the number, write buzz.
// If the number is evenly divisible by both 3 and 5, instead of writing the number or fizz or buzz, write fizzbuzz.

//Learning Objective
// Learn how to implement FizzBuzz, a common interview challenge.
// Learn about the modulo operator (%).
// Learn some common questions that arise in technical interviews and how to answer them.
// Grow more comfortable with technical interviews, and having your code reviewed under a technical interview setting.

// console.log(i);

for (let i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) console.log('FizzBuzz');
  else if (i % 3 === 0) console.log('Fizz');
  else if (i % 5 === 0) console.log('Buzz');
  else console.log(i);
}
