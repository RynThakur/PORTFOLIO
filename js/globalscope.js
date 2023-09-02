var glb;
function fun1(x){
    if(typeof(x)!="undefined"){
        console.log("this is a global variable");
    }
    else{
        console.log("undefined");
    }
}
fun1(glb);

// as glb is declared outside any function block, it is global variable
// temp is declared under the fun2, it's local variable to fun2 and won't be recognized by fun1
// if we declare a variable inside a function block without using var keyword, it will become global
function fun2(){
    var temp;
}
fun1(temp);
