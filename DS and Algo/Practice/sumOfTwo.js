var twoSum = function(nums, target) {
    let t2 = target
    let curItem = 0
    for(let i = 0; i<nums.length; i++){
        curItem = i
        for(let j = i+1; j<nums.length; j++){
                if((nums[curItem] + nums[j]) === t2){
                  return [curItem, j]
                }
            }
        }
};

console.log(twoSum([3,2,4], 6))
