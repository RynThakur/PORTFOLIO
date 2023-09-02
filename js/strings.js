var fname="Aryan";
var lname=" Thakur";
console.log(fname+lname);

//escaping quotes
var str="my name is \"Aryan Thakur\" and i'm 18yrs old";
console.log(str);
//alternate method
var str2='my name is "Aryan Thakur "and im 18yrs old'; 
console.log(str);
//to display both single quotes and double quotes
var str3=`'this is under single quotes and "this is under double quotes"'`;
console.log(str);

//concatenation
var s ="this is string one";
var s3 =", this is string two";

var sfin=s+s3;
console.log(sfin);

//alt1

var strfin = "this is string one "+"\nand this is string two";
console.log(strfin);

//alt2
var one ="this is first";
one += " and this is second";

console.log(one);

//length of a string
var string="this is a string";
let len =str.length;
console.log("the length of the string is "+len);

//accessing elements of a string
console.log(string[2]);

//strings are immutable, string literals cannot be changed.

string[2]="x";
console.log(string[2]); //nothing will change