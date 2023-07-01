import React, { useEffect, useState } from "react";
import { MonthesEnum } from "../../ContributionGraph";

interface IContributionGraphHead{
    sortedMonthes: number[]
}


function ContributionGraphHead({sortedMonthes}: IContributionGraphHead) {

    return (
        <thead>
            <tr>
                <td>Дни недели</td>
                {sortedMonthes.map((el, index) => 
                    <td key={`td-monthes-${index}`}
                    colSpan={5}
                    >{MonthesEnum[el]}</td>
                )}
            </tr>
        </thead>
    )
}

export default ContributionGraphHead;