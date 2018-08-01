/*
Intermediate Algorithm Scripting: Sum All Primes

Sum all the prime numbers up to and including the provided number.
A prime number is defined as a number greater than one and having only two divisors, one and itself. 
For example, 2 is a prime number because it's only divisible by one and two.
The provided number may not be a prime.
*/


function sumPrimes(num) {
  let primes = [2];

  for (let p = 3; p <= num; p++) {
    if (!primes.some(previousPrime => p % previousPrime == 0)) {
      primes.push(p);
    }
  }
  
  return primes.reduce((a,b) => a +b);
}

sumPrimes(10);
