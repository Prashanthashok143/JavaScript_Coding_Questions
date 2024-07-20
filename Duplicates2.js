// remove duplicate elements in a given array ?

// without using any methods

let a = [1,1,2,2,2,3];


for (var i = 0; i < a.length; i++) {
  // let count = 1;
  if (a[i] !== -1) {
    for (var j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        a[j] = -1;
        // count++;
      }
    }
    // if (count > 1) {
    //   console.log(a[i] + ":" + count);
      console.log(a[i])
    //   count = 1;
    // }
    // console.log(a[i])
  }
}

// using methods

const Duplicates2 = (array3) => {
  let array4 = [];
  for (let i = 0; i < array3.length; i++) {
    if (!array4.includes(array3[i])) {     // or use indexOf() == -1
      array4.push(array3[i]);
    }
  }
  return array4;
};
let array3 = [1, 1, 2,2,3,3,4,4];
let FindDupes = Duplicates2(array3);
console.log(FindDupes);

// using new set method

const Duplicates3 = (values) => {
  return [...new Set(values)]
}
const array5=[1,2,2,3,3,4,4,5,5]
console.log(Duplicates3(array5))

// using filter method

const number=[1,1,2,2,3,3]
const DuplicatesV=number.filter((e,index,arr)=>(
     arr.indexOf(e) !== index
))
console.log(DuplicatesV);
