let a="p";
if(a=="a" || a =="e" || a== "i" || a=="o" || a=="u"){
    console.log(`${a} is vowel`)
}
else{
    console.log(`${a} is not vowel`)
}




let string="Prashanth";
for(let i=0;i<string.length;i++){
    if(string[i]=="a" || string[i] =="e" || string[i]== "i" || string[i]=="o" || string[i]=="u"){
        console.log(`${string[i]} is vowel`)
    }
    else{
        console.log(`${string[i]} is not vowel`)
    }
}


// find vowels
const isVowels=(str)=>{
let vowles=["a","e","i","o","u"]
let findVowles=[];
for(let i=0;i<str.length;i++){
    if(vowles.includes(str[i])){
        findVowles.push(str[i])
    }
}
return findVowles;

}
let str="Prashanth"
console.log(isVowels(str))




