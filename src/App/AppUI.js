import React from 'react';
import { MovieList } from '../MovieList';
import { MovieItem } from '../MovieItem';
import { MovieSearch } from '../MovieSearch';
import { CreateMovieButton } from '../CreateMovieButton';
import { MovieForm } from '../MovieForm'
import { MovieContext } from '../MovieContext';
import { Modal } from '../Modal'
import { ViewedFilter } from '../ViewedFilter'
import './App.css'
function AppUI(){
  const {error, loading, searchedMovies, completeMovies, deleteMovie, openModal, setOpenModal} = React.useContext(MovieContext)
  return(
    <React.Fragment>
      <MovieSearch/>
      <ViewedFilter></ViewedFilter>
      <MovieList >
        {error && <p className='info'>Desesperate, hubo un error :(</p>}
        {loading && <p className='info'>Estamos cargando, no desesperes</p>}
        {(!loading && !searchedMovies.length) && <p className='info'>Crea tu primer Movie</p>}
        {searchedMovies.map(Movie => (
          <MovieItem 
            key={Movie.text}
            text={Movie.text}
            type={Movie.type}
            productor={Movie.productor}
            completed={Movie.completed}
            onComplete={() => completeMovies(Movie.text)}
            onDelete={() => deleteMovie(Movie.text)}/>
        ))}
      </MovieList>
      {!!openModal && (
      <Modal>
        <MovieForm></MovieForm>
      </Modal>)}
      <CreateMovieButton setOpenModal={setOpenModal} openModal={openModal}/>
    </React.Fragment>);
}

export { AppUI };