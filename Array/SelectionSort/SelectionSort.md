# Selection Sort Algorithm

## Definition
Selection Sort is a simple comparison-based sorting algorithm. It divides the input array into two parts: the sorted part and the unsorted part. Initially, the sorted part is empty, and the unsorted part contains all the elements. The algorithm repeatedly selects the smallest (or largest, depending on sorting order) element from the unsorted part and moves it to the sorted part.

## How It Works
1. Start with the first element in the array.
2. Find the smallest element in the unsorted part of the array.
3. Swap the smallest element with the first element of the unsorted part.
4. Move the boundary of the sorted part one step to the right.
5. Repeat the process until the entire array is sorted.

## Pseudocode
```
SelectionSort(array)
    for i = 0 to array.length - 1
        minIndex = i
        for j = i + 1 to array.length - 1
            if array[j] < array[minIndex]
                minIndex = j
        Swap array[i] with array[minIndex]
```

## Implementation (JavaScript)
```javascript
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        // Find the minimum element in the unsorted part
        let minIndex = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // Swap the found minimum element with the first element
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
    return arr;
}

// Example usage
let array = [64, 25, 12, 22, 11];
let sortedArray = selectionSort(array);
console.log("Sorted array:", sortedArray);
```

## Complexity Analysis
- **Time Complexity**:
  - Best Case: O(n²) (No early termination as all elements are compared)
  - Average Case: O(n²)
  - Worst Case: O(n²)
- **Space Complexity**: O(1) (In-place sorting)
- **Stability**: Not stable (Relative order of equal elements may change)

## Advantages
- Simple to implement.
- Does not require additional memory.

## Disadvantages
- Inefficient for large datasets due to O(n²) time complexity.
- Not stable by default.

## Applications
- Useful for small datasets.
- Suitable when memory usage is a concern, as it is an in-place sorting algorithm.

