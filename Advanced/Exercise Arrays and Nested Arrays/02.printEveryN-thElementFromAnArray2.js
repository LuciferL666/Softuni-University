function printEveryNthElement(arr, step){
    console.log(arr.filter((el, i) => {
        if(i % step === 0){
            return el
        }
    }))
}

printEveryNthElement(
    ['5',
    '20',
    '31',
    '4',
    '20'],
    2 )
    
    printEveryNthElement(
        ['dsa',
        'asd',
        'test',
        'tset'],
        2
    )
    
    printEveryNthElement(
        ['1', 
        '2', 
        '3', 
        '4', 
        '5'],
        6
    )