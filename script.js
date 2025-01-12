const numBtns = document.querySelectorAll(".btn-num");
const equalsBtn = document.querySelector(".btn-equals");
const clearBtn = document.querySelector(".btn-clear");
const opBtns = document.querySelectorAll(".btn-op");
const display = document.querySelector(".display");

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;

const operate = (op, num1, num2) => {
    switch (op) {
        case "+":
            add(num1, num2);
            break;
        case "-":
            substract(num1, num2);
            break;
        case "*": 
            multiply(num1, num2);
            break;
        case "/":
            divide(num1, num2);
        default:
            break;
    }
}

Array.from(numBtns).forEach(btn => {
    btn.addEventListener("click", () => {
        display.textContent += btn.value;
    });
});

clearBtn.addEventListener("click", () => {
    display.textContent = "";
});


