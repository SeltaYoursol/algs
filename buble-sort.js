// неоптимальная простая реализация
const bubbleSort = (arr) => {
  let length = arr.length

  while (length != 0) {
    let max_index = 0;
    for (let i = 0; i < length; i++) {
      if (arr[i - 1] > arr[i]) {

        const temp = arr[i - 1]
        arr[i - 1] = arr[i]
        arr[i] = temp
        max_index = i
      }
    }
    length = max_index
  }
  return arr
}

console.log(bubbleSort([8, 8, 6, 4, 9, 1, 10, 22]))
