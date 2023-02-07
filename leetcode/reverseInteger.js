/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {

    // 
    let XString = x.toString();
    let result = "";
    let isNegative = false;
    
    for (let i = 0 ; i < XString.length; i++) {

        if (XString[i] === "-") {
            isNegative = true;
            continue;
        }

        result = XString[i] + result;
    }

    if (isNegative) result = "-" + result;
    result = parseInt(result);

    if (result > Math.pow(2, 31) - 1 || result < Math.pow(-2, 31)) return 0;

    return result;
};

/*
function reverse(n) {
    var reverseN = 0;
    var sign = n < 0;
    n = Math.abs(n);
    while (n) {
        reverseN = reverseN*10 + (n % 10);
        n = Math.floor(n/10);
    }
    return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
}


*/
