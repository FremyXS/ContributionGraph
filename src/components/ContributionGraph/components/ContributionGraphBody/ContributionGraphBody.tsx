import React, { useEffect, useState } from "react";
import ContributionGraphElement from "../ContributionGraphElement/ContributionGraphElement";
import { WeekDaysEnum } from "../../../../commons/convert-date";

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

    console.log(currentDate.getDate(), currentDate.getMonth(),currentDate.getFullYear());
    console.log(minDate().getDate(), minDate().getMonth(),minDate().getFullYear());


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
            if (date.getDay() === weekDay) {

                const tem = currentDates.find((el) => compareDates(el.date, date));

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
            {sortedWeekdays.map((el, index) =>
                <tr>

                    <td>
                        {WeekDaysEnum[el]}
                    </td>
                    {onGetDatesByWeekday(el).map((el, index2) =>
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