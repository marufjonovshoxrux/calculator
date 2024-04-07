let a = +prompt("Число 1")
let operator = prompt("/*-+")
let b = +prompt("Число 2")

switch (operator) {
    case "+":
        alert(a + b)
        break;
    case "*":
        alert(a * b)
        break;
    case "/":
        alert(a / b)
        break;
    case "-":
        alert(a - b)
        break;

       
    

    default:
        break;
}