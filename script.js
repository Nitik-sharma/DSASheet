// bubble sort

// const bubbleSort = (arr) => {
//   const n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (j = 0; j < n - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return arr;
// };

// const ans = bubbleSort([89, 90, 87, 68, 100, 57]);
// console.log("ans", ans);

// Selection short

const selectionShort = (arr) => {
  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < n; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
};

console.log(selectionShort([90, 87, 199, 40, 50]));
