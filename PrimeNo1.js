let a=prompt("Enter ....")
const isPrime=(a)=>{
    if(a<=1){
        return "It is not Prime neither Composite"
    }
    for(let i=2;i<=a/2;i++){
        if(a%i==0){
            return "it is not a Prime Number"
        }
    }
    return "It is a Prime number"
}
console.log(isPrime(a))