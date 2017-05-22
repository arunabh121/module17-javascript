'use strict';

/* In the space below, implement the classic "Fizzbuzz" program. The program
   should work as follow:

   > Write a program that prints the numbers from 1 to 100. But for multiples of
   three, print "Fizz" instead of the number. For multiples of five, print "Buzz"
   instead of the number. For numbers which are multiples of both three and five,
   print "FizzBuzz".
*/

var count = 0; 
while (count<101){
	if (count%3 == 0 && count%5 !== 0){
		console.log('Fizz');
	}

	else if (count%5 == 0 && count%3 !== 0){
		console.log('Buzz');
	}
	else if (count%3 == 0 && count%5 == 0){
		console.log('FizzBuzz');
	}
	else{
		console.log(count);
	}
	count++;
}