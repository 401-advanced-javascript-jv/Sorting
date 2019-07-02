# Sorting Algorithms - Merge Sort and Quicksort

An implementation of the quicksort algorithm

## Challenge

Implement a more efficient method of quicksort, which uses more cases during sorting

## Implementation

**Quicksort**

I used three cases when comparing the current item to the pivot:
- Current < pivot
- Current = pivot
- Current > pivot

Items smaller than the pivot are moved to the left of the `equalIndex` pointer, which is the index of the first equal value of the equal range.

Items equal to the pivot are skipped over, because they are already sorted correctly.

Items greater than the pivot are moved to the end of the array, using a `highIndex` pointer, which starts at the end of the array and is decremented by one each time a number greater than the pivot is found. The current index pointer is not advanced in this case because the new value that has been swapped (from the end of the unsorted range) needs to be sorted.

### Efficiency

**Quicksort**

Time: Best-case @ O(lg n), average case @ O(n lg n), and worst case @ O(n^2)
Space: O(1) in all cases

## Author

Jesse Van Volkinburg
