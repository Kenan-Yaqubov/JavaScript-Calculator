let input = document.getElementById('screen');
let darkModeBtn = document.getElementById('dark')
let numArr = [];
let sign;
let answer;

function press(btn) {
    if (input.value.length > 9) {
        alert("It is maximum characters!");
    } else {
        if (btn.innerText === '+' || btn.innerText === '-' || btn.innerText === '*' || btn.innerText === '/') {
            input.value = "";
            sign = btn.innerText;
            input.value += btn.innerText;
        } else if (input.value === '+' || input.value === '-' || input.value === '*' || input.value === '/') {
            input.value = "";
            input.value += btn.innerText;
            numArr[1] = input.value;
        } else if (btn.innerText === '=') {
            if (numArr[1] === undefined) {
                input.value = input.value;
            } else {
                const num1 = Number(numArr[0]);
                const num2 = Number(numArr[1]);
                console.log(num1 + num2);
                console.log(sign);
                if (sign === '+') {
                    answer = num1 + num2;
                } else if (sign === '-') {
                    answer = num1 - num2;
                } else if (sign === '*') {
                    answer = num1 * num2;
                } else if (sign === '/') {
                    if (num2 === 0) {
                        alert("Division by zero!");
                        return;
                    }
                    answer = num1 / num2;
                }
                input.value = answer;
                numArr = [];
                numArr.push(answer.toString());
            }
        } else {
            input.value += btn.innerText;
            if (sign === undefined) {
                numArr[0] = input.value;
            } else {
                numArr[1] = input.value;
            }
        }
    }
}

console.log(numArr);

function darkMode() {

    if (darkModeBtn.innerText == 'Dark mode') {
        darkModeBtn.innerText = 'Light mode';
        darkModeBtn.classList.add('darkBtn')
        document.querySelector('body').classList.add('darkBody');
        document.querySelector('.main').classList.add('darkMain');
        document.querySelectorAll('.mainDiv > button').forEach(button => {
            button.classList.add('dark');
        });
        input.classList.add('darkInput');
    } else {
        darkModeBtn.innerText = 'Dark mode';
        darkModeBtn.classList.remove('darkBtn')
        document.querySelector('body').classList.remove('darkBody');
        document.querySelector('.main').classList.remove('darkMain');
        document.querySelectorAll('.mainDiv > button').forEach(button => {
            button.classList.remove('dark');
        });
        input.classList.remove('darkInput');
    }

}
