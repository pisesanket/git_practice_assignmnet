//to check number is prime or not

<<<<<<< m2_code_fix
function isPrime(num) {
  let count = 0;
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      //on this line you will have to make changes.
      count++;
=======
function isPrime(num){
    let count=0;
    for(let i=1;i<=Math.sqrt(num);i++){
        if(num%i==0) //made the changes.
        {
            count++;
        }
    }
    if(count==1){
        console.log("yes");
    }
    else{
        console.log("no");
>>>>>>> main
    }
  }
  if (count === 2) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

isPrime(88);
