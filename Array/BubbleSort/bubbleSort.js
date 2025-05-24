// From lowest to highest

const arr = [5, 3, 8, 4, 2]
const bubbleSort = (arr) => {
  const arrLength = arr.length
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
      }
    }
  }
  return arr
}

console.log(`Bubble sort the given array ${arr} to the arr ${bubbleSort(arr)}`)

// Now write the optimized version of the bubble sort

const bubbleSortOptimized = (arr) => {
  const arrLength = arr.length
  let swapped
  for (let i = 0; i < arrLength; i++) {
    swapped = false
    console.log(`Pass ${i + 1}:`)
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = temp
        swapped = true
        console.log(`  Swapped ${arr[j]} and ${arr[j + 1]}`)
      }
    }
    if (!swapped) {
      console.log('  No swaps made - array is sorted!')
      break
    }
  }
  return arr
}

// Test with an already sorted array
const sortedArr = [1, 2, 3, 4, 5]
console.log('Testing with already sorted array:')
console.log(bubbleSortOptimized(sortedArr))
console.log('========================')
// Test with an unsorted array
const unsortedArr = [5, 3, 8, 4, 2]
console.log('\nTesting with unsorted array:')
console.log(bubbleSortOptimized(unsortedArr))
