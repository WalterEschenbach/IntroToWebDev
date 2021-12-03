function countingCharacters(str){
    console.log(`${str} has ${str.length} characters.`)
}
function countingCharacters2(str, cToFind){
    var c = 0;
    for(var i = 0; i < str.length; i++){
        if(str[i]==cToFind){
            c++;
        }
    }
    console.log('String to search in: ' + str);
    console.log('Character to find: ' + cToFind );
    console.log('Number of times the character appears: ' + c );
}
