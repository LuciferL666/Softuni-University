document.getElementById('addTaskBtn').addEventListener('click', addList)
function addList () {
    let inputPlace = document.getElementById('taskInput');
    let list = document.getElementById('taskList');

    let newElement = document.createElement('li');
        newElement.textContent = inputPlace.value;

        let deleteBtn = document.createElement('button')
        deleteBtn.textContent = 'Delete';
        deleteBtn.onclick = function () {
            newElement.remove();
        }
        
        inputPlace.value = ''
        
        newElement.appendChild(deleteBtn)
        list.appendChild(newElement);
}