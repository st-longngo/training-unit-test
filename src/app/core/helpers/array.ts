export const isAscending = (arr: number[]) => {
  if (
    !Array.isArray(arr) ||
    arr.length < 2 ||
    arr.some((item: number) => typeof item !== 'number')
  ) {
    return false;
  }
  return arr.every((num: number, i: number) => i === 0 || num >= arr[i - 1]);
};
