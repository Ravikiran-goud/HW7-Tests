class TeamMember {
    constructor(name, sprintDays, ptoDays, ceremonyHours, hoursPerDay) {
        if (typeof sprintDays !== 'number' || typeof ptoDays !== 'number' ||
            typeof ceremonyHours !== 'number' || typeof hoursPerDay !== 'number') {
            throw new Error('Invalid parameter type. Numeric values expected.');
        }

        if (isNaN(sprintDays) || isNaN(ptoDays) || isNaN(ceremonyHours) || isNaN(hoursPerDay)) {
            throw new Error('Invalid parameter value. Numeric values expected.');
        }

        this.name = name;
        this.sprintDays = sprintDays;
        this.ptoDays = ptoDays;
        this.ceremonyHours = ceremonyHours;
        this.hoursPerDay = hoursPerDay;
    }

    calculateAvailableEffortHours() {
        // Ensure all values are non-negative
        const totalSprintDays = Math.max(this.sprintDays, 0);
        const totalPtoDays = Math.max(this.ptoDays, 0);
        const totalCeremonyHours = Math.max(this.ceremonyHours, 0);
        const totalHoursPerDay = Math.max(this.hoursPerDay, 0);
    
        // Calculate total available sprint days by subtracting PTO days
        const availableSprintDays = totalSprintDays - totalPtoDays;
    
        // Calculate total available hours for work
        const totalAvailableHours = availableSprintDays * totalHoursPerDay;
    
        // Subtract the total hours spent in ceremonies
        const availableEffortHours = totalAvailableHours - totalCeremonyHours;
    
        // Ensure the result is non-negative
        return Math.max(availableEffortHours, 0);
    }
    
}

module.exports = TeamMember;


