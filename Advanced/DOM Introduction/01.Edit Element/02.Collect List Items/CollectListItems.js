function extractText() {
    const list = document.getElementById('items');
    const items = Array.from(list.children);

    const result = items
    .map(li => li.textContent)
    .join('\n');

    const output = document.getElementById('result');

    output.value = result;
}

//Second
// function extractText() {
//     const list = document.querySelectorAll('li');
//     const items = Array.from(list)

//     const result = items
//     .map(li => li.textContent)
//     .join('\n');

//     const output = document.getElementById('result');

//     output.value = result;
// }

//third
// function extractText() {
//     const items = Array.from(document.querySelectorAll("li"));
//     const result = items.map((e) => e.textContent).join("\n");
  
//     document.getElementById("result").value = result;
//   }