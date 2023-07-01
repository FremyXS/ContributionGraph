const compareDates = (firstDate: Date, secondDate: Date) => {
    if (firstDate.getFullYear() != secondDate.getFullYear()
        || firstDate.getMonth() != secondDate.getMonth()
        || firstDate.getDate() != secondDate.getDate()) {
        return false;
    }

    return true;
}

export const getDatesByWeekday = (
    currentDates: {
        date: Date;
        score: number;
    }[],
    startDate: Date,
    endDate: Date,
    weekDay: number
) => {
    const dates = [];

    for (let date = startDate!; date <= endDate; date.setDate(date.getDate() + 1)) {
        const tem = currentDates.find((el) => compareDates(el.date, date));

        if (date.getDay() === weekDay) {
            if (!tem) {
                const emptyDate: { date: Date; score: number; } = {
                    date: new Date(date),
                    score: 0
                }
                dates.push(emptyDate);
            }
            else {
                dates.push(tem);

            }
        }
    }

    return dates;
}