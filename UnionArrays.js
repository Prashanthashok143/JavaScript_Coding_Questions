function UnionofArrays(arr1,arr2){
    for(let i=0;i<arr2.length;i++){
        if(!arr1.includes(arr2[i])){
            arr1.push(arr2[i])
        }
    }
    return arr1;
}
let arr1=[1,2,3];
let arr2=[2,3,4];
console.log(UnionofArrays(arr1,arr2))

// [ 1, 2, 3, 4 ] pushing into arr1 insted of creating an new array;
 // if we want to create a new array with modified values

//  function UnionofArrays(arr1,arr2){
//     let Union=[];
//     for(let j=0;j<arr1.length;j++){
//         if(!Union.includes(arr1[j])){
//             Union.push(arr1[j])
//         }
//     }
//      for(let i=0;i<arr2.length;i++){
//          if(!Union.includes(arr2[i])){
//              Union.push(arr2[i])
//          }
//      }
//      return Union;
//  }
//  let arr1=[1,2,3];
//  let arr2=[2,3,4];
//  console.log(UnionofArrays(arr1,arr2))