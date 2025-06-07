# QuickSort Algorithm

## Definition
QuickSort is a highly efficient, comparison-based, divide-and-conquer sorting algorithm. It works by selecting a 'pivot' element from the array and partitioning the other elements into two sub-arrays, according to whether they are less than or greater than the pivot. The sub-arrays are then sorted recursively.

## How It Works
1. Choose a pivot element from the array (commonly the last element).
2. Partition the array so that all elements less than the pivot are on the left, and all elements greater are on the right.
3. Recursively apply the above steps to the sub-arrays of elements with smaller and greater values.
4. The base case of the recursion is arrays of size 0 or 1, which are already sorted.

## Pseudocode
```
QuickSort(array, low, high)
    if low < high
        pi = Partition(array, low, high)
        QuickSort(array, low, pi - 1)
        QuickSort(array, pi + 1, high)

Partition(array, low, high)
    pivot = array[high]
    i = low - 1
    for j = low to high - 1
        if array[j] <= pivot
            i = i + 1
            swap array[i] with array[j]
    swap array[i + 1] with array[high]
    return i + 1
```

## Implementation (JavaScript)
```javascript
function quickSort(arr, low, high) {
  if (low < high) {
    let pi = partition(arr, low, high);
    quickSort(arr, low, pi - 1);
    quickSort(arr, pi + 1, high);
  }
}

function partition(arr, low, high) {
  let pivot = arr[high];
  let i = low - 1;
  for (let j = low; j < high; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }
  [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
  return i + 1;
}

// Example usage:
let arr = [10, 7, 8, 9, 1, 5];
console.log('Original array:', arr);
quickSort(arr, 0, arr.length - 1);
console.log('Sorted array:', arr);
```

## Complexity Analysis
- **Time Complexity**:
  - Best Case: O(n log n)
  - Average Case: O(n log n)
  - Worst Case: O(n²) (when the smallest or largest element is always chosen as the pivot)
- **Space Complexity**: O(log n) (due to recursion stack)

## Key Points
- QuickSort is generally faster in practice than other O(n log n) algorithms like Merge Sort and Heap Sort.
- It is an in-place sort (does not require extra storage).
- The choice of pivot and partitioning method can affect performance.

## Example Walkthrough
Given array: [10, 7, 8, 9, 1, 5]
1. Choose pivot (5). Partition: [1] [5] [10, 7, 8, 9]
2. Recursively sort left and right subarrays.
3. Continue until all subarrays are size 0 or 1.
4. Result: [1, 5, 7, 8, 9, 10]
