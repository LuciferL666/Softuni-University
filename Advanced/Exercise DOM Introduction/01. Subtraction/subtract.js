    function subtract() {
        const first = document.getElementById('firstNumber').value
        const second = document.getElementById('secondNumber').value

        result = Number(first) - Number(second)
        document.getElementById('result').innerText = result
    }