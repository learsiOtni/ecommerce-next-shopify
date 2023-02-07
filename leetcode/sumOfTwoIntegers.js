/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
 var getSum = function(a, b) {

    // -12, -8
    let counter = Math.abs(b);

    for (let i = 0; i < counter; i++){

        if ((a <= 0 && b <= 0) || a > 0 && b < 0 ) a--
        else a++
    } 

    return a;

};

// cannot use - or + operator