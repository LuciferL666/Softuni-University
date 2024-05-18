function days (month, year){
    return new Date(year, month, 0).getDate();
    
}
let result = days(month, year);
console.log(result);
days(1, 2015)