import { isAscending } from './array';

describe('Check array is ascending', () => {
  describe('Input value is not array', () => {
    test('boolean', () => {
      expect(isAscending(true)).toBe(false);
      expect(isAscending(false)).toBe(false);
    });
    test('null', () => {
      expect(isAscending(null)).toBe(false);
    });
    test('undefined', () => {
      expect(isAscending(undefined)).toBe(false);
    });
    test('string', () => {
      expect(isAscending('string')).toBe(false);
    });
    test('object', () => {
      expect(isAscending({ a: 1, b: 2 })).toBe(false);
    });
    test('function', () => {
      expect(isAscending(() => {})).toBe(false);
    });
  });
  describe('Input value is array', () => {
    test('Array is empty', () => {
      expect(isAscending([])).toBe(false);
    });
    test('Array is not empty but length equal 1', () => {
      expect(isAscending([1])).toBe(false);
      expect(isAscending([undefined])).toBe(false);
    });
    test('Array has element not a number', () => {
      expect(isAscending(['long', 1])).toBe(false);
      expect(isAscending([undefined, 1])).toBe(false);
      expect(isAscending([null, 1])).toBe(false);
      expect(isAscending([{}, 1])).toBe(false);
      expect(isAscending([false, 1])).toBe(false);
      expect(isAscending([true, 1])).toBe(false);
      expect(isAscending([() => {}, 1, 2])).toBe(false);
    });
    test('Array is not ascending', () => {
      expect(isAscending([1, 9, 3, 4])).toBe(false);
      expect(isAscending([1, 1, 3, 2])).toBe(false);
    });
    test('Array is ascending', () => {
      expect(isAscending([1, 2, 3])).toBe(true);
      expect(isAscending([1, 1, 3])).toBe(true);
      expect(isAscending([1, 1, 3, 3])).toBe(true);
      expect(isAscending([1.2, 1.4, 3])).toBe(true);
    });
  });
});
