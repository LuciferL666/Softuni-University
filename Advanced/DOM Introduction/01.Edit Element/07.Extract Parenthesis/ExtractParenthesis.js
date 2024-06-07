function extract(contentId) {
    const pattern = /\((.+?)\)/g;
    
    const text = document.getElementById(contentId).textContent;
    
    const matches = Array.from(text.matchAll(pattern));

    const results = matches.map(match => match[1]).join('; ');

    alert(results);
}