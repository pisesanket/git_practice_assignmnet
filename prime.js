//to check number is prime or not

function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      //on this line you will have to make changes.
      count++;
    }
  }
  if (count === 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

isPrime(88);
