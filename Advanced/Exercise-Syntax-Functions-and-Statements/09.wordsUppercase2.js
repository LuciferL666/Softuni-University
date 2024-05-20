function wordsUppercase(text){
    console.log(text.match(/\w+/g).join(', ').toUpperCase());
    };
    wordsUppercase('hello!')
    wordsUppercase('Hi, how are you?')