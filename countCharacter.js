function countCharacter(str){
    let charCount={};
    for(let i=0;i<str.length;i++){
        let char=str[i];
        if(charCount[char]){
            charCount[char]+=1;
        }else{
            charCount[char]=1;
        }
    }
    return charCount;
}
let str="Prashanth";
console.log(countCharacter(str))