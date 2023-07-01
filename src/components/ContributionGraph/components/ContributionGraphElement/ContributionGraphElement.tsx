import React from "react";

import './ContributionGraphElement.scss';

enum ContributionGraphElementLevelsEnum{
    one = 'one',
    two = 'two',
    three = 'three',
    foure = 'foure',
    five = 'five'
}

interface IContributionGraphElement {
    data: {
        date: Date,
        score: number,
    }
}

function ContributionGraphElement({data}: IContributionGraphElement) {

    const onGetElementLevel = () => {
        if(data.score === 0){
            return ContributionGraphElementLevelsEnum.one;
        }

        if(data.score <= 9){
            return ContributionGraphElementLevelsEnum.two;
        }

        if(data.score <= 19){
            return ContributionGraphElementLevelsEnum.three;
        }

        if(data.score <= 29){
            return ContributionGraphElementLevelsEnum.foure;
        }
        
        return ContributionGraphElementLevelsEnum.five;
    }

    return (
        <div className={`contribution-graph-element ${onGetElementLevel()}`}></div>
    )
}

export default ContributionGraphElement;