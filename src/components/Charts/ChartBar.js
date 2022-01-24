import React from 'react'
import './ChartBar.css'

function ChartBar(props) {


    var barheight = '0%'
    if (props.maxval > 0) {
        barheight = Math.round((props.value / props.maxval) * 100) + '%'
        console.log(barheight);
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{ height: barheight }}></div>
            </div>

            <div className='chart- bar__label' style={{textTransform: "capitalize"}}>{props.label}</div>
        </div>
    )
}

export default ChartBar
