/**
 * Simple Calculator Module
 * Provides basic arithmetic operations
 */

function add(a, b) {
    // BUG: This is incorrect - should return a + b
<<<<<<< HEAD
    return a - b;
=======
    return a + b;
>>>>>>> d1c4190d98c4d5e5f9ab17bb4e425e87b4e7ff0b
}

function subtract(a, b) {
    return a - b;
}
<<<<<<< HEAD

function multiplication(a,b){
    //new multiplication feature is add
return a*b;
=======
function multiplyByMaahi(a, b){
    return a * b;
>>>>>>> d1c4190d98c4d5e5f9ab17bb4e425e87b4e7ff0b
}

function multiply(a, b){
    return a * b;
}

function multiplication(a, b){
    return a * b;
}

function multiplyBySourabh(a,b){
 return a* b;
}




module.exports = {
    add,
    subtract,
    multiplyByMaahi,    
    multiply,
    multiplication,
    multiplyBySourabh
    
};

