//elements of an array can be any data type.
var myarr=["aryan",17];

//nested array

var nestarr=[["aryan", 17], ["arnav",13]];
console.log(nestarr[1]);

//arrays are mutable

var mutArr=[12,13,14,11,10,9,15,16,17,8,7,6];
mutArr[3]=9999;
console.log(mutArr);

//accessing multidimensional arrays

var multArr=[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]];
console.log(multArr[0][3]);
