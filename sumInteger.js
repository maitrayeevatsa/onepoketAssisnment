function sumArray(arr) {
    if (!Array.isArray(arr)) {
      throw new Error('Input must be an array');
    }
  
    let sum = 0;
    for (const num of arr) {
      if (typeof num !== 'number') {
        throw new Error('All elements in the array must be integers');
      }
      sum += num;
    }
  
    return sum;
  }
  
  const inputArray = [1, 2, 3, 4, 5];
  const result = sumArray(inputArray);
  console.log('Sum:', result); // Output: Sum: 15