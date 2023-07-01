import React, { useEffect, useState } from 'react';

import ContributionGraphHead from './components/ContributionGraphHead/ContributionGraphHead';
import ContributionGraphBody from './components/ContributionGraphBody/ContributionGraphBody';

import './ContributionGraph.scss';

interface IContributionGraph {
    data: {
        date: Date,
        score: number,
    }[]
}

function ContributionGraph({ data }: IContributionGraph) {
    const currentDate = new Date();
    const [sortedMonthes, setSortedMonthes] = useState<number[]>([]);
    const [sortedWeekdays, setSortedWeekdays] = useState<number[]>([]);

    useEffect(() => {
        sortMonthes();
    }, []);

    useEffect(() => {
        sortWeekdays();
    }, []);

    const getMinDate = () => {
        const fiftyWeeksAgo = new Date(currentDate);
        fiftyWeeksAgo.setDate(fiftyWeeksAgo.getDate() - (49 * 7) + 3);
        return fiftyWeeksAgo;
    }

    const sortWeekdays = () => {
        const currentDay = currentDate.getDay();
        
        const days = [];

        for (let day = currentDay; day < 7; day++) {
            days.push(day);
        }

        for (let day = 0; day < currentDay; day++) {
            days.push(day);
        }

        console.log(days);
        setSortedWeekdays(days);
    }

    const sortMonthes = () => {
        const currentMonth = currentDate.getMonth() + 1;

        const monthes = [];
        for (let month = currentMonth + 1; month <= 12; month++) {
            monthes.push(month);
        }

        for (let month = 1; month <= currentMonth; month++) {
            monthes.push(month);
        }

        setSortedMonthes(monthes);
    }

    return (
        <div className='contribution-graph'>
            <table>
                <ContributionGraphHead sortedMonthes={sortedMonthes} />
                <ContributionGraphBody sortedWeekdays={sortedWeekdays} data={data} currentDate={currentDate} minDate={() => getMinDate()}/>
            </table>
            <div className='contribution-graph-legend'>

            </div>
        </div>
    );
}

export default ContributionGraph;