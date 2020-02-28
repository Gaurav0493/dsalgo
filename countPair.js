// Count distinct pairs matching to aprticular value
// (a+k) = b where a and b are integer from array and k is constant given which adds to b --> pair would be (a,b)
//  For example arr = [1,1,2,3,4] , k= 1
// So distinct pair is (1,2) and (3,4) 


function countPairs(numbers, k) {
    var pairCount = 0;

    for(var i = 0; i< numbers.lenght; i++ ) {
        for(var j = i +1; j < numbers.lenght; j++ ) {
            // console.log( "i",numbers[i], "j",numbers[j])
            if(numbers[i] + k == numbers[j]) {
                pairCount++
            }
        }
    }
    return pairCount;
}