function previousDay(year, month, day){
    let pattern = `${year}/${month}/${day}`
    let myData = new Date(pattern);
    myData.setDate(myData.getDate() - 1);
    
    console.log(`${myData.getFullYear()}-${myData.getMonth() + 1}-${myData.getDate()}`);
}
previousDay (2016, 9, 30)
previousDay (2016, 10, 1)