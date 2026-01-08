function evencounter(arr)
{
     let count = 0;
     for(let i=0;i<arr.length;i++)
     {
        if(arr[i]%2==0)
        {
            count++;
        }
     }
     return count;
}
let arr1=[1,2,3,4,5,6,7,8,9,10,12];
console.log("count of even number in array is: ",evencounter(arr1));
   
