import React, { useState } from 'react';
import './App.css';
import Movies from './components/Movies/Movies';
import NewMovie from './components/NewMovie/NewMovie';

const dummyMovieData = [
	{
		id: 'm1',
		title: 'Tenet',
		rating: '4.5',
		date: new Date(2021, 3, 22),
	},
	{
		id: 'm2',
		title: 'The Dark Knight Rises',
		rating: '4.7',
		date: new Date(2021, 2, 22),
	},
	{
		id: 'm3',
		title: 'Intersteller',
		rating: '4.6',
		date: new Date(2019, 4, 11),
	},
	{
		id: 'm4',
		title: 'Justice League',
		rating: '4.1',
		date: new Date(2022, 3, 4),
	},
];

const App = () => {
	const [movies, setNewMovie] = useState(dummyMovieData);

	const getMovieDataFromNewMovie = (getMovieData) => {
		setNewMovie((prevData) => {
			console.log([movies, ...prevData]);
			return [getMovieData, ...prevData];
		});
	};

	return (
		<div className='main'>
			<NewMovie onSaveMovieData={getMovieDataFromNewMovie} />
			<Movies movies={movies} />
		</div>
	);
};

export default App;
