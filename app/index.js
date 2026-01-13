/**
 * Main application entry point
 */

const calculator = require('./calculator');

console.log('=== Calculator Test ===\n');

// Test addition (this will fail due to bug)
console.log('Testing add(5, 3):');
const result1 = calculator.add(5, 3);
console.log(`Expected: 8, Got: ${result1}`);
console.log(result1 === 8 ? '✓ PASS' : '✗ FAIL\n');

// Test subtraction
console.log('Testing subtract(10, 4):');
const result2 = calculator.subtract(10, 4);
console.log(`Expected: 6, Got: ${result2}`);
console.log(result2 === 6 ? '✓ PASS' : '✗ FAIL\n');

// Test multiplication
console.log('Testing multiply(15, 5):');
const result10 = calculator.multiplyByMaahi(15, 5);
console.log(`Expected: 75, Got: ${result10}`);
console.log(result10 === 75 ? '✓ PASS' : '✗ FAIL\n');

// Test Mulitplication
console.log('Testing multiplication(5, 3):');
const result3 = calculator.multiply(5, 3);
console.log(`Expected: 15, Got: ${result3}`);
console.log(result3 === 15 ? '✓ PASS' : '✗ FAIL\n');

// Test multiplication
console.log('Testing multiplication(5, 6):');
const result4 = calculator.multiplication(5, 6);
console.log(`Expected: 30, Got: ${result4}`);
console.log(result4 === 30 ? '✓ PASS' : '✗ FAIL\n');


// Test MultiplyBySourabh
console.log('Testing multiplyBySourabh(10, 10):');
const newResult = calculator.multiplyBySourabh(10, 10);
console.log(`Expected: 100, Got: ${newResult}`);
console.log(newResult === 100 ? '✓ PASS' : '✗ FAIL\n');



console.log('=== End of Tests ===');

