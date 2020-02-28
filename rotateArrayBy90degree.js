// Rotate an array by 90 degree 

// Input:
//  1  2  3
//  4  5  6
//  7  8  9

// Output:
//  3  6  9 
//  2  5  8 
//  1  4  7

// 00 10 20
// 01 11 21
// 02 12 22


// 20 21 22
// 10 11 12
// 00 01 02

// formula --> i = rows , j = columns 

// function rotate(matrix) {
//     const N = matrix.length - 1;
//     const result = matrix.map((row,i)=>{
//         return row.map((val,j)=>matrix[N-j][i])
//     });
//     matrix.length = 0;
//     matrix.push(...result);
//     return matrix;
// }




   function rotateRight(matrix) {
    const N = matrix.length - 1;
    const result = [...matrix];

    console.log("copied matrix",result)

    for(var i = 0; i < result.length; i++) {
        var row = result[i];
        for(var j = 0; j < row.length; j++) {
            result[i][j] = matrix[N-j][i];
        }
    }

    console.log("updated matrix",result)
    // console.log("updated matrix",matrix)
    matrix.length = 0;
    matrix.push(...result);
    
    return matrix;
   }

   console.log(rotateRight([
    [1, 2, 3],
    [4, 5, 6],    
    [7, 8, 9],
   ]));
