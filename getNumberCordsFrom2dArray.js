// Search in 2D array sorted by both row and column wise to find a particular number. 


function getNumberCords(arr, element){
    for(var i = 0; i < arr.length; i++) {
        var cube = arr[i];
        for(var j = 0; j < cube.length; j++) {
            if(arr[i][j] === element) {
                console.log(element, "found at", i, j);
                break;
            }
        }
    }
}

console.log(getNumberCords([
    [1, 2, 3],
    [4, 5, 6],    
    [7, 8, 9],
   ], 5))