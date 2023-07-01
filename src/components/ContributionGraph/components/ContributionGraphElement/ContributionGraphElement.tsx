import React, { useRef, useState } from "react";

import './ContributionGraphElement.scss';
import { convertDate } from "../../../../commons/convert-date";

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
    const elementRef = useRef(null);
    const [isShowInfo, setIsShowInfo] = useState<boolean>(false);

    const handleClick = () => {
        setIsShowInfo(!isShowInfo);
      };

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
        <div className={`contribution-graph-element ${onGetElementLevel()}`}>
            <button ref={elementRef} onClick={handleClick}></button>
            {isShowInfo &&
                <div className="contribution-graph-element__info">
                    <div className="contribution-graph-element__contributions">
                        {`${data.score} contributions`}
                    </div>
                    <div className="contribution-graph-element__date">
                        {`${convertDate(data.date)}`}
                    </div>
                </div>
            }
        </div>
    )
}

export default ContributionGraphElement;