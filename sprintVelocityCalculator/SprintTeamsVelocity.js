/**
 * This function calculates the average sprint velocity for a team based on the points completed in previous sprints.
 *
 * @param sprintPoints An array of integers representing the points completed in each sprint.
 * @returns The average velocity as a double, calculated as the total points divided by the number of sprints.
 * @throws Error if the input is invalid (null, undefined, empty array).
 */
function SprintTeamsVelocity(sprintPoints) {
  if (!Array.isArray(sprintPoints) || sprintPoints.length === 0) {
    throw new Error('Invalid input: Sprint points must be provided as a non-empty array');
  }

  let sum = 0;
  let validSprintsCount = 0;

  for (let points of sprintPoints) {
    if (typeof points !== 'number' || isNaN(points)) {
      continue; // Skip non-numeric sprint points
    }

    points = Math.max(points, 0);
    sum += points;
    validSprintsCount++;
  }

  if (validSprintsCount === 0) {
    return NaN; // Return NaN if no valid sprint points provided
  }

  return sum / validSprintsCount;
}

module.exports = SprintTeamsVelocity;


  