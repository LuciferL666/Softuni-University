function sortBy2Criteria(arr) {
    return arr.sort((a, b) => {
        return a.length - b.length || a.localeCompare(b)
    }).join("\n")
}

sortBy2Criteria(
['alpha',
'beta',
'gamma'] 
)

sortBy2Criteria(
    ['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']
)