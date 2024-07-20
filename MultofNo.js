function sumofNum(no){
    let sum=1;
    while(no>0){
                         // for(i=no;i>0;i=no)
        let rem=no%10;
        sum*=rem;
        no=Math.floor(no/10)
    }
    return sum;
}
let no=124;
console.log(sumofNum(no))