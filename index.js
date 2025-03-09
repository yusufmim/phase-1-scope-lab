// Write your solution in this file!
// 1. Declare a global variable customerName using var
var customerName = "bob";

// 2. Function to uppercase the global customerName variable
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Function to set a global bestCustomer variable
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicit global variable
}

// 4. Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// 5. Declare a constant leastFavoriteCustomer
const leastFavoriteCustomer = "someone annoying";

// 6. Function to attempt changing leastFavoriteCustomer (which should cause an error)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "someone else"; // This will cause an error
}
