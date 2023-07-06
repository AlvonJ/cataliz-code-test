// Alvon Jovanus Chandra

// Recursive function to calculate minimum steps depends on the discs.
const howManySteps = discs => {
  if (discs === 0) return 0;

  return 2 * howManySteps(discs - 1) + 1;
};

// Example 3 discs
console.log(`Minimum number of steps for 3 disks: ${howManySteps(3)}`);
// Example 4 discs
console.log(`Minimum number of steps for 4 disks: ${howManySteps(4)}`);
// Example 5 discs
console.log(`Minimum number of steps for 5 disks: ${howManySteps(5)}`);
