function addFunction(){
  let resultSum = 0;
    return function (number){
        console.log(resultSum+=number);
    }
}
const sum = addFunction();
sum(3);
sum(5);
sum(20);

