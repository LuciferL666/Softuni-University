function solve () {
    const buttons = document.querySelectorAll('.calculator-buttons .btn');
    const display = document.getElementById('display');

    let currentInput = ''
    let firstOperand = null;
    let operator = null;
    let shouldResetDisplay = false;

    buttons.forEach(button => {
        button.addEventListener('click', onClick);
    });

    function onClick() {
        const button =  event.target; // get specific button
        const value = button.dataset.value; // get value of the button its better then take it with innerHTML
        const action = button.dataset.action; // use for = and c

        if(action === 'clear'){
            clear();
        } else if (action === calculate){
            calculate();
        } else if (button.classList.contains('operator')){
            chooseOperator(value);
        } else {
            appendNumber(value);
        }
    }

    function clear(){
        let currentInput = ''
        let firstOperand = null;
        let operator = null;
        let shouldResetDisplay = false;
        display.value = '';
    }

    function calculate(){
        if (firstOperand === null || operator === null){
            return;
        }

        let secondOperand = parseFloat(currentInput) // use for calculator more often remove string from a number and use only the number if there has no number return NaN
        if (isNaN(secondOperand)) return;

        let result = 0;

        switch (operator){
            case '+':
                result = firstOperand + secondOperand;
                break;
            case '-':
                result = firstOperand - secondOperand;
                break;
            case '*':
                result = firstOperand * secondOperand;
                break;
            case '/':
                if (secondOperand === 0){
                    display.value = ('Cannot divide by zero');
                    return;
                }
                result = firstOperand / secondOperand;
                break;
            default:
                return; 
        }

        display.value = result;
        currentInput = result.toString();
        firstOperand = null;
        operator = null;
        shouldResetDisplay = true;
    }

    function chooseOperator(selectedOperator) {

        if (currentInput === ''){
            return;
        }

        if(operator !== null){
            calculate();
        }

        firstOperand = parseFloat(currentInput);
        operator = selectedOperator
        shouldResetDisplay = true;
    }

    function appendNumber(number){
        if (shouldResetDisplay){
            currentInput = '';
            shouldResetDisplay = false;
        }

        if(number === '.' && currentInput.includes('.')){
            return;
        }

        currentInput += number;
        display.value = currentInput
    }
}

solve();