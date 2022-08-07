let first = 5;
let second = 7;
console.log(first, second);
// approach1 
// const  tamp = first;
// first = second;
// second = tamp;
// console.log(first, second)

// approach2 
[first , second] = [ second , first];
console.log(first, second)
