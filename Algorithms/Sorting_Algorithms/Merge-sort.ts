function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  } else {
    const mid: number = Math.floor(arr.length / 2);
    const left: number[] = arr.slice(0, mid);
    const right: number[] = arr.slice(mid);

    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);

    return merge(sortedLeft, sortedRight);
  }

  function merge(left: number[], right: number[]): number[] {
    let result: number[] = [];
    let i = 0, j = 0;

    while (i < left.length && j < right.length) {
      if (left[i]! < right[j]!) {
        result.push(left[i]!);
        i++;
      } else {
        result.push(right[j]!);
        j++;
      }
    }

    return result.concat(left.slice(i)).concat(right.slice(j));
  }
}

const arr = [38, 27, 43, 3, 9, 82, 10];

let before_arr: number[] = [...arr];
let after_arr: number[] = mergeSort([...arr]);

console.log("Before Sort:", before_arr);

if (JSON.stringify(before_arr) === JSON.stringify(after_arr)) {
  console.log("Array is already sorted");
} else {
  console.log("After sorting:", after_arr);
}
