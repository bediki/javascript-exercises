const reverseString = function(string) {

    let stringArray = string.split('');
    console.log(stringArray.reverse().join(""));

};

reverseString("hello world");

// Do not edit below this line
module.exports = reverseString;
