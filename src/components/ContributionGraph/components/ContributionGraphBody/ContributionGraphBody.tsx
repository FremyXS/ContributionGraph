import React from "react";
import ContributionGraphElement from "../ContributionGraphElement/ContributionGraphElement";
import { WeekDaysEnum } from "../../../../types/enum";

interface IContributionGraphBody {
    sortedWeekdays: number[],
    data: {
        date: Date,
        score: number,
    }[],
    currentDate: Date,
    minDate: () => Date,
}

function ContributionGraphBody({ sortedWeekdays, data, currentDate, minDate }: IContributionGraphBody) {
    const onGetDatesByWeekday = (weekDay: number) => {

        const compareDates = (firstDate: Date, secondDate: Date) => {
            if(firstDate.getFullYear() != secondDate.getFullYear()
            || firstDate.getMonth() != secondDate.getMonth()
            || firstDate.getDate() != secondDate.getDate()){
                return false;
            }

            return true;
        }


        const currentDates = data.filter((el) => el.date.getDay() === weekDay);

        const startDate = minDate();
        const endDate = currentDate;

        const dates = [];

        for (let date = startDate!; date <= endDate; date.setDate(date.getDate() + 1)) {
            const tem = currentDates.find((el) => compareDates(el.date, date));

            if (date.getDay() === weekDay) {
                if(!tem){
                    const emptyDate: { date: Date; score: number;} = {
                        date: new Date(date),
                        score: 0
                    }
                    dates.push(emptyDate);
                }
                else{
                    dates.push(tem);
                    
                }
            }
        }

        return dates;
    }

    return (
        <tbody>
            {sortedWeekdays.map((weekDay, index) =>
                <tr key={`tr-body-index-${index}`}>
                    <td>
                        {WeekDaysEnum[weekDay]}
                    </td>
                    {onGetDatesByWeekday(weekDay).map((el, index2) =>
                        <td key={`td-body-index-${index}-${index2}`}>
                            <ContributionGraphElement data={el} />
                        </td>
                    )}
                </tr>
            )}
        </tbody>
    )
}

export default ContributionGraphBody;