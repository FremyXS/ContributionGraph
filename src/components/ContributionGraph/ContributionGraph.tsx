import React, { useEffect, useState } from 'react';

import ContributionGraphHead from './components/ContributionGraphHead/ContributionGraphHead';
import ContributionGraphBody from './components/ContributionGraphBody/ContributionGraphBody';

import './ContributionGraph.scss';
import { getSortedMonthes, getSortedWeekDays } from '../../commons/sortings';
import ContributionGraphElement from './components/ContributionGraphElement/ContributionGraphElement';

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
                <ContributionGraphBody sortedWeekdays={sortedWeekdays} data={data} currentDate={currentDate} minDate={(num?: number) => getMinDate(num)} />
            </table>
            <div className='contribution-graph-legend'>
                <span>Меньше</span>
                <ContributionGraphElement data={{ score: 0 }}>
                    <div className="contribution-graph-element__contributions">
                        <span>0 contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{ score: 9 }}>
                    <div className="contribution-graph-element__contributions">
                        <span>1+ contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{ score: 19 }}>
                    <div className="contribution-graph-element__contributions">
                        <span>10+ contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{ score: 29 }}>
                    <div className="contribution-graph-element__contributions">
                        <span>20+ contributions</span>
                    </div>
                </ContributionGraphElement>
                <ContributionGraphElement data={{ score: 39 }}>
                    <div className="contribution-graph-element__contributions">
                        <span>30+ contributions</span>
                    </div>
                </ContributionGraphElement>
                <span>Больше</span>
            </div>
        </div>
    );
}

export default ContributionGraph;