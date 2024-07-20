// find missing num in an array ?


let a=[1,2,3,4,6];
let b=[];
let min=Math.min(...a);
let max=Math.max(...a);
for(let i=min;i<max;i++){
  if(!a.includes(i)){
    b.push(i)
    console.log(i)
  }  
}
console.log(b)



// if dont want to use min,max methods sort an array then take values a[0],a[length-1]