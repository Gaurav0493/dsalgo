


function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}



function stringIsPermutationOfAnotherString(s1,s2) {

    if(typeof(s1) != "string" || typeof(s2) != "string") return "Please provide valid string";

    var occuraneOfcharInS1 = {};

    var totalPermutation = 0;
    

    for(var i=0;i<s1.length;i++) {
        if(occuraneOfcharInS1[s1[i]]) {
            occuraneOfcharInS1[s1[i]] = occuraneOfcharInS1[s1[i]]+1;
        }
        else {
            occuraneOfcharInS1[s1[i]] = 1;
        }
    }


    for(var i = 0; i<s2.length; i++) {
        let occuraneOfcharInS2 = {};
        let windowString = s2.substring(i,i+s1.length);

        if(windowString.length < s1.length) break;


        for(var j=0;j<windowString.length;j++) {
            if(occuraneOfcharInS2[windowString[j]]) {
                occuraneOfcharInS2[windowString[j]] = occuraneOfcharInS2[windowString[j]]+1;
            }
            else {
                occuraneOfcharInS2[windowString[j]] = 1;
            }
        }

        if(isEquivalent(occuraneOfcharInS2, occuraneOfcharInS1)) {
            totalPermutation++;
        }

    }

    return totalPermutation;


}

console.log(stringIsPermutationOfAnotherString("abc","abcddcabfabc"));