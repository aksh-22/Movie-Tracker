import './MovieDate.css';
import Card from '../UI/Card';

const MovieDate = (props) => {
	const month = props.date.toLocaleString('en-us', { month: 'long' });
	const day = props.date.toLocaleString('en-us', { day: '2-digit' });
	const year = props.date.getFullYear();

	return (
		<Card className='movie-date'>
			<div className='movie-date__month'>{month}</div>
			<div className='movie-date__day'>{day}</div>
			<div className='movie-date__year'>{year}</div>
		</Card>
	);
};

export default MovieDate;
