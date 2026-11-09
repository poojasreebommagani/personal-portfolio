
function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

console.assert(
    isValidEmail("student@example.com") === true,
    "Test 1 failed: Valid email"
);

console.assert(
    isValidEmail("studentexample.com") === false,
    "Test 2 failed: Missing @"
);

console.assert(
    isValidEmail("student@") === false,
    "Test 3 failed: Missing domain"
);

console.log("Email validation tests completed.");
