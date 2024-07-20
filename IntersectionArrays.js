function InterSectionofArrays(arr1,arr2){
    let Interesection=[];
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(arr1[i]===arr2[j]){
                if(!Interesection.includes(arr1[i])){
                    Interesection.push(arr1[i])
                }
            }
        }
    }
    return Interesection;
}
let arr1=[1,2,3,4];
let arr2=[3,4,5,6];
console.log(InterSectionofArrays(arr1,arr2))