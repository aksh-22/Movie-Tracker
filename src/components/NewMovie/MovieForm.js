import React, { useState } from 'react';
// import MovieDate from '../Movies/MovieDate';
import './MovieForm.css';

const MovieForm = (props) => {
	const getUserData = (event) => {
		event.preventDefault();

		const MovieData = {
			title,
			rating,
			date: new Date(date),
		};

		setTitle('');
		setRating('');
		setDate('');

		props.onSaveMovieData(MovieData);
		// console.log(MovieData);
	};

	const [title, setTitle] = useState('');
	const [rating, setRating] = useState('');
	const [date, setDate] = useState('');

	// const [targetVal, setTargetVal] = useState({
	// 	setTitle: '',
	// 	setRating: '',
	// 	setDate: '',
	// });

	const enterTitle = (event) => {
		setTitle(event.target.value);

		// another way

		// setTargetVal((prevState) => {
		// 	return { ...prevState, setTitle: event.target.value };
		// });
	};

	const enterRating = (event) => {
		setRating(event.target.value);
	};

	const enterDate = (event) => {
		setDate(event.target.value);
	};

	return (
		<form onSubmit={getUserData}>
			<div className='new-movie__controls'>
				<div className='new-movie__control'>
					<label>Title</label>
					<input type='text' onChange={enterTitle} value={title} />
				</div>
				<div className='new-movie__control'>
					<label>Rating</label>
					<input
						type='number'
						min='1'
						max='5'
						step='0.01'
						onChange={enterRating}
						value={rating}
					/>
				</div>
				<div className='new-movie__control'>
					<label>Date</label>
					<input
						type='date'
						min='2019-01-01'
						max='2022-12-31'
						onChange={enterDate}
						value={date}
					/>
				</div>
			</div>
			<div className='new-movie__actions'>
				<button type='submit'>Add Movie</button>
			</div>
		</form>
	);
};

export default MovieForm;
