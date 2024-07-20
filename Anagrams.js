function countCharacter(str){
let charCount={};
for(let i=0;i<str.length;i++){
    let char=str[i];
    if(charCount[char]){
        charCount[char]+=1;
    }
    else{
        charCount[char]=1;
    }
}
return charCount;
}
function Anagrams(str1,str2){
    if(str1.length!==str2.length){
        return false;
    }
    let char1=countCharacter(str1);
    let char2=countCharacter(str2);
    for(let char in char1){
        if(char1[char] !==char2[char]){
            return false;
        }
    }
    return true;
}
let str1="listen";
let str2="silent";
console.log(Anagrams(str1,str2))