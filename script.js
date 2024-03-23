const proVersions = document.querySelectorAll('.proVersion');
let input = document.getElementById('screen');
let darkModeBtn = document.getElementById('dark')
let numArr = [];
let sign;
let answer = 1;

function press(btn) {
    if (input.value == 0) {
        input.value = "";
    }
    if (btn.innerText === '+' || btn.innerText === '-' || btn.innerText === '*' || btn.innerText === '/' || btn.innerText === '%' || btn.innerText === '^' || btn.innerText === '1/x' || btn.innerText === 'n!' || btn.innerText === '√' || btn.innerText === 'cos' || btn.innerText === 'tan' || btn.innerText === 'log' || btn.innerText === 'exp' || btn.innerText === 'sin') {
        input.value = "";
        sign = btn.innerText;
        if (sign === '1/x') {
            input.value = `1 / ${numArr[0]}`
        } else if (sign === 'n!') {
            input.value = `${numArr[0]}!`
        } else if (sign === '√') {
            input.value = `√${numArr[0]}`
        } else if (sign === 'sin') {
            input.value = `${sign}(${numArr[0]})`
        } else if (sign === 'cos') {
            input.value = `${sign}(${numArr[0]})`
        } else if (sign === 'tan') {
            input.value = `${sign}(${numArr[0]})`
        } else if (sign === 'log') {
            input.value = `${sign}(${numArr[0]})`
        } else if (sign === 'exp') {
            input.value = `${sign}(${numArr[0]})`
        } else {
            input.value += btn.innerText
        }
    } else if (input.value === '+' || input.value === '-' || input.value === '*' || input.value === '/' || input.value === '%' || input.value === '^') {
        input.value = "";
        if (btn.innerText === 'AC') {
            sign = undefined;
            numArr = []
            input.value = 0;
        } else if (btn.innerText === 'C' || btn.innerText === 'CE') {
            input.value = numArr[0];
            sign = undefined;
        } else {
            input.value += btn.innerText;
        }
        numArr[1] = input.value;
    } else if (btn.innerText === '=') {
        if (numArr[1] === undefined && sign != '1/x' && sign != 'n!' && sign != '√' && sign != 'exp' && sign != 'log' && sign != 'tan' && sign != 'sin' && sign != 'cos') {
            input.value = input.value;
        } else {
            input.value = "";
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
            } else if (sign === '%') {
                answer = (num1 / num2) * 100
            } else if (sign === '^') {
                answer = num1 ** num2
            } else if (sign === '1/x') {
                answer = 1 / num1
            } else if (sign === 'n!') {
                for (let i = 1; i <= num1; i++) {
                    answer *= i;
                }
            } else if (sign === '√') {
                answer = Math.sqrt(num1)
            } else if (sign === 'cos') {
                let radians = num1 * (Math.PI / 180);
                answer = Math.cos(radians);
            }
            else if (sign === 'sin') {
                let radians = num1 * (Math.PI / 180);
                answer = Math.sin(radians)
            } else if (sign === 'tan') {
                let radians = num1 * (Math.PI / 180);
                answer = Math.tan(radians)
            } else if (sign === 'log') {
                answer = Math.log10(num1)
            } else if (sign === 'exp') {
                answer = Math.exp(num1)
            }
            input.value = answer;
            answer = 1;
            numArr = [];
            numArr.push(answer.toString());
        }
    } else if (btn.innerText === 'AC') {
        sign = undefined;
        numArr = []
        input.value = 0;
    } else if (btn.innerText === 'C') {
        if (sign === undefined) {
            input.value = input.value.slice(0, -1);
            numArr[0] = input.value;
        } else {
            input.value = input.value.slice(0, -1);
            numArr[1] = input.value;
        }
    } else if (btn.innerText === 'CE') {
        if (sign === undefined) {
            input.value = 0;
            numArr[0] = input.value;
        } else {
            input.value = 0;
            numArr[1] = input.value;
        }
    } else if (btn.innerText === 'π') {
        input.value += btn.innerText;
        if (sign === undefined) {
            numArr[0] = 3.14159265359;
        } else {
            numArr[1] = 3.14159265359;
        }
    } else {
        input.value += btn.innerText;
        if (sign === '+' || sign === '-' || sign === '/' || sign === '*' || sign === '%' || sign === '^') {
            numArr[1] = input.value;
        } else {
            numArr[0] = input.value;
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

document.getElementById('more').addEventListener('click', function more() {
    if (proVersions[0].style.display === 'none') {
        proVersions.forEach(element => {
            element.style.display = 'block';
            element.style.backgroundColor = 'chartreuse';
        });
        input.style.width = '490px';
    } else {
        proVersions.forEach(element => {
            element.style.display = 'none';
        });
        input.style.width = '325px';
    }
})

window.addEventListener('resize', () => {
    if (window.innerWidth < 560) {
        proVersions.forEach(element => {
            element.style.display = 'none';
        });
        input.style.width = '325px';
        document.getElementById('more').disabled = true;
    }else{
        document.getElementById('more').disabled = false;

    }
});
