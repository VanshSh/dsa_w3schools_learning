// QuickSort implementation in JavaScript with step-by-step explanations

// The main function that implements QuickSort
function quickSort(arr, low, high) {
  // Step 1: Check if the array has more than one element
  if (low < high) {
    // Step 2: Partition the array and get the pivot index
    let pi = partition(arr, low, high)
    // Step 3: Recursively sort elements before and after partition
    quickSort(arr, low, pi - 1) // Sort left part
    quickSort(arr, pi + 1, high) // Sort right part
  }
}

// This function takes last element as pivot, places the pivot element at its correct position
// in sorted array, and places all smaller (smaller than pivot) to left of pivot and all greater to right
function partition(arr, low, high) {
  let pivot = arr[high] // Step 1: Choose the last element as pivot
  let i = low - 1 // Step 2: Index of smaller element
  for (let j = low; j < high; j++) {
    // Step 3: If current element is smaller than or equal to pivot
    if (arr[j] <= pivot) {
      i++ // Increment index of smaller element
      // Step 4: Swap arr[i] and arr[j]
      ;[arr[i], arr[j]] = [arr[j], arr[i]]
    }
  }
  // Step 5: Swap arr[i+1] and arr[high] (or pivot)
  ;[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]]
  return i + 1 // Return the partitioning index
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5]
console.log('Original array:', arr)
quickSort(arr, 0, arr.length - 1)
console.log('Sorted array:', arr)

/*
Explanation of steps:
1. quickSort is called with the full array.
2. partition finds the correct position for the pivot (last element),
   and arranges all smaller elements to the left and larger to the right.
3. quickSort is called recursively for the left and right subarrays.
4. The process repeats until the array is sorted.
*/
