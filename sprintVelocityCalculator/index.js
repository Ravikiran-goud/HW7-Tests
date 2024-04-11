// index.js


const fs = require('fs');
const csv = require('csv-parser');
const calculateAverageVelocity = require('./calculateAverageVelocity'); // Import the function
const sprints = [];

fs.createReadStream('sprintPoints.csv')
  .pipe(csv())
  .on('data', (row) => {
    sprints.push({ sprintNumber: parseInt(row.sprintNumber), pointsCompleted: parseInt(row.pointsCompleted) });
  })
  .on('end', () => {
    try {
      const averageVelocity = calculateAverageVelocity(sprints);
      console.log(`The average velocity of the sprint team is: ${averageVelocity} points.`);
    } catch (error) {
      console.error(error.message);
    }
  }); 
