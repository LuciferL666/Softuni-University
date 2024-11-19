document.getElementById('addProductBtn').addEventListener('click', productList)
function productList () {
    const inputPlace = document.getElementById('productInput');
    const list = document.getElementById('productList');

    let newProduct = document.createElement('li');
    newProduct.textContent = inputPlace.value;

    // Добавяне на събитие за клик върху li елемента
    newProduct.addEventListener('click', function () {
        // Зачертаване или отзачертаване на текста при кликване
        if (newProduct.style.textDecoration === 'line-through') {
            newProduct.style.textDecoration = '';  // Връщаме в нормално състояние
        } else {
            newProduct.style.textDecoration = 'line-through';  // Зачертаваме текста
        }
    });


    inputPlace.value = ''

    list.appendChild(newProduct)


}