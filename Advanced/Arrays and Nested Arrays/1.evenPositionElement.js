function evenPositionElement(array) {
    result = '';

    for(let i = 0; i < array.length; i++){
        if(i % 2 == 0){
            result += array[i] + ' ';
        }
    }
    console.log(result);
}

evenPositionElement(['20', '30', '40', '50', '60'])
evenPositionElement([5, 10])