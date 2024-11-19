function deleteByEmail() {
    //read input value
    const query = document.querySelector('input[name="email"]').value

    //get all rows
    const rows = document.querySelectorAll('#customers tbody tr');
    const rowsArray = Array.from(rows);

    let deleted = false;
    // iterate rows and compare content to input
    for (let row of rowsArray){
       const col = row.children[1];

       if(col.textContent == query){
        //remove matching row
        row.remove();
        deleted = true;
       }
    }
    document.getElementById('result').textContent = deleted ? 'Deleted.' : 'Not found.'
}

// function deleteByEmail() {
//     //read input value
//     const query = document.querySelector('input[name="email"]').value;

//     //get all rows
//     const rows = document.querySelectorAll('#customers tbody tr');
//     const rowsArray = Array.from(rows);

//     const match = rowsArray.find(row => row.children[1].textContent == query);

//     if(match) {
//         match.remove()
//         document.getElementById('result').textContent = 'Deleted.';
//     }
//     document.getElementById('result').textContent = 'Not found.';
// }


// function deleteByEmail() {
//     let emailElement = document.querySelector('input[name="email"]');
//     let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');
//     let found = false;

//     for (const tdElement of emailCellElements) {
//         if (tdElement.textContent === emailElement.value) {
//             tdElement.parentElement.remove(); // Премахва целия ред (родителският елемент на td е tr)
//             found = true;
//         }
//     }

//     let resultElement = document.getElementById('result');
//     if (found) {
//         resultElement.textContent = 'Deleted.';
//     } else {
//         resultElement.textContent = 'Not found.';
//     }
// }


// function deleteByEmail() {
//     let emailInputElement = document.querySelector('input[name="email"]');
//     let emailCellElements = document.querySelectorAll('tr td:nth-of-type(2)');

//     let emailElement = Array.from(emailCellElements);
//     let targetElement = emailElement.find(x => x.textContent == emailInputElement.value);

//     targetElement.parentNode.remove()

// }