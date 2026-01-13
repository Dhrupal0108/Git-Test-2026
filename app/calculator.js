/**
 * Simple Calculator Module
 * Provides basic arithmetic operations
 */

function add(a, b) {
    // BUG: This is incorrect - should return a + b
    return a - b;
}

function subtract(a, b) {
    return a - b;
}

function multiplication(a,b){
    //new multiplication feature is add
return a*b;
}

module.exports = {
    add,
    subtract,
    multiplication
};

