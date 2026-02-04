//biggest number in the array
const array=[12,34,67,18,9,8]
let max=0;
for(let i=0;i<array.length;i++) {
    if(array[i]>max) {
        max=array[i];
    }
}
console.log("Biggest number in array" + max);
