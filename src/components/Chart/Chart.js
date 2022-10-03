import React from "react";
import './Chart.css';
import ChartBar from './ChartBar.js'

const Chart = props => {

    const valArray = props.dataPoints.map(datPoint => datPoint.value)

    const maxValue = Math.max(...valArray)

    console.log(props.dataPoints)
    console.log(maxValue)

    return <div className="chart">
        {
        props.dataPoints.map(dataPoint => <ChartBar key={
                dataPoint.id
            }
            value={
                dataPoint.value
            }
            maxVal={maxValue}
            label={
                dataPoint.label
            }/>)
    } </div>
}

export default Chart;
