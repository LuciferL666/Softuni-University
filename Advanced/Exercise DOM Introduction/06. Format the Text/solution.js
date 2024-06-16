function solve() {
  let input = document.getElementById('input').value;
  let output = document.getElementById('output');
  output.innerHTML = '';
  let arrayText = input.split('.').filter(x => x.length > 0);

  for(let i = 0; i < arrayText.length; i += 3){
    let res = []
    for (let x = 0; x < 3; x++){
      if(arrayText[i + x]){
        res.push(arrayText[i+x]);   
      }
    }
    let resText = res.join('. ') + '.'
    output.innerHTML += `<p>${resText}</p>`
  }
}


//other solution with while
// function solve() {
//   let input = document.getElementById('input').value;
//   let output = document.getElementById('output');

//   let sentance = input.split('.').filter((s) => s.length !== 0);

//   while (sentance.length > 0){
//     let textParagraph = sentance.splice(0, 3).join('. ') + '.';
//     let p = document.createElement('p');
//     p.textContent = textParagraph
//     output.appendChild(p)
//   }
// }