//The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this:
/*

P   A   H   N
A P L S I I G
Y   I   R

*/

//Time complexity: o(N) 
const convert = (s, numRows) => {
  if(numRows === 1){ // 
      return s; 
  }
  let result =  [];
  for (let i = 0; i < numRows; i++) { //build a matrix with numRows of arrays
    result.push([]);
  }
  let recur = (currentCol) =>{ // recur function only apply to numRows > 1, otherwise will recurse endless
    for( let col = currentCol; col < currentCol + numRows - 1; col ++) {
    if((col%(numRows-1)===0) && (s.length>0)){
      for (let row = 0; row < numRows; row ++) {
        result[row][col] = s.charAt(0);
        s = s.slice(1);
      }
    } else if((col%(numRows-1)!==0) && (s.length>0)){
      let row = col%(numRows - 1);
      result[numRows - 1 - row][col] = s.charAt(0);
      s = s.slice(1);
    } else {
      return;
    }
  }
    recur (currentCol + numRows - 1);
  };
  recur(0);
  let final = result.reduce((acc,ele) =>{ // use nested reduce to produce the string from an array of arrays
    return acc + ele.reduce((acc,char) => {
      return acc + char;
    }, '');
  },'');
  return final;
};