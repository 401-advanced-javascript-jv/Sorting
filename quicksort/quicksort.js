'use strict';

// ----------------------------------------------------------------------------
// Swaps the two given indices in the provided array.
// ----------------------------------------------------------------------------
const _swap = (items, indexA, indexB) => {
  const temp = items[indexA];
  items[indexA] = items[indexB];
  items[indexB] = temp;
};

// ----------------------------------------------------------------------------
// Does the actual sorting and swapping
// ----------------------------------------------------------------------------
const _sortSlice = (items, leftIndex, rightIndex) => {
  let equalIndex = leftIndex;
  let highIndex = rightIndex + 1;
  const pivot = items[rightIndex];

  let i = leftIndex;
  while (i < highIndex) {
    if (items[i] < pivot) {
      _swap(items, i, equalIndex);
      equalIndex++;
      i++;
    } else if (items[i] > pivot) {
      _swap(items, i, highIndex - 1);
      highIndex--;
    } else {
      i++;
    }
  }

  return [equalIndex, highIndex];
};

// ----------------------------------------------------------------------------
// Takes the partition indices from the sorting function and calls the sort on
// each slice of the array
// ----------------------------------------------------------------------------
const _helper = (items, leftIndex, rightIndex) => {
  if (rightIndex > leftIndex) {
    const [equalIndex, highIndex] = _sortSlice(items, leftIndex, rightIndex);

    _helper(items, leftIndex, equalIndex - 1);
    _helper(items, highIndex, rightIndex);
  }
};

/**
 * Sorts an array in place and returns the modified array.
 * @param items
 * @returns {Array}
 */
const quickSort = (items) => {
  if (items.length < 2) {
    return items;
  }
  _helper(items, 0, items.length - 1);
  return items;
};

module.exports = quickSort;
