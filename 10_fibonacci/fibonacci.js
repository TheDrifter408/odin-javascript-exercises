const fibonacci = function(seriesIndex) {
    let sum = 0;
    let before = 0;
    let after = 1;
    let input = Number(seriesIndex);
    if (isNaN(input) || input < 0){
        return "OOPS";
    } else if(input === 0){
        return before;
    } else if(input === 1){
        return after;
    } else {
        let i = 0;
        while( i <= seriesIndex - 2){
            sum = before + after;
            before = after;
            after = sum;
            i++;
        }
    }
    return sum;
};


// Do not edit below this line
module.exports = fibonacci;
