# Bubble Sort Algorithm

Bubble Sort is one of the simplest sorting algorithms that works by repeatedly swapping adjacent elements if they are in the wrong order. The algorithm gets its name from the way smaller elements "bubble" to the top of the list.

## How Bubble Sort Works

1. Start from the first element of the array
2. Compare the current element with the next element
3. If the current element is greater than the next element, swap them
4. Move to the next element and repeat steps 2-3
5. Continue this process until the end of the array
6. Repeat the entire process for each element until the array is sorted

## Time Complexity

- **Best Case**: O(n) - When the array is already sorted
- **Average Case**: O(n²) - When the array is randomly ordered
- **Worst Case**: O(n²) - When the array is sorted in reverse order

## Space Complexity

- O(1) - Bubble Sort is an in-place sorting algorithm as it doesn't require any additional space

## Implementation

### Standard Bubble Sort

```javascript
const bubbleSort = (arr) => {
  const arrLength = arr.length;
  for (let i = 0; i < arrLength; i++) {
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
```

### Optimized Bubble Sort

The optimized version of Bubble Sort includes a flag to check if any swaps were made during a pass. If no swaps are made, it means the array is already sorted, and we can break out of the loop early.

```javascript
const bubbleSortOptimized = (arr) => {
  const arrLength = arr.length;
  let swapped;
  
  for (let i = 0; i < arrLength; i++) {
    swapped = false;
    
    for (let j = 0; j < arrLength - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // Swap elements
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    
    // If no swaps were made, array is sorted
    if (!swapped) {
      break;
    }
  }
  
  return arr;
}
```

## Advantages of Bubble Sort

1. Simple to understand and implement
2. Works well for small datasets
3. Stable sorting algorithm (maintains relative order of equal elements)
4. In-place sorting (requires O(1) additional space)

## Disadvantages of Bubble Sort

1. Poor performance on large datasets
2. Not suitable for real-world applications with large data
3. Even in the best case, it still requires O(n) comparisons

## When to Use Bubble Sort

- When the dataset is small
- When the array is nearly sorted
- When simplicity is more important than efficiency
- When memory space is a concern (in-place sorting)

## Example Usage

```javascript
// Test with an unsorted array
const unsortedArr = [5, 3, 8, 4, 2];
console.log(bubbleSortOptimized(unsortedArr)); // Output: [2, 3, 4, 5, 8]

// Test with an already sorted array
const sortedArr = [1, 2, 3, 4, 5];
console.log(bubbleSortOptimized(sortedArr)); // Output: [1, 2, 3, 4, 5]
```

## Visual Representation

```
Initial Array: [5, 3, 8, 4, 2]

Pass 1:
[3, 5, 8, 4, 2] - Swap 5 and 3
[3, 5, 4, 8, 2] - Swap 8 and 4
[3, 5, 4, 2, 8] - Swap 8 and 2

Pass 2:
[3, 4, 5, 2, 8] - Swap 5 and 4
[3, 4, 2, 5, 8] - Swap 5 and 2

Pass 3:
[3, 2, 4, 5, 8] - Swap 4 and 2

Pass 4:
[2, 3, 4, 5, 8] - Swap 3 and 2

Final Sorted Array: [2, 3, 4, 5, 8]
```

## Optimized vs Standard Bubble Sort

The optimized version of Bubble Sort is more efficient because:
1. It can detect if the array is already sorted and stop early
2. It reduces the number of unnecessary comparisons
3. It performs better on nearly sorted arrays

In the worst case, both versions have the same time complexity, but the optimized version performs better in the best case scenario (O(n) vs O(n²)).
