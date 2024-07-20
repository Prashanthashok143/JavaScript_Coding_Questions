// Find Even or Odd number from an array

const a=[1,2,3,4,5];
for(let i=0;i<a.length;i++){
    if(a[i]%2==0){
        console.log(`${a[i]} is Even Number`)
    }
    else{
        console.log(`${a[i]} is Odd Number`)
    }
}


// with methods

const b=[1,2,3,4,5]
const c=b.filter((e)=>(
    e%2==0
))

const d=b.filter((e)=>(
    e%2!==0
))
console.log(c)
console.log(d)