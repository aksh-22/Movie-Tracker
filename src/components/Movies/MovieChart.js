import Chart from '../Chart/Chart';

const MovieChart = (props) => {
	const chartDataPoints = [
		{ lable: 'Jan', value: 0 },
		{ lable: 'Feb', value: 0 },
		{ lable: 'Mar', value: 0 },
		{ lable: 'Apr', value: 0 },
		{ lable: 'May', value: 0 },
		{ lable: 'Jun', value: 0 },
		{ lable: 'Jul', value: 0 },
		{ lable: 'Aug', value: 0 },
		{ lable: 'Sep', value: 0 },
		{ lable: 'Oct', value: 0 },
		{ lable: 'Nov', value: 0 },
		{ lable: 'Dec', value: 0 },
	];

	// for (const movie of props.movies) {
	// 	const MovieMonth = movie.date.getMonth();
	// 	chartDataPoints[MovieMonth].value += movie.rating;
	//   	// chartDataPoints[MovieMonth].value += index;
	// }

	props.movies.forEach((movie, index) => {
		const MovieMonth = movie.date.getMonth();
		chartDataPoints[MovieMonth].value += index + 1;
	});

	return <Chart dataPoints={chartDataPoints} />;
};

export default MovieChart;
