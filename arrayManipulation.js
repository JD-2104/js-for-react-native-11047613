// TASK 1
function processArray(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return number * number;
        } else {
            return number * 3;
        }
    });
}




// TASK 2
function formatArrayStrings(stringsArray, numbersArray) {
    if (stringsArray.length !== numbersArray.length) {
        throw new Error("Arrays must have the same length");
    }

    for (let i = 0; i < stringsArray.length; i++) {
        const string = stringsArray[i];
        const number = numbersArray[i];

        if (number % 2 === 0) {
            stringsArray[i] = string.toUpperCase(); 
        } else {
            stringsArray[i] = string.toLowerCase(); 
        }
    }

    return stringsArray;
}

module.exports = {
    processArray,
    formatArrayStrings
};

