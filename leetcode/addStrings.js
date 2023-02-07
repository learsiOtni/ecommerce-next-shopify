/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
 var addStrings = function(str1, str2) {

    let length1 = str1.length -1
    let length2 = str2.length -1
    let counter = length1 > length2 ? length1 : length2

    let result = ""
    let carry = 0

    for (let i = counter; i >= 0; i--) {

        let val1 = str1[length1] || 0;
        let val2 = str2[length2] || 0;

        let sum = +val1 + +val2 + carry;
        carry = sum > 9 ? 1 : 0;
        result = sum % 10 + result;

        length1--
        length2--
    }

    if (carry > 0) result = carry + result;
    return result;
};