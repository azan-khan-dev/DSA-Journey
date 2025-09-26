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

        if (swapped == false) {
            console.log("Array is already sorted");
            break;
        }
    }

    return arr;
}

let myarr: number[] = [64, 34, 25, 12, 22, 11, 90];
console.log("Array before sorting: \n" + myarr);
console.log("Array after sorting:\n" + bubble_Sort(myarr));
