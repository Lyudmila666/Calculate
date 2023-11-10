const $display = document.getElementById('display'),         // imput
$btn = document.querySelectorAll('.btn');                    // button  собираем все узлы

let calculation = []
let accumalate;

function calculate(btn) {
    let value = btn.innerText;
     
    if(value === 'AC') {

        calculation = [];
        $display.value = '';

     } else if (value === '←') {  

        calculation.pop()                                              // Если в pop() ничего не писать он уберет последний элемент
        $display.value = calculation.join('')

     } else if (value === '=') {

        $display.value = eval(accumalate)     

     } else if (value === '%') {

        $display.value = parseFloat(calculation.join(''))/100
        calculation = [];

     } else {
        calculation.push(value)                                        // push - добавить в конец массива
        accumalate = calculation.join('');
        $display.value = accumalate;
     }
}

// [btn, btn, btn, btn] псевдо массив перебирает => передаем данные функции calculate после клика

$btn.forEach(button => button.addEventListener('click', ()=>calculate(button)))

const calculate2 = {
    sum: '+',
    subtraction:'-',
    div: '/',
    mult: '*'
}

function calc({a,b,operation}) {
    if(calculate2.sum === operation) {
        sum(a,b)
    } else if(calculate2.subtraction === operation) {
        subtr(a,b)
    } else if(calculate2.div === operation) {
        div(a,b)
    } else if(calculate2.mult === operation) {
        mult(a,b)
    }
}

function sum(a,b) {
    return a + b
}

function subtr(a,b) {
    return a - b
}

function div(a,b) {
    return a / b
}

function mult(a,b) {
    return a * b
}


$btn.forEach(button => button.addEventListener('click', ()=>calc({a,b,operation})))