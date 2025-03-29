// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

// *Solution 1*
// function fizzBuzz(n) {
//   for (let i = 1; i <= n; i++) {
//     if ( i % 3 === 0 && i % 5 === 0 ) {
//        console.log('fizzbuzz');
//    } else if ( i % 3 === 0) {
//        console.log('fizz');
//    } else if ( i % 5 === 0) {
//        console.log('buzz');
//    } else {
//        console.log(i);
//    }
//   }
// }

// *Solution 2*
function fizzBuzz(n) {
  if (n <= 0) {
    return;
  }

  fizzBuzz(n - 1);

  let output = '';

  if (n % 3 === 0) {
    output += 'fizz';
  }
  if (n % 5 === 0) {
    output += 'buzz';
  }
  
  console.log(output || n);
}

// function fizzBuzz(n) {}


module.exports = fizzBuzz;
