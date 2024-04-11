const SprintTeamsVelocity = require('./SprintTeamsVelocity');

describe('SprintVelocityCalculator', () => {
  // Test case: calculates the average velocity for a set of sprints
  it('calculates the average velocity for a set of sprints', () => {
    const sprintPoints = [10, 20, 30, 40, 50, 60];
    const averageVelocity = SprintTeamsVelocity(sprintPoints);
    expect(averageVelocity).toBe(35);
  });

  // Test case: should throw an error when no sprint points are provided
  it('throws an error when no sprint points are provided', () => {
    const sprintPoints = [];
    expect(() => SprintTeamsVelocity(sprintPoints)).toThrow('Invalid input');
  });

  // Test case: handles an array with a single sprint point
  it('handles an array with a single sprint point', () => {
    const sprintPoints = [50];
    const averageVelocity = SprintTeamsVelocity(sprintPoints);
    expect(averageVelocity).toBe(50);
  });

  // Test case: ignores non-numeric sprint points and calculates the average
  it('ignores non-numeric sprint points and calculates the average', () => {
    const sprintPoints = [10, 'abc', 30];
    const averageVelocity = SprintTeamsVelocity(sprintPoints);
    expect(averageVelocity).toBe(20); // Expect it to calculate average ignoring the non-numeric value
  });

  // Test case: returns NaN for an array with all non-numeric sprint points
  it('returns NaN for an array with all non-numeric sprint points', () => {
    const sprintPoints = ['abc', 'def', 'ghi']; // Ensure there is at least one non-numeric value
    const averageVelocity = SprintTeamsVelocity(sprintPoints);
    expect(averageVelocity).toBeNaN();
  });

  // Test case: throws an error for null input
  it('throws an error for null input', () => {
    expect(() => SprintTeamsVelocity(null)).toThrow('Invalid input');
  });

  // Test case: throws an error for undefined input
  it('throws an error for undefined input', () => {
    expect(() => SprintTeamsVelocity(undefined)).toThrow('Invalid input');
  });
});



