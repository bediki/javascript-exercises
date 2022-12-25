const removeFromArray = function(firstArray, ...theArgs) {
    for (const element of theArgs) {
        for (const number of firstArray) {
            if(number === element){
                const index = firstArray.indexOf(element);
                const x = firstArray.splice(index, 1);
            }
        }
    }
    return firstArray;
};

removeFromArray([1, 2, 3, 4], 1, 2, 4)


// Do not edit below this line
module.exports = removeFromArray;
