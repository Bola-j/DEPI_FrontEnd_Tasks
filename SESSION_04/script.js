function sumNumbers(num1, num2) {
    return Number(num1) + Number(num2);
}

function calculateExpression(expression) {
    var result = eval(expression);
    alert("You entered: " + expression + ", and the result is: " + result);
}
