import React, { useEffect, useState } from "react";

interface IContributionGraphHead{
    currentMonth: number
}

enum MonthesEnum {
    "Янв." = 1,
    "Февр.",
    "Март",
    "Апр.",
    "Май",
    "Июнь",
    "Июль",
    "Авг.",
    "Сент.",
    "Окт.",
    "Нояб.",
    "Дек.",
}

function ContributionGraphHead({currentMonth}: IContributionGraphHead) {

    const [sortedMonthes, setSortedMonthes] = useState<number[]>([]);

    const sortMonthes = () => {
        const monthes = [];
        for(let month = currentMonth + 1; month <= 12; month++){
            monthes.push(month);
        }

        for(let month = 1; month <= currentMonth; month++){
            monthes.push(month);
        }

        setSortedMonthes(monthes);
    }

    useEffect(()=>{
        sortMonthes();
    }, []);

    return (
        <thead>
            <tr>
                <td>Дни недели</td>
                {sortedMonthes.map((el, index) => 
                    <td key={`td-monthes-${index}`}>{MonthesEnum[el]}</td>
                )}
            </tr>
        </thead>
    )
}

export default ContributionGraphHead;