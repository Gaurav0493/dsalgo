// Find Kth smallest element from the given Array

// function 1stgetKthSmallest(arr,k) {
//     var newArr = arr.sort();
//     return newArr[k-1];
// }



function secondGetKthSmallest(arr,k) {
    var kObj = {};
    var newArr = arr.sort((a,b)=>a-b);
    var count = 1;
    for(var i = 0; i<newArr.length; i++) {
        if(!Object.values(kObj).includes(newArr[i])){
            kObj[count] = newArr[i];
            count++;
        }

        if(count > k) { break; }
    }
    return kObj[k];
}

console.log(secondGetKthSmallest([3,2,2,3,5,2,4,8],3));