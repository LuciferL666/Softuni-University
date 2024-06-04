function storeCatalogue(data) {
    catalog = {}
   
    for (const el of data) {
        let [productName, productPrice] = el.split(' : ');
        catalog[productName] = productPrice;
    }
    let sorted = Object.entries(catalog).sort((a, b) => a[0].localeCompare(b[0]));
    let firstLetter = ''
    for (const [productName, productPrice] of sorted) {
        if(productName[0] != firstLetter){
            firstLetter = productName[0];
            console.log(productName[0]);
        }
        console.log(`  ${productName}: ${productPrice}`);
    }
}

storeCatalogue([
    "Appricot : 20.4",
    "Fridge : 1500",
    "TV : 1499",
    "Deodorant : 10",
    "Boiler : 300",
    "Apple : 1.25",
    "Anti-Bug Spray : 15",
    "T-Shirt : 10",
]);