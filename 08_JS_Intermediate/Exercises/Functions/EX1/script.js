var x = function factorial(n) {
    var tmp = 1;
    for(var i=2;i<=n;i++){
        tmp *= i;
    }
    return tmp;
};

console.log(x(5));