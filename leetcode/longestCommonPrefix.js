/**
 * @param {string[]} strs
 * @return {string}
 */
 var longestCommonPrefix = function(strs) {

    let word = "";

    strs.forEach( (item, index) => {

        if (index === 0) {
            word = item;
            return;
        } 

        for( let i = 0; i < item.length + 1; i++) { // + 1 so that it compares till last bit
            
            if (item[i] !== word[i]) { // faster than item.charAt(i)
                word = item.substring(0, i);
                return;
            }
        }
    })
    return word;
};