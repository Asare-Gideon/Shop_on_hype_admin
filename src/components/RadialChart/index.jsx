import React from 'react'
import {  Tooltip, RadialBar, Legend,RadialBarChart  } from 'recharts';
function RadialChart() {
	const data = [
		{
			name: 'Page A',
			uv: 4000,
			pv: 2400,
			amt: 2400
		},
		{
			name: 'Page B',
			uv: 3000,
			pv: 1398,
			amt: 2210
		},
		{
			name: 'Page C',
			uv: 2000,
			pv: 9800,
			amt: 2290
		},
		{
			name: 'Page D',
			uv: 2780,
			pv: 3908,
			amt: 2000
		},
		{
			name: 'Page E',
			uv: 1890,
			pv: 4800,
			amt: 2181
		},
		
	];


  return (
    <div>
<RadialBarChart 
  width={730} 
  height={350} 
  innerRadius="10%" 
  outerRadius="80%" 
  data={data} 
  startAngle={180} 
  endAngle={0}
>
  <RadialBar minAngle={15} label={{ fill: '#666', position: 'insideStart' }} background clockWise={true} dataKey='uv' />
  <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' align="right" />
  <Tooltip />
</RadialBarChart>
    </div>
  )
}

export default RadialChart