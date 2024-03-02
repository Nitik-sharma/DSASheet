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

// const selectionShort = (arr) => {
//   const n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     let minIndex = i;
//     for (let j = i + 1; j < n; j++) {
//       if (arr[j] < arr[minIndex]) {
//         minIndex = j;
//       }
//     }
//     if (minIndex !== i) {
//       [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
//     }
//   }
//   return arr;
// };

// console.log(selectionShort([90, 87, 199, 40, 50]));

// Insertion sort

// const InsertionSort = (arr) => {
//   let n = arr.length;

//   for (let i = 0; i < n; i++) {
//     const key = arr[i];
//     let j = i - 1;

//     while (j >= 0 && arr[j] > key) {
//       arr[j + 1] = arr[j];
//       j--;
//     }
//     arr[j + 1] = key;
//   }
//   return arr;
// };

// console.log("Insertion short", InsertionSort([10, 9, 8, 7, 6, 14]));

// Sort method in js

const arr = ["Purple", "red", "apple", "Bannana", "orange"];

const ans = arr.sort();
console.log(ans);

const num = [3, 56, 81, 18, 19];
const ans1 = num.sort();
console.log("ANS1", ans1);

const comparision = (a, b) => {
  return a - b;
};
const nm1 = [3, 56, 81, 18];
const people = [
  {
    name: "nitik",
    age: 22,
  },
  {
    name: "Sahil",
    age: 24,
  },
  {
    name: "Rohit",
    age: 26,
  },
  {
    name: "Shivam",
    age: 21,
  },
];
const ageComprasion = (a, b) => {
  return a.age - b.age;
};
const ans2 = nm1.sort(comparision);
const ans3 = people.sort(ageComprasion);
console.log("ANS2", ans2);
console.log("Age-->", ans3);
