# Insertion Sort Algorithm

## Definition
Insertion Sort is a simple and intuitive comparison-based sorting algorithm. It builds the sorted array one element at a time by repeatedly picking the next element from the unsorted part and inserting it into its correct position in the sorted part.

## How It Works
1. Start with the second element (index 1) in the array, as the first element is already considered sorted.
2. Compare the current element with the elements in the sorted part of the array (to its left).
3. Shift all elements in the sorted part that are greater than the current element one position to the right.
4. Insert the current element into its correct position in the sorted part.
5. Move to the next element in the unsorted part and repeat the process until the entire array is sorted.
****
## Pseudocode
```
InsertionSort(array)
    for i = 1 to array.length - 1
        key = array[i]
        j = i - 1
        while j >= 0 and array[j] > key
            array[j + 1] = array[j]
            j = j - 1
        array[j + 1] = key
```

## Implementation (JavaScript)
```javascript
function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        // Store the current element as the key
        let key = arr[i];
        let j = i - 1;

        // Check if the array is already sorted
        if (arr[j] <= key) {
            continue; // Skip to the next iteration if no shifting is needed
        }

        // Shift elements of the sorted part to the right
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j--;
        }

        // Insert the key into its correct position
        arr[j + 1] = key;
    }
    return arr;
}

// Example usage
let array = [12, 11, 13, 5, 6];
let sortedArray = insertionSort(array);
console.log("Sorted array:", sortedArray);
```

## Complexity Analysis
- **Time Complexity**:
  - Best Case: O(n) (When the array is already sorted)
  - Average Case: O(n²)
  - Worst Case: O(n²) (When the array is sorted in reverse order)
- **Space Complexity**: O(1) (In-place sorting)
- **Stability**: Stable (Relative order of equal elements is preserved)

## Advantages
- Simple to implement.
- Efficient for small datasets or nearly sorted arrays.
- Stable sorting algorithm.

## Disadvantages
- Inefficient for large datasets due to O(n²) time complexity.

## Applications
- Useful for small datasets.
- Suitable for scenarios where the array is already partially sorted.
- Often used as a building block in more advanced algorithms like Timsort.