console.log('Array')
const array = [7, 12, 9, 4, 11]

// Find the minimum value in the array
function findMin(array) {
  let min = array[0]
  for (let i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
    }
    return min
  }
}
