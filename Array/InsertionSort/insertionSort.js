let array = [12, 11, 13, 5, 6]

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i]
    let j = i - 1
    if (arr[j] <= key) {
      continue
    }
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = key
  }
  return arr
}

console.log(`Insertion sort of ${array} is: ${insertionSort(array)}`)
