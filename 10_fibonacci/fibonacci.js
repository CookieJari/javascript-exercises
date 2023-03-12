const fibonacci = function(n) {

    var prev =1;
    var cur =1;
    if (n<0) {
        return "OOPS";
    }

    for (let index = 2; index < n; index++) {
        var temp = cur;
        cur = prev+cur;
        prev = temp; 
    }

    return cur;

};

// Do not edit below this line
module.exports = fibonacci;
