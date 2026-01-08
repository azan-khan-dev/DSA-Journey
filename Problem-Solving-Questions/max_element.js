function find_max(arr)
{
    let max=arr[0]
    for(let i=0;i<arr.length;i++)
        {
            if(arr[i]>max)
            {
                max=arr[i];

            }

          
        }
        return max;
   
}
let arr1=[9,1,4,7,13,6,5,2,8];
console.log(find_max(arr1));
