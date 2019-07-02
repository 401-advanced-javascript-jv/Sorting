'use strict';

/**
 * mergeSort algorithm
 * @param items
 * @param {number} {leftBound}
 * @param {number} {rightBound}
 * @returns {Array}
 */
const mergeSort = (items, leftBound, rightBound) => {
  // -------------------------------------------------------------------------
  // Initialize left and right bounds of current array slice
  // -------------------------------------------------------------------------
  leftBound = leftBound === undefined ? 0 : leftBound;
  rightBound = rightBound === undefined ? items.length - 1 : rightBound;
  const length = rightBound - leftBound + 1;

  // -------------------------------------------------------------------------
  // Base cases
  // -------------------------------------------------------------------------
  if (length < 2) {
    return [items[leftBound]];
  }

  if (length === 2) {
    if (items[leftBound] <= items[rightBound]) {
      return [items[leftBound], items[rightBound]];
    }
    return [items[rightBound], items[leftBound]];
  }

  // -------------------------------------------------------------------------
  // Recursive cases
  // -------------------------------------------------------------------------

  const pivot = Math.floor(length / 2) + leftBound;

  const left = mergeSort(items, leftBound, pivot - 1);
  const right = mergeSort(items, pivot, rightBound);

  // Now we assume that left and right are sorted
  const output = [];

  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length || rightIndex < right.length) {
    if (left[leftIndex] <= right[rightIndex]) {
      output.push(left[leftIndex]);
      leftIndex++;
    } else if (left[leftIndex] > right[rightIndex]) {
      output.push(right[rightIndex]);
      rightIndex++;
    } else if (!right[rightIndex]) {
      output.push(left[leftIndex]);
      leftIndex++;
    } else if (!left[leftIndex]) {
      output.push(right[rightIndex]);
      rightIndex++;
    }
  }

  if (leftIndex === left.length && rightIndex < right.length) {
    output.push(right[rightIndex]);
  }
  if (leftIndex < left.length && rightIndex === right.length) {
    output.push(left[leftIndex]);
  }
  return output;
};

module.exports = mergeSort;
