const plusNumber = (...b:number[]) => {
  let square = 0;

  for (let i= 0;i < b.length;i++){
    square *= b[i];
  }

  return square;
}


console.log(plusNumber(1,2,3,4,5));
