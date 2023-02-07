/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
 var removeElement = function(nums, val) {

    let occurences = 0;
    for (let i = 0; i < nums.length; i++) { //go through array, replace occurences of value with '_'
        
        if (nums[i] === val) {
            nums[i] = '_'
            occurences += 1
        }
    }

    nums.sort(); //sort it and it pushes '_' all to the back

    return nums.length - occurences; //has to return number of value in nums thats not val
};