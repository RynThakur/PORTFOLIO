//equality operator

function isEqual(num){
    if(num==12){
        return "equal";
    }
    else{
        return "not equal";
    }
}
console.log(isEqual(10));

//strict equality opt

function IsEqual(num){
    if(num===12){
        return "equal";
    }
    else{
        return "not equal";
    }
}
console.log(IsEqual('12'));
console.log(IsEqual(12));
console.log(isEqual('12'));

// so the main diff b/w eq opt and strict eq opt is strict eq opt does not do type conversions
//i.e 3===3 true, 3==='3' false, 3==3 true, 3=='3' false.

//in-equality operator



