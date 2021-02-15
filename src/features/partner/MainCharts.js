import React from 'react'
import { Chart } from 'react-charts'
export default () => {
    const data = React.useMemo(
        () => [
            {
                label: 'Series 2',
                data: [[0, 0], [0, 2], [2, 5], [3, 6], [4, 4]]
            }
        ],
        []
    )

    const series = React.useMemo(
        () => ({
            type: 'bar'
        }),
        []
    )
    
    const axes = React.useMemo(
        () => [
            { primary: true, type: 'ordinal', position: 'bottom' },
            { position: 'left', type: 'linear', stacked: false }
        ],
        []
    )
    return (
        <div style={{width:'100%', height:'500px'}}>
            <Chart data={data} series={series} axes={axes} tooltip />
        </div>
    )
}