function addAndRemoveElements(commands) {
    let result = [];
    let num = 1;
    commands.forEach(command => {
        command === 'add' ? result.push(num) : result.pop();
        num++;
    });
    return result.length === 0 ? 'Empty' : result.join('\n');
};

console.log(addAndRemoveElements([
    'add',
    'add',
    'add',
    'add']));
    console.log('-------------');
   console.log(addAndRemoveElements([
    'add', 
    'add', 
    'remove', 
    'add', 
    'add']));
    console.log('-------------');
   console.log(addAndRemoveElements([
    'remove', 
    'remove', 
    'remove']));