import React from 'react'
import { useLocalStorage } from './useLocalStorage';
const Swal = require('sweetalert2')
const MovieContext = React.createContext();

function MovieProvider(props){
    const {
        error,
        item: Movies,
        saveItem: saveMovies,
        loading} = useLocalStorage('MOVIES_V1', []);
      const [openModal, setOpenModal] = React.useState(false)
      const [activePage, setNewActivePage] = React.useState('Por ver');
      const [searchValue, setSearchValue] = React.useState('');
      const completedMovies = Movies.filter(Movie => !Movie.completed);
      const unCompletedMovies = Movies.filter(Movie => !!Movie.completed)
      let filteredMovies = [];
      let searchedMovies = [];
      if (activePage === 'Por ver'){
        filteredMovies = completedMovies
      }else if(activePage === 'Visto'){
        filteredMovies = unCompletedMovies
      }
      if (!searchValue.length >=  1){
        searchedMovies = filteredMovies
      }else{
        searchedMovies = filteredMovies.filter(Movie => {
          const MovieText = Movie.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return MovieText.includes(searchText);
        });  
      }
    
      
      const completeMovies = (text) => {
        const MovieIndex = Movies.findIndex(Movie => Movie.text === text);
        const newMovies = [...Movies];
        //newMovies[MovieIndex] = {
        //  text: Movies[MovieIndex].text,
        //  completed: true,
        //}
        newMovies[MovieIndex].completed = !newMovies[MovieIndex].completed
        //Swal.fire('Buen Trabajo', 'Has completado el Movie ' + text, 'success')
        if (newMovies[MovieIndex].completed){
          Swal.fire('Buen Trabajo', 'Has visto ' + text, 'success')
        }
        saveMovies(newMovies);
      }
      const deleteMovie = (text) => {
        const MovieIndex = Movies.findIndex(Movie => Movie.text === text);
        const newMovies = [...Movies];
        newMovies.splice(MovieIndex, 1);
        saveMovies(newMovies);
      }
      const addMovie = (text, type, productor, link) => {
        const newMovies = [...Movies];
        newMovies.push({
          completed: false,
          text: text,
          type: type,
          productor: productor,
          link: link
        })
        saveMovies(newMovies);
      }
      console.log(Movies)
    return(
        <MovieContext.Provider value={{
            activePage,
            setNewActivePage,
            error,
            loading,
            completedMovies,
            addMovie,
            searchValue,
            setSearchValue,
            searchedMovies,
            completeMovies,
            deleteMovie,
            openModal,
            setOpenModal
        }}>
            {props.children}
        </MovieContext.Provider>
    );
}

export { MovieContext, MovieProvider }