import React from "react";
import ContributionGraphElement from "../ContributionGraphElement/ContributionGraphElement";
import { WeekDaysEnum } from "../../../../types/enum";
import { getDatesByWeekday } from "../../../../commons/getDatesByWeekday";
import { convertDate } from "../../../../commons/convert-date";

interface IContributionGraphBody {
    sortedWeekdays: number[],
    data: {
        date: Date,
        score: number,
    }[],
    currentDate: Date,
    minDate: (num?: number) => Date,
}

function ContributionGraphBody({ sortedWeekdays, data, currentDate, minDate }: IContributionGraphBody) {
    const onGetDatesByWeekday = (weekDay: number, num: number) => {
        const currentDates = data.filter((el) => el.date.getDay() === weekDay);
        const startDate = minDate(num);
        const endDate = currentDate;
        return getDatesByWeekday(currentDates, startDate, endDate, weekDay);
    }

    return (
        <tbody>
            {sortedWeekdays.map((weekDay, index) =>
                <tr key={`tr-body-index-${index}`}>
                    <td>
                        <span style={{ display: [0, 2, 4].includes(weekDay) ? 'inline' : 'none' }}>
                            {WeekDaysEnum[weekDay]}
                        </span>
                    </td>
                    {onGetDatesByWeekday(weekDay, index).map((el, index2) =>
                        <td key={`td-body-index-${index}-${index2}`}>
                            <ContributionGraphElement data={el}>
                                <div className="contribution-graph-element__contributions">
                                    <span>{`${el.score > 0? el.score : 'No'} contributions`}</span>
                                </div>
                                <div className="contribution-graph-element__date">
                                    {`${convertDate(el.date)}`}
                                </div>
                            </ContributionGraphElement>
                        </td>
                    )}
                </tr>
            )}
        </tbody>
    )
}

export default ContributionGraphBody;