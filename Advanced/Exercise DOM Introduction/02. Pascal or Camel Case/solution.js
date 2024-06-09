function solve() {
  const text = document.getElementById('text').value;
   const convention = document.getElementById('naming-convention').value;
   const textArray = text.split(' ');
   let res = ''

   if(convention == 'Camel Case'){
    textArray.forEach((e, i) => {
      if(i === 0){
        return res += e.toLowerCase();
      }else{
        return res += e[0].toUpperCase() + e.substring(1).toLowerCase()
      }
    });
   }else if (convention == 'Pascal Case'){
    textArray.forEach((e, i) =>{
      e = e.toLowerCase();
      res += e[0].toUpperCase() + e.substring(1);
    })
   }else {
    res = 'Error!'
   }
   document.getElementById('result').textContent = res
}