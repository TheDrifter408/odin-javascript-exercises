const reverseString = function(string) {
    let reversed = "";
    if(string === ""){
        return reversed;
    } else {
        reversed = string.split("").reverse().join("");
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
