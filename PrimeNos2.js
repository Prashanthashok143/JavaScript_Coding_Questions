// find no of Prime numbers i from 1 to 100;

let noofPrimes=0;
let count=[];
for(let i=0;i<=100;i++){
    if(isPrime(i)){
    count.push(i)
    noofPrimes++;
    }
}
console.log(count) // prime numbers
console.log(count.length)  // prime number count in count array
console.log(noofPrimes)  // no of prime numbers using icrement
function isPrime(a){
    if(a<=1){
        return false
    }
    for(let i=2;i<=a/2;i++){
        if(a%i==0){
            return false;
        }
    }
    return true
}


// if we want count no of elements