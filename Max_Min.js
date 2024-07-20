// find largest number in the given array

let arr1 = [1, 40, 2, 110];
let arr2 = arr1[1];
for (let i = 0; i < arr1.length; i++) {
  if (arr1[i] > arr2) {
    arr2 = arr1[i];
  }
}
console.log(arr2);

// find smallest number in the given array

let arr3 = [1, 40, 2, 110, -10];
let arr4 = arr3[1];
for (let i = 0; i < arr3.length; i++) {
  if (arr3[i] < arr4) {
    arr4 = arr3[i];
  }
}
console.log(arr4);

// using reducer function MAx number

const arr5 = [1, 0, 88, 9];
const arr6 = arr5.reduce((pre, cur) => (pre > cur ? pre : cur));
console.log(arr6);


// using reducer function MIN number;


const arr7=[1,-10,5]
const arr8=arr7.reduce((pre,cur)=>(
    pre>cur?cur:pre
))
console.log(arr8)
