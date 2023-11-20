num = 90
// Check which quadrant the number belongs to
var quadrant;
if (num >= 1 && num <= 25) {
  // If the number is between 1 and 25, it is in quadrant 1
  quadrant = 1;
} else if (num >= 26 && num <= 50) {
  // If the number is between 26 and 50, it is in quadrant 2
  quadrant = 2;
} else if (num >= 51 && num <= 75) {
  // If the number is between 51 and 75, it is in quadrant 3
  quadrant = 3;
} else if (num >= 76 && num <= 100) {
  // If the number is between 76 and 100, it is in quadrant 4
  quadrant = 4;
}

// Output the result in the format of "(Number variable) is in quadrant (its quadrant)"
console.log(num + " is in quadrant " + quadrant);