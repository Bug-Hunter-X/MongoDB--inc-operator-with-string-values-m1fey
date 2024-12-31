# MongoDB $inc operator with string values
This example demonstrates an uncommon error in MongoDB where the `$inc` operator is used incorrectly with string values. The `$inc` operator is designed to increment numeric values and using it with strings can lead to unexpected behavior and errors.

The `bug.js` file shows the incorrect usage, while `bugSolution.js` provides the corrected version.

## Bug
The bug lies in the use of strings with the `$inc` operator. The correct usage is to provide a numeric value to increment. Using strings will result in an error or unexpected results.

## Solution
The solution is to ensure that the value provided to the `$inc` operator is a number.