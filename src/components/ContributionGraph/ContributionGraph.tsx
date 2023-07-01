import React from 'react';

import './ContributionGraph.scss';
import ContributionGraphHead from './components/ContributionGraphHead/ContributionGraphHead';
import ContributionGraphBody from './components/ContributionGraphBody/ContributionGraphBody';

interface IContributionGraph {
    data: {
        date: string,
        score: number,
    }[]
}



const days = [
    'Пн',
    'Вт',
    'Ср',
    'Чт',
    'Пт',
    'Суб',
    'Вос',
]

function ContributionGraph({ data }: IContributionGraph) {
    const myCurrentDate = new Date()

    return (
        <div className='contribution-graph'>
            <table>

                <ContributionGraphHead currentMonth={myCurrentDate.getMonth() + 1} />
                <ContributionGraphBody days={days} />
            </table>
        </div>
    );
}

export default ContributionGraph;