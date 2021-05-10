import MovieDate from './MovieDate';
import Card from '../UI/Card';

import './MovieItem.css';

const MovieItem = (props) => {
	return (
		<li>
			<Card className='movie-item'>
				<MovieDate date={props.date} />
				<div className='movie-item__description'>
					<h2>{props.title}</h2>
					<div className='movie-item__rating'>{props.rating}/5</div>
				</div>
			</Card>
		</li>
	);
};

export default MovieItem;
