// Find the Sum of all elements in array

const a=[1,2,3,4,5];
const Sum=(a)=>{
    let sum=0;
    for(let i=0;i<a.length;i++){
    sum+=a[i];
    }
    return sum;
}
console.log(Sum(a))


// with methods


const b=[1,2,3,4]
const c=b.reduce((pre,cur)=>(
    pre+cur
))
console.log(c)
