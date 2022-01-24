import React from 'react'
import ChartBar from './ChartBar'
import './Chart.css'
function Chart(props) {
    const maxdata = props.chartdata.map((elem) => {
        return elem.value;

    })
    const maxamt = Math.max(...maxdata)
    console.log("max" + maxamt);

    return (
        <div className='chart'>

            {props.chartdata.map((elem) => {

               return( <ChartBar key={elem.label} label={elem.label} value={elem.value} maxval={maxamt} />);

            })}

        </div>
    )
}

export default Chart
