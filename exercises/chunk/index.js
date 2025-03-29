// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// *Solution 1*
// function chunk(array, size) {
//   let chunk = [];

//   for (let element of array) {
//     const last = chunk[chunk.length - 1]

//     if (!last || last.length === size) {
//       chunk.push([element]);
//     } else {
//       last.push(element);
//     }
//   }

//   return chunk;
// }


// *Solution 2*
function chunk(array, size) {
  let chunk = [];
  let index = 0;

  while (index < array.length) {
    chunk.push(array.slice(index, index + size));
    index += size;
  }

  return chunk;
}


module.exports = chunk;
