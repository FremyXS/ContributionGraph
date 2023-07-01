import React, { useEffect, useState } from 'react';

import './ContributionGraph.scss';
import ContributionGraphHead from './components/ContributionGraphHead/ContributionGraphHead';
import ContributionGraphBody from './components/ContributionGraphBody/ContributionGraphBody';

interface IContributionGraph {
    data: {
        date: Date,
        score: number,
    }[]
}

export enum MonthesEnum {
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
export enum WeekDaysEnum {
    'Пн' = 1,
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Суб',
    'Вос',
}

function ContributionGraph({ data }: IContributionGraph) {
    const currentDate = new Date();
    const [sortedMonthes, setSortedMonthes] = useState<number[]>([]);
    const [sortedWeekdays, setSortedWeekdays] = useState<number[]>([]);

    useEffect(()=>{
        sortMonthes();
    }, []);

    useEffect(()=>{
        sortWeekdays();
    }, []);

    const sortWeekdays = () => {
        const currentDay = currentDate.getDay();

        const days = [];

        for(let day = currentDay + 1; day <= 7; day++){
            days.push(day);
        }

        for(let day = 1; day <= currentDay; day++){
            days.push(day);
        }

        setSortedWeekdays(days);
    }

    const sortMonthes = () => {
        const currentMonth = currentDate.getMonth() + 1;

        const monthes = [];
        for(let month = currentMonth + 1; month <= 12; month++){
            monthes.push(month);
        }

        for(let month = 1; month <= currentMonth; month++){
            monthes.push(month);
        }

        setSortedMonthes(monthes);
    }

    return (
        <div className='contribution-graph'>
            <table>

                <ContributionGraphHead sortedMonthes={sortedMonthes} />
                <ContributionGraphBody sortedWeekdays={sortedWeekdays} data={data} />
            </table>
        </div>
    );
}

export default ContributionGraph;