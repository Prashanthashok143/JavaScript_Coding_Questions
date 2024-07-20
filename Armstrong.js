function Armstrong(no){
    let temp=no;
let noLen=no.toString().length;
let sum=0;
while(no>0){
    let rem=no%10;
    let pow=Math.pow(rem,noLen);
    sum+=pow;
    no=Math.floor(no/10);
}
if(temp===sum){
    return true;
}
else{
    return false;
}

}
let no=153;
console.log(Armstrong(no));