function addItem() {
 //read input value
 const text = document.getElementById('newItemText').value;
    
 //create new <li>
 const li = document.createElement('li');
 li.textContent = text;

 const deleteBtn = document.createElement('a');
 deleteBtn.href = '#';
 deleteBtn.textContent = '[Delete]';

 deleteBtn.addEventListener('click', () => li.remove());

 li.appendChild(deleteBtn);

 //obtain reference to list element
 const list = document.getElementById('items');

 //add new <li> to list 
 list.appendChild(li)
 
}

// function addItem() {
//     //read input value
//     const text = document.getElementById('newItemText').value;
   
//     //create new <li>
//     const li = document.createElement('li');
//     li.textContent = text;
   
//     const deleteBtn = document.createElement('a');
//     deleteBtn.href = '#';
//     deleteBtn.textContent = '[Delete]';
   
//     deleteBtn.addEventListener('click', del);
   
//     li.appendChild(deleteBtn);
   
//     //obtain reference to list element
//     const list = document.getElementById('items');
   
//     //add new <li> to list 
//     list.appendChild(li)
    
//     function del() {
//        li.remove()
//     }
//    }