import './NewMovie.css';
import MovieForm from './MovieForm';

const NewMovie = (props) => {
	const getMovieDataFromForm = (Movie) => {
		const MovieData = {
			...Movie,
			id: Math.floor(Math.random() * 100),
		};

		// console.log(MovieData);
		props.onSaveMovieData(MovieData);
	};

	return (
		<div className='new-movie'>
			<MovieForm onSaveMovieData={getMovieDataFromForm} />
		</div>
	);
};

export default NewMovie;
