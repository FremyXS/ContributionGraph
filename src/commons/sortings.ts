export const getSortedWeekDays = (currentDate: Date) => {
    const currentDay = currentDate.getDay();
        
    const days = [];

    for (let day = currentDay; day < 7; day++) {
        days.push(day);
    }

    for (let day = 0; day < currentDay; day++) {
        days.push(day);
    }

    return days;
}

export const getSortedMonthes = (currentDate: Date) => {
    const currentMonth = currentDate.getMonth() + 1;

    const monthes = [];
    for (let month = currentMonth + 1; month <= 12; month++) {
        monthes.push(month);
    }

    for (let month = 1; month <= currentMonth; month++) {
        monthes.push(month);
    }

    return monthes;
}