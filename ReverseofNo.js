let n=1234;
let res=0;
while(n>0){
    let rem=n%10;
    res=res*10+rem;
    n=Math.floor(n/10);
    
}
console.log(res)