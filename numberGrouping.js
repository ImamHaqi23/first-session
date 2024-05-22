/*
Kelompokkan angka dalam 3 nested array.
1. Index 0 mengelompokkan angka genap
2. Index 1 mengelompokkan angka ganjil
3. Index 2 mengelompokkan angka yang bisa dibagi 3
*/

function numberGrouping(numbers) {
  // Code here
  const genap = [];
  const ganjil = [];
  const bagi3 = [];

  numbers.forEach((num) => {
    if (num % 2 === 0) {
      genap.push(num);
    } else {
      ganjil.push(num);
    }

    if (num % 3 === 0) {
      bagi3.push(num);
    }
  });

  console.log([genap, ganjil, bagi3]);
}

numberGrouping([1, 2, 4, 6, 8]); // Output: [[2, 4, 8], [1], [6]]
