import React from "react";
import { WeekDaysEnum } from "../../ContributionGraph";
import ContributionGraphElement from "../ContributionGraphElement/ContributionGraphElement";

interface IContributionGraphBody {
    sortedWeekdays: number[],
    data: {
        date: Date,
        score: number,
    }[]
}

function ContributionGraphBody({ sortedWeekdays, data }: IContributionGraphBody) {
    const onGetDatesByWeekday = (weekDay: number) => {
        const dates = data.filter((el) => el.date.getDay() === weekDay);
        
        // let prevDate = null;

        // for(let date in dates){
        //     if(!prevDate){
        //         prevDate = dates[date];
        //     }


        //     dates[date].date.
        // }

        return dates;
    }

    return (
        <tbody>
            {sortedWeekdays.map((el, index) =>
                <tr>
                    <td>{WeekDaysEnum[el]}</td>
                    {onGetDatesByWeekday(el).map((el, index) =>
                        <td key={`td-body-index-${index}`}>
                            {/* {`${el.date.getDate()}-${el.date.getMonth()}-${el.date.getFullYear()}`} */}
                            <ContributionGraphElement data={el} />
                        </td>
                    )}
                </tr>
            )}
        </tbody>
    )
}

export default ContributionGraphBody;