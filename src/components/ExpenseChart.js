import React from 'react'
import Chart from './Charts/Chart'

function ExpenseChart(props) {
    const chartdata = [
        { label: "jan", value: 0 },
        { label: "feb", value: 0 },
        { label: "mar", value: 0 },
        { label: "apr", value: 0 },
        { label: "may", value: 0 },
        { label: "jun", value: 0 },
        { label: "jul", value: 0 },
        { label: "aug", value: 0 },
        { label: "sep", value: 0 },
        { label: "oct", value: 0 },
        { label: "nov", value: 0 },
        { label: "dec", value: 0 }
    ]

    for (const expense of props.datafilter) {
        const month = expense.date.getMonth()
        chartdata[month].value += expense.amount
        console.log("amt"+chartdata[month].value );

    }
    return (
        <div>
            <Chart chartdata={chartdata} />
        </div>
    )
}

export default ExpenseChart
