/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    const length = nums.length;

    let output = [];
    let sortedArray = nums.sort( (a,b) => a - b);

    for (let i = 0; i < length -2; i++) {
        for(let j=i+1; j < length; j++) {
            for (let k=j+1; k <length; k++){
                let first = sortedArray[i]
                let second = sortedArray[j]
                let third = sortedArray[k]
 
                let current = [first, second, third];
                if (first + second + third === 0 && output) {

                    // check for duplicates
                    let match = output.find( 
                        item => JSON.stringify(item) === JSON.stringify(current));

                    if (!match) output.push(current);
                }
            }
        }
    }

    return output;
};