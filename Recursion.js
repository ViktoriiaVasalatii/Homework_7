function getPow (num, degree){
    if (degree == 1){
        return num;
    }
    else{
        return num * getPow(num, degree-1);
    }
}

console.log(getPow(4,3))