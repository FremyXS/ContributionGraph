import React from "react";

interface IContributionGraphBody {
    days: string[]
}

function ContributionGraphBody({ days }: IContributionGraphBody) {
    return (
        <tbody>
            {days.map((el, index) =>
                <tr>
                    <td>{el}</td>
                    <td>1</td>
                    <td>2</td>
                    <td>3</td>
                    <td>4</td>
                </tr>
            )}
        </tbody>
    )
}

export default ContributionGraphBody;