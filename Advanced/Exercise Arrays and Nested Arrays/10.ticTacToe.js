function ticTacToe(input) {
    let initDashboard = [
        [false, false, false],
        [false, false, false],
        [false, false, false]
    ]
    let isFirstPlayer = true;
    for(let coordinates of input){
        let [x, y] = coordinates.split(' ');

        if (initDashboard[x][y]){
            console.log("This place is already taken. Please choose another!");
            continue;
        }
        let marker = isFirstPlayer ? "X" : "O";
        initDashboard[x][y] = marker;

        for(let i = 0; i < initDashboard.length; i++){
            if (initDashboard[i][0] === marker && //по дължина на реда
                initDashboard[i][1] === marker &&
                initDashboard[i][2] === marker
            ){
                console.log(`Player ${marker} wins!`);
                initDashboard.forEach(row => console.log(row.join("\t")));
                return;
            } else if (initDashboard[0][i] === marker && //по колона
                       initDashboard[1][i] === marker &&
                       initDashboard[2][i] === marker
            ){
                console.log(`Player ${marker} wins!`); //диагонал
                initDashboard.forEach(row => console.log(row.join("\t")));
                return;
            } else if (initDashboard[0][0] === marker &&
                       initDashboard[1][1] === marker &&
                       initDashboard[2][2] === marker){
                console.log(`Player ${marker} wins!`);
                initDashboard.forEach(row => console.log(row.join("\t")));
                return;
            } else if (initDashboard [0][2] === marker && //диагонал
                       initDashboard [1][1] === marker &&
                       initDashboard [2][0] === marker){
                console.log(`Player ${marker} wins!`);
                initDashboard.forEach(row => console.log(row.join("\t")));
                return;
            }
        }
            let isFreeSpace = false;
        for(let row = 0; row < initDashboard.length; row++){
            for(let col = 0; col < initDashboard[row].length; col++){
                if(!initDashboard[row][col]){
                    isFreeSpace = true;
                    break;
                }
            }
            if(isFreeSpace){
                break;
            }
        }
        if(!isFreeSpace){
            console.log("The game ended! Nobody wins :(");
            initDashboard.forEach(row => console.log(row.join("\t")));
            break;
        }
           isFirstPlayer = !isFirstPlayer;
    }
}

ticTacToe(
["0 1",
"0 0",
"0 2",
"2 0",
"1 0",
"1 1",
"1 2",
"2 2",
"2 1",
"0 0"]);