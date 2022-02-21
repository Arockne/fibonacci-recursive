//i number
//o nth element fibonacci series

function fibonacci(n) {
  if (n === 0) {
    return 0;
  }
  if (n === 1 || n === 2) {
    return 1;
  }
  console.log(n)

  return fibonacci(n - 1) + fibonacci(n - 2);
}

if (require.main === module) {
  // add your own tests in here
  // console.log("Expecting: 0");
  // console.log("=>", fibonacci(0));

  // console.log("");

  // console.log("Expecting: 1");
  // console.log("=>", fibonacci(2));

  // console.log("");

  // console.log("Expecting: 55");
  // console.log("=>", fibonacci(10));

  console.log(fibonacci(3))
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
