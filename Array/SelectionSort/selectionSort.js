const arr = [64, 25, 12, 22, 11]

const selectionSort = (arr) => {
  const arrLength = arr.length
  // Outer loop to iterate through the array
  for (let i = 0; i < arrLength; i++) {
    let minIndex = i // Assume the current index has the smallest value
    // Inner loop to find the smallest element in the unsorted part
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j // Update minIndex if a smaller element is found
      }
    }
    // Swap the smallest element with the first element of the unsorted part
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr // Return the sorted array
}

console.log(
  `Selection sort the given array ${arr} to the arr ${selectionSort(arr)}`
)
