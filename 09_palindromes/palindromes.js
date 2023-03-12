const palindromes = function (str) {

    
    var regPat=/[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(regPat,"");
    return str == str.toLowerCase().replace(regPat,"").split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
