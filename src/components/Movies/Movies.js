import React, { useState } from 'react';

import './Movies.css';
// import MovieItem from './MovieItem';
import Card from '../UI/Card';
import MoviesFilter from './MoviesFilter';
import MovieList from './MovieList';
import MovieChart from './MovieChart';

const Movies = (props) => {
	const [filterYear, setFilterYear] = useState('2022');

	const filterChangeHandler = (selectedYear) => {
		setFilterYear(selectedYear);
	};

	const filterMovies = props.movies.filter((movie) => {
		return movie.date.getFullYear().toString() === filterYear;
	});
	return (
		<Card className='movies'>
			<MoviesFilter
				selectedYear={filterYear}
				onChangeFilter={filterChangeHandler}
			/>
			<MovieChart movies={filterMovies} />
			<MovieList movies={filterMovies} />
		</Card>
	);
};

export default Movies;
