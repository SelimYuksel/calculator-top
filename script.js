const numBtns = document.querySelectorAll(".btn-num");
const equalsBtn = document.querySelector(".btn-equals");
const clearBtn = document.querySelector(".btn-clear");
const opBtns = document.querySelectorAll(".btn-op");
const display = document.querySelector(".display");
let number1 = 0;
let number2 = 0;
let operator = "";

const add = (num1, num2) => num1 + num2;
const substract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;
const clearDisplay = () => {
    display.textContent = "";
}

const operate = (op, num1, num2) => {
    switch (op) {
        case "+":
            return add(num1, num2);
        case "-":
            return substract(num1, num2);
        case "*": 
            return multiply(num1, num2);
        case "/":
            return divide(num1, num2);
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
    clearDisplay();
});

Array.from(opBtns).forEach(btn => {
    btn.addEventListener("click", () => {
        number1 = Number(display.textContent);
        operator = btn.value;
        clearDisplay();
    });
});

equalsBtn.addEventListener("click", () => {
    number2 = Number(display.textContent);
    let result = operate(operator, number1, number2);
    display.textContent = result;
});



//kullanıcı ilk önce sayı girecek bu sayıyı tutmam lazım
//sonra + - / * neyse basacak bu operatörü de tutmam lazım 
//bastıktan sonra bir sayı daha girecek bu sayıyı da tutmam lazım
//bu tutulan değerlere göre operate fonksiyonunu çağırıcam


