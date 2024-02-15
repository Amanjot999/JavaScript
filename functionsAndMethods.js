let n = prompt("Enter Size Of Array");
let a = [];
for(let i = 0 ;i<n;i++){
    a[i] = parseInt(prompt(`Enter element ${i+1}`)); // Convert input to integer
}
const sum = a.reduce((res,curr)=>{
    return res + curr;
}, 0); // Initialize accumulator with 0
console.log(sum);
const product = a.reduce((res,curr)=>{
    return res*curr;
}, 1); // Initialize accumulator with 1 for multiplication
console.log(product);
