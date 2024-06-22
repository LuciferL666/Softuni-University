function addItem() {
    //read input value
    const input = document.getElementById('newItemText');
    const inputValue = input.value;
    //create new <li>
    const li = document.createElement('li');
    li.textContent = inputValue;
    //obtain reference to list element
    const list = document.getElementById('items');
    //add new <li> to list
    list.appendChild(li);
    // optional clear input field
    input.value = '';
}