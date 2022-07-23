



module.exports = function towelSort (matrix) {
  let newMatrix = [];

  if (typeof matrix === 'undefined'){
    return [];
  } else {

    for(let i = 0; i < matrix.length; i++){
      if(i % 2 !== 0){
        newMatrix.push(matrix[i].reverse());
      } else {
        newMatrix.push(matrix[i]);
      }
    }
  }
  return newMatrix.flat();
}







