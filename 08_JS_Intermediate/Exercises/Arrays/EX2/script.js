function isUniform(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[0] !== arr[i])
            return false;
    }
    return true;
}

console.log(isUniform([5, 5, 5, 5, 5]));
