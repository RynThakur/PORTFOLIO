var global = 273;
console.log(global);
function myfun(){
    var global=770;
    console.log(global);
}
myfun();
//here we have a global variable and local variable of the same name, in such conditions,
// local var >> global var