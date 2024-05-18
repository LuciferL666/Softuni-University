function days (month, year){
    return new Date(year, month, 0).getDate();   
}
days(1, 2015)