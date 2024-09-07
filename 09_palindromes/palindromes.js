const palindromes = function (word) {
    let isPalindrome = false;
    let filtered = word.split("").filter((char) => {
        return (char !== '!' && char !== "," && char !== " " && char !== ".");
    }).join("").toLowerCase();
    let reversed = filtered.split("").reverse().join("");
    if(reversed === filtered){
        isPalindrome = true;
    }
    return isPalindrome;
};

// Do not edit below this line
module.exports = palindromes;
