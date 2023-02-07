/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    let output = 0; 
    const romanValue = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    }

    let deduction = 0;
    
    for (let i=0; i < s.length; i++) {
        
        if(i < s.length) {
            if (s[i] === 'I' && (s[i+1] === 'V' || s[i+1] === 'X')) {
                deduction = 1;
                continue;
            }
            if (s[i] === 'X' && (s[i+1] === 'L' || s[i+1] === 'C')) {
                deduction = 10;
                continue;
            }
            if (s[i] === 'C' && (s[i+1] === 'D' || s[i+1] === 'M')) {
                deduction = 100;
                continue;
            }
            
            console.log(deduction)
        }
        
        output = output + (romanValue[s[i]] - deduction)
        deduction = 0
    }


return output;
};