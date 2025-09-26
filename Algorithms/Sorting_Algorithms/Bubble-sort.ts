function bubble_Sort(arr: number[]): number[] {
    const arr_len = arr.length;
    let swapped: boolean;

    for (let i = 0; i < arr_len - 1; i++) {
        swapped = false;

        for (let j = 0; j < arr_len - i - 1; j++) {
            if (arr[j]! > arr[j + 1]!) {

                let temp = arr[j]!;
                arr[j] = arr[j + 1]!;
                arr[j + 1] = temp;
                swapped = true;
            }
        }
        if (swapped==false)
            {
            break;
            }
    }

    return arr;
}

let myarr: number[] = [28, 12, 5, 8, 3, 1, 0, -1, -5, 17, 22];

const before = [...myarr];
const after = bubble_Sort([...myarr]);

console.log("Array before sorting:\n" + before);

if (JSON.stringify(before) === JSON.stringify(after)) {
    console.log("Array is already sorted");
} else {
    console.log("Array after sorting:\n" + after);
}
/* 
 NOTE on Comparison:
   - The comparison operator decides the sorting order.
     → Use (arr[j] > arr[j + 1]) for Ascending order
     → Use (arr[j] < arr[j + 1]) for Descending order

   NOTE on JSON.stringify:
   - Arrays cannot be compared directly in JavaScript/TypeScript 
     because they are reference types.
     Example: [1,2,3] === [1,2,3] → false
   - To check if two arrays have the same values in the same order,
     we convert them to strings using JSON.stringify and compare those.
*/
