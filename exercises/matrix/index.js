// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  let results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let count = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    for ( let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = count;
      count++
    }

    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = count;
      count++;
    }
    endColumn--; 

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = count;
      count++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = count;
      count++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
