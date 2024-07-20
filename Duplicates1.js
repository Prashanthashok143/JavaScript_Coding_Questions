// Find Duplicate elements in a given array ?

const Duplicates = (array1) => {
  let array2 = [];
  for (var i = 0; i < array1.length; i++) {
    let count = 0;
    if (array1[i] != -1) {
      for (var j = i + 1; j < array1.length; j++) {
        if (array1[i] == array1[j]) {
          array1[j] = -1;
          count++;
        }
      }
      if (count <=0) {
        array2.push(array1[i]);
       
      }
    }
  }
  return array2;
};
let array1 = [1, 2, 3, 2, 3, 4, 3, 3];
let FindDupe = Duplicates(array1);
console.log(FindDupe);

// just replace the >= as <= to get unique numbers;

function removeDuplicates(arr) {
  return [...new Set(arr)];
}

let arrayWithDuplicates = [1, 2, 2, 3, 4, 4, 5, 6, 6, 7];
let uniqueArray = removeDuplicates(arrayWithDuplicates);

console.log(uniqueArray); // Output: [1, 2, 3, 4, 5, 6, 7]
