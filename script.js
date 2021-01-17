
function sum (a,b) {
 result=a+b;
}
function sub (a,b) {
    result=a-b;
}

function mult (a,b) {
    result=a*b;
}
function dev (a,b) {
    result=a/b;
}

function calculator (operator1,operator2,operand) {
   operator1 =Number (prompt ('введите 1 число'));
   operator2=Number (prompt ("введите второе число"));
   operand=prompt ("введите действие:sum=сумма,sub=вычесть,mult=умножение,dev=делить");
   if (operand=="sum") {
       sum(operator1,operator2);
   } else if (operand=="sub") {
       sub(operator1,operator2);
   } else if (operand=="mult") {
       mult (operator1,operator2);
   } else if (operand=="dev") {
       dev (operator1,operator2);
   }
   return alert(result);
}
calculator();









