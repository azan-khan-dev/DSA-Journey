function two_sum(num,target)
{
   let map={}
    for(let i=0;i<num.length;i++)
    {
        const need=target-num[i];
        if(map[need]!==undefined)
        {
            return [map[need],i];
        }
        map[num[i]]=i
    }
}
let array=[2,7,11,15]
let target_para=186
console.log(two_sum(array,target_para))