'use strict';

const quickSort = require('../quicksort.js');

describe('quickSort algorithm', () => {
  it('should be able to deal with an empty array', () => {
    const input = [];
    const expectedOutput = [];
    let output;
    expect(() => {
      output = quickSort(input);
    }).not.toThrow();
    expect(output).toEqual(expectedOutput);
  });
  it('should be able to deal with a 1-element array', () => {
    const input = [4];
    const expectedOutput = [4];
    let output;
    expect(() => {
      output = quickSort(input);
    }).not.toThrow();
    expect(output).toEqual(expectedOutput);
  });
  it('should be able to sort a 2-element array', () => {
    const input = [4, 3];
    const expectedOutput = [3, 4];
    let output;
    expect(() => {
      output = quickSort(input);
    }).not.toThrow();
    expect(output).toEqual(expectedOutput);
  });
  it('should be able to sort a many-element array', () => {
    const input = [4, 3, 8, 2, 9, 9, 2];
    const expectedOutput = [2, 2, 3, 4, 8, 9, 9];
    let output;
    expect(() => {
      output = quickSort(input);
    }).not.toThrow();
    expect(output).toEqual(expectedOutput);
  });
});
