function selectionSort(arr: number[]): number[] {
    let arr_len=arr.length;
    for(let i=0;i<arr_len-1;i++)
    {
        let Min_index=i;
        for(let j=i+1;j<arr_len;j++)
        {
            if(arr[j]!<arr[Min_index]!)
            {
                Min_index=j;
            }
        }
        if(Min_index!==i)
        {
            let temp=arr[i]!;
            arr[i]=arr[Min_index]!;
            arr[Min_index]=temp;
        }
        
    }
    return arr;
}
let numbers: number[] = [64, 25, 12, 22, 11];

let before_arr: number[]=[...numbers]
let after_arr:number[]=selectionSort([...numbers])

console.log("Original Array :", numbers);
if(JSON.stringify(before_arr)===JSON.stringify(after_arr))
{
    console.log("Array is already sorted");

}
else
{
    console.log("After sorting the array: ", after_arr)
}

