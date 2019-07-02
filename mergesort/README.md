# Sorting Algorithms - Mergesort

An implementation of the Mergesort algorithm

## Challenge

Implement a more efficient method of merge sort, which does not use multiple copies of the array to do its work.

## Implementation

**Mergesort**

I used left and right indices and passed the reference to the input array around, thus avoiding multiple copies of the array and reducing space to O(n), where n is the number of elements of the input array.

### Efficiency

**Mergesort**

Time: O(n lg n) in all cases
Space: O(n), where n is the number of elements in the input array.

## Author

Jesse Van Volkinburg
