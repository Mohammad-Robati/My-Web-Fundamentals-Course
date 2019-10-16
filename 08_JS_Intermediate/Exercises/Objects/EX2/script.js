function charCount(str) {
    var obj = {};
    for(var i=0; i<str.length; i++) {
        if(obj.hasOwnProperty(str[i].toLowerCase())){
            obj[str[i].toLowerCase()]++;
        } else {
            obj[str[i].toLowerCase()] = 1;
        }
    }
    return obj
}

console.log(charCount('Salam'));