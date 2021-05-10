import MovieItem from './MovieItem';

import './MovieList.css';

const MovieList = (props) => {
	if (props.movies.length === 0) {
		return <h2 className='movie-list__fallback'>No Movie Found</h2>;
	}

	return (
		<ul className='movie-list'>
			{props.movies.map((movie) => {
				return (
					<MovieItem
						key={movie.id}
						title={movie.title}
						rating={movie.rating}
						date={movie.date}
					/>
				);
			})}
		</ul>
	);
};

export default MovieList;
