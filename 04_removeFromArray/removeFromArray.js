const removeFromArray = function(array,...args) {
    let allArgs = Array.from(args);
    for(let i = 0;i<allArgs.length;i++){
        for(let j=0;j<array.length;j++){
            if(array.includes(allArgs[i])){
                let index = array.indexOf(allArgs[i]);
                array.splice(index,1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
