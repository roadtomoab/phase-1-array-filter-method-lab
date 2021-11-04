
function findMatching(array, driver) {
    let matchingNames = array.filter(item => item.toLowerCase() === driver.toLowerCase());
    return matchingNames;
}

function fuzzyMatch(array, driver) {
    let startsWithSameLetters = array.filter(item => item === driver.startsWith(driver));
    return startsWithSameLetters;
}

function matchName(array, driver) {
    let matchingNames2 = array.filter(item => item.name === driver.name);
    return matchingNames2;
}


// fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, 
// and returns all drivers whose names begin with the provided letters.

// matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: 
// name and hometown. The function should return each element whose name property matches the provided string argument.