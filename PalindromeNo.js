let n=121;
let temp=n;
let res=0;
while(n>0){
    let rem=n%10;
    res=res*10+rem;
    n=Math.floor(n/10);
    
}
if(temp === res){
    console.log("Palindrome");
}else{
    console.log("Not")
}