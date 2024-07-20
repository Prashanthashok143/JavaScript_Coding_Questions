// find the second largest number

// Using Sort Method and Compare function
const numbers = [9, 8, 2, 1];
const Sorted = numbers.sort((a, b) => b - a);
const Second = Sorted[1];
console.log(Second);

//

let Num=[9,8,7,6,5,4,3,2,1]
for(let i=0;i<Num.length;i++){
  for(let j=i+1;j<Num.length;j++){
    if(Num[i]<Num[j]){
        let temp=Num[i];
        Num[i]=Num[j];
        Num[j]=temp;
    }
  }
}
console.log(Num[1]) 

//  sorted in desc and taken second largest number
