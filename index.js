const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

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