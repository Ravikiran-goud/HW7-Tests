const TeamMember = require('./TeamMember');

describe('TeamMember.calculateAvailableEffort', () => {
    test('calculates effort correctly for standard input', () => {
        const member = new TeamMember('Alice', 10, 2, 4, 8);
        expect(member.calculateAvailableEffortHours()).toBe(60); // Updated expected value
    });
    
    test('calculates effort correctly with zero sprint days', () => {
        const member = new TeamMember('Bob', 0, 0, 0, 8); // No sprint days
        expect(member.calculateAvailableEffortHours()).toBe(0); // Expect 0 hours
    });

    test('handles negative sprint days gracefully', () => {
        const member = new TeamMember('Charlie', -5, 2, 4, 8); // Negative sprint days
        expect(member.calculateAvailableEffortHours()).toBe(0); // Expect 0 hours
    });
    test('calculates effort correctly with no hours off and no hours in ceremonies', () => {
        const member = new TeamMember('Dana', 10, 2, 0, 8);
        expect(member.calculateAvailableEffortHours()).toBe(64); // Updated expected value
    });

    test('handles negative hours off and ceremonies gracefully', () => {
        const member = new TeamMember('Eve', 10, -8, -4, 8); // Negative hours off and in ceremonies
        expect(member.calculateAvailableEffortHours()).toBeGreaterThanOrEqual(0); // Expect >= 0
    });
});

