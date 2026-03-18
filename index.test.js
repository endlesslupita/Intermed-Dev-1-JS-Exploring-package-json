const { factorial } = require('./index');

// Normal cases
test('factorial of 5 is 120', () => {
  expect(factorial(5)).toBe(120);
});

test('factorial of 4 is 24', () => {
  expect(factorial(4)).toBe(24);
});

test('factorial of 3 is 6', () => {
  expect(factorial(3)).toBe(6);
});

// Edge cases
test('factorial of 0 is 1', () => {
  expect(factorial(0)).toBe(1);
});

test('factorial of 1 is 1', () => {
  expect(factorial(1)).toBe(1);
});

test('factorial of a negative number throws an error', () => {
  expect(() => factorial(-3)).toThrow('Input must be a non-negative integer');
});

test('factorial of a decimal throws an error', () => {
  expect(() => factorial(2.5)).toThrow('Input must be a non-negative integer');
});
