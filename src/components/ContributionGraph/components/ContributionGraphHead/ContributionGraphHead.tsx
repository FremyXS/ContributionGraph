import React, { useEffect, useState } from "react";
import { MonthesEnum } from "../../../../types/enum";

interface IContributionGraphHead {
    sortedMonthes: number[]
}


function ContributionGraphHead({ sortedMonthes }: IContributionGraphHead) {

    const getColumnSpan = (monthNum: number) => {
        if (monthNum === MonthesEnum.Июль
            || monthNum === MonthesEnum.Окт
            || monthNum === MonthesEnum.Янв
            || monthNum === MonthesEnum.Апр){
                return 5;
        }

        return 4;
    }

    return (
        <thead>
            <tr>
                <td>
                    <span style={{display:"none"}}>Дни недели</span>
                </td>
                {sortedMonthes.map((el, index) =>
                    <td key={`td-monthes-${index}`}
                        colSpan={getColumnSpan(el)}
                    >{MonthesEnum[el]}</td>
                )}
            </tr>
        </thead>
    )
}

export default ContributionGraphHead;