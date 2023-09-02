//we are going to make a queue

function NextInLine(arr,item){
    arr.push(item);
    x=arr.shift()
    return x;
}
var testarr=[1,2,3,4,5,6,7,8,9]
console.log("Array before "+JSON.stringify(testarr));
NextInLine(testarr,10);
console.log("previosly first item: ",x);
console.log("Array After: "+JSON.stringify(testarr));