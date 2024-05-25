function listOfNames(arrOfNames){
    arrOfNames.sort((a, b) => a.localeCompare(b))
    .forEach((res, i) => console.log(`${i+1}.${res}`))
}
listOfNames(
    ["John",
    "Bob",
    "Christina",
    "Ema"] )