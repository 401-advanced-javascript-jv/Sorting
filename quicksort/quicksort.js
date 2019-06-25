"use strict";

const _swap = (items, indexA, indexB) => {
  const temp = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = temp;
};

const _slice = (items, leftIndex, rightIndex) => {
  const pivotIndex = rightIndex;
  let firstHighIndex = leftIndex;

  for (let i = leftIndex; i < rightIndex; i++) {
    if (items[i] < items[pivotIndex]) {
      _swap(items, i, firstHighIndex);
      firstHighIndex++;
    }
  }

  _swap(items, pivotIndex, firstHighIndex);
  return firstHighIndex;
};

const _helper = (items, leftIndex, rightIndex) => {
  // if (rightIndex - leftIndex <= 10) {
  //   // insertionSort(items);
  // }
  if (rightIndex > leftIndex) {
    // For now, assume that partition returns the pivot's index
    const sliceIndex = _slice(items, leftIndex, rightIndex);

    _helper(items, leftIndex, sliceIndex - 1);
    _helper(items, sliceIndex + 1, rightIndex);
  }
};

const quicksort = items => {
  _helper(items, 0, items.length - 1);
};

let array = [5,9,4,6,8,2,5,7,7,7,2,6,4,1,1,8,2,6,8,2,5,9,2,4,2,6,3,4,7,7,2,7,8];
quicksort(array);
console.log(array);

array = [4, 3];
quicksort(array);
console.log(array);

array = [9, 8, 7, 13, 6, 20, 6, 2, 9];
quicksort(array);
console.log(array);
