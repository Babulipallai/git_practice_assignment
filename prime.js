// Check whether the number is prime or not?

let num = 67;
let count =0;

for (let i=1; i<=num; i++) {
 

    if (num%i===0) {
        
        count++;
    }
}
if (count===2) {
    
    console.log(num, "is the prime number");
}
else{

    console.log(num, "is not a prime number");
}