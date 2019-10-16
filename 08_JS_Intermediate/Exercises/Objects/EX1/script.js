function prettyPrint(obj) {

    Object.keys(obj).forEach(function (key) {
        console.log(key + " : " + obj[key])
    });

    for(var p in obj) {
        if(obj.hasOwnProperty(p))
            console.log(p + " : " + obj[p]);
    }


}

prettyPrint(
        {
            name: 'reza',
            familyName: 'ghaderi'
        }
    );