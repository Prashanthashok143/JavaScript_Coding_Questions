function sumofNum(no){
    let sum=0;
    while(no>0){
        // for(i=no;i>0;i=no)
        let rem=no%10;
        sum+=rem;
        no=Math.floor(no/10)
    }
    return sum;
}
let no=123;
console.log(sumofNum(no))