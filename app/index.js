/**
 * Main application entry point
 */

const calculator = require('./calculator');

console.log('=== Calculator Test ===\n');

// Test addition (this will fail due to bug)
console.log('Testing add(5, 3):');
const result1 = calculator.add(15, 31);
console.log(`Expected: 8, Got: ${result1}`);
console.log(result1 === 8 ? '✓ PASS' : '✗ FAIL\n');

calculator.additional(11,35);

// Test subtraction
console.log('Testing subtract(10, 4):');
const result2 = calculator.subtract(110, 43);
console.log(`Expected: 6, Got: ${result2}`);
console.log(result2 === 6 ? '✓ PASS' : '✗ FAIL\n');

// Test Multiplication

console.log('Testing multiplication(5, 6):');
const result3 = calculator.multiplication(5, 6);
console.log(`Expected: 30, Got: ${result3}`);
console.log(result3 === 30 ? '✓ PASS' : '✗ FAIL\n');


// Test multiply
console.log('Testing multiply(4, 8):');
const result4 = calculator.multiply(4, 8);
console.log(`Expected: 32, Got: ${result4}`);
console.log(result4 === 32 ? '✓ PASS' : '✗ FAIL\n');


// Test MultiplyBySourabh
console.log('Testing multiplyBySourabh(10, 10):');
const newResult = calculator.multiplyBySourabh(10, 10);
console.log(`Expected: 100, Got: ${newResult}`);
console.log(newResult === 100 ? '✓ PASS' : '✗ FAIL\n');



console.log('=== End of Tests ===');

