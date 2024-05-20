function wordsUppercase(text){
pattern = (text.match(/\w+/g).join(', ').toUpperCase());
console.log(pattern);
};
wordsUppercase('hello!')
wordsUppercase('Hi, how are you?')