import ChartBar from './ChartBar';
import './Chart.css';

const Chart = (props) => {
	const dataPointsValue = props.dataPoints.map((dataPoint) => dataPoint.value);
	const totalMax = Math.max(...dataPointsValue);
	return (
		<div className='chart'>
			{props.dataPoints.map((datapoint) => {
				return (
					<ChartBar
						key={datapoint.lable}
						value={datapoint.value}
						maxValue={totalMax}
						lable={datapoint.lable}
					/>
				);
			})}
		</div>
	);
};

export default Chart;
