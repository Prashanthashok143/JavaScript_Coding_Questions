// Find palindrome  e: MOM, MADAM,1881,9009;EYE


let str="MOM"
let temp=str;
let rev="";
for(let i=str.length-1;i>=0;i--){
    rev+=str[i]
}
if(temp == rev){
    console.log(str+" is Palindrome")
}
else{
    console.log(str+" is not palindrome")
}



let str2="MADAM"
let temp2=str2;
let rev2=str2.split("").reverse().join("");
if(temp2 === rev2){
    console.log( str2+" It is a Palindrome")
}else{
    console.log(str2+" It is not palindrome")
}

