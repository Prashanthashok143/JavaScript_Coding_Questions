function sortArrays(arr1,arr2){

    let arr3=[...arr1,...arr2];
    for(let i=0;i<arr3.length;i++){
        for(let j=i+1;j<arr3.length;j++){
            if(arr3[i]>arr3[j]){
                let temp=arr3[i];
                arr3[i]=arr3[j];
                arr3[j]=temp;
            }
        }
    }
    return arr3;
}
let arr1=[3,2,1];
let arr2=[6,5,4];
console.log(sortArrays(arr1,arr2))


// without loops and uisng compare function in sort

// function sortArrays(arr1,arr2){

//     let arr3=[...arr1,...arr2].sort((a,b)=>(
//         a-b))
    
//     return arr3;
// }
// let arr1=[3,2,1];
// let arr2=[6,5,4];
// console.log(sortArrays(arr1,arr2))