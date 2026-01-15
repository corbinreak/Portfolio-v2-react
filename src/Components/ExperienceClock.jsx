import React from 'react';

const ExperienceClock = ({ startDate}) => {
    const calculateTime = (dateString) => {
        const start = new Date(dateString);
        const now = new Date();


        // Total months calculation

        let totalMonths = (now.getFullYear() - start.getFullYear()) * 12;
        totalMonths -= start.getMonth();
        totalMonths += now.getMonth();

        if (totalMonths <= 0) return "Just Started!";

        const years = Math.floor(totalMonths / 12);
        const months = totalMonths % 12;

        let parts = [];
        if (years > 0) parts.push(`${years} year${years > 1 ? 's' : ''}`);
        if (months > 0) parts.push(`${months} month${months > 1 ? 's' : ''}`);

        return parts.join(" ");
    };

    return (
        <span classNmae="experience-text">
            {calculateTime(startDate)}
        </span>
    )
};

export default ExperienceClock;