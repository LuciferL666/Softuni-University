function solve (numbers){
    let numAsString = numbers.toString();
    let firstDigit = numAsString[0];
    let isSame = true;
    let sum = 0;

    for (let i = 0; i < numAsString.length; i++){
        if (numAsString[i] !== firstDigit){
            isSame = false
        }
        sum += Number(numAsString[i]);
    }
        console.log(isSame);
        console.log(sum);
}
solve(2222222);
solve(1234);