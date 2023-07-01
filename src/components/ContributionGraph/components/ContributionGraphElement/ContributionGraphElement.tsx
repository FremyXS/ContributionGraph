import React, { ReactNode, useEffect, useRef, useState } from "react";

import './ContributionGraphElement.scss';
import { convertDate } from "../../../../commons/convert-date";
import { ContributionGraphElementLevelsEnum } from "./types/enum";

interface IContributionGraphElement {
    data: {
        date?: Date,
        score: number,
    },
    children: ReactNode
}

function ContributionGraphElement({ data, children }: IContributionGraphElement) {
    const elementRef = useRef<HTMLButtonElement>(null);
    const [isShowInfo, setIsShowInfo] = useState<boolean>(false);

    const handleClick = () => {
        setIsShowInfo(!isShowInfo);
    };

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (elementRef.current && !elementRef.current.contains(event.target as Node)) {
                setIsShowInfo(false);
            }
        };

        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, []);

    const onGetElementLevel = () => {
        if (data.score === 0) {
            return ContributionGraphElementLevelsEnum.one;
        }

        if (data.score <= 9) {
            return ContributionGraphElementLevelsEnum.two;
        }

        if (data.score <= 19) {
            return ContributionGraphElementLevelsEnum.three;
        }

        if (data.score <= 29) {
            return ContributionGraphElementLevelsEnum.foure;
        }

        return ContributionGraphElementLevelsEnum.five;
    }

    return (
        <div className={`contribution-graph-element ${onGetElementLevel()}`}>
            <button ref={elementRef} onClick={handleClick}></button>
            {isShowInfo &&
                <div className="contribution-graph-element__info">
                    {/* <div className="contribution-graph-element__contributions">
                        <span>{`${data.score} contributions`}</span>
                    </div>
                    <div className="contribution-graph-element__date">
                        {`${convertDate(data.date)}`}                        
                    </div> */}
                    {children}
                </div>
            }
        </div>
    )
}

export default ContributionGraphElement;