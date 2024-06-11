function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const tdList = Array.from(document.querySelectorAll('tr'));

   let input = document.getElementById('searchField');
   
   function onClick() {
      for(const item of tdList) {
         item.classList.remove('select');
         if(item.innerHTML.includes(input.value)) {
            item.className = 'select';
         }
      }
      input.value = '';
   }
}