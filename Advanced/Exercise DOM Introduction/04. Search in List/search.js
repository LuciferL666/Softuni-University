function search() {
   const towns = Array.from(document.querySelectorAll('li'));
   const searchText = document.getElementById('searchText').value.toLowerCase();
   let count = 0;

   for(const item of towns){
      let text = item.textContent.toLocaleLowerCase();

      if(text.includes(searchText)){
         item.style.textDecoration = 'underline';
         item.style.fontWeight = 'bold';
         count++
      }else {
         item.style.textDecoration = 'none';
         item.style.fontWeight = '';
      }
   }
   document.getElementById('result').textContent = `${count} matches found`;
}
