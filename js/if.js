function TrueOrFalse(isitrue){
    if(isitrue){
        return "it is true";
    }
    else{
        return "it's false";
    }
}

function WasThatTrue(trueornot){
    if(trueornot){
        return "it was true";
    }
    else{
        return "it wasn't true";
    }
}

console.log(TrueOrFalse(false));
console.log(WasThatTrue(true))