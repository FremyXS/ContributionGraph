import React, { useEffect, useState } from 'react';

import ContributionGraphHead from './components/ContributionGraphHead/ContributionGraphHead';
import ContributionGraphBody from './components/ContributionGraphBody/ContributionGraphBody';

import './ContributionGraph.scss';
import { getSortedMonthes, getSortedWeekDays } from '../../commons/sortings';

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
        setSortedMonthes(getSortedMonthes(currentDate));
    }, []);

    useEffect(() => {
        setSortedWeekdays(getSortedWeekDays(currentDate));
    }, []);

    const getMinDate = (num?: number) => {
        const fiftyWeeksAgo = new Date(currentDate);
        fiftyWeeksAgo.setDate(fiftyWeeksAgo.getDate() - (49 * 7) + 3 + (num || 0));
        return fiftyWeeksAgo;
    }

    return (
        <div className='contribution-graph'>
            <table>
                <ContributionGraphHead sortedMonthes={sortedMonthes} />
                <ContributionGraphBody sortedWeekdays={sortedWeekdays} data={data} currentDate={currentDate} minDate={(num?: number) => getMinDate(num)}/>
            </table>
            <div className='contribution-graph-legend'>
                <span>Меньше</span>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <section></section>
                <span>Больше</span>
            </div>
        </div>
    );
}

export default ContributionGraph;