import React from 'react';
import { MovieContext } from '../MovieContext';
import './MovieForm.css'
function MovieForm(){
    const [newMovieValue, setNewMovieValue] = React.useState('');
    const [newProductorValue, setNewProductorValue] = React.useState('');
    const [newTypeValue, setNewTypeValue] = React.useState('')
    const {
        addMovie,
        setOpenModal
    } = React.useContext(MovieContext)
    const onTypeChange = (event) => {
      if(event.target.value === ''){
        setNewTypeValue("Otro")
      }else {
        setNewTypeValue(event.target.value)
      }
    }
    const onProductorChange = (event) => {
        setNewProductorValue(event.target.value)
    }
    const onCancel = () => {
        setOpenModal(false);
    };
    const onChange = (event) => {
        setNewMovieValue(event.target.value)
    }
    const onSubmit = (event) => {
        event.preventDefault();
        addMovie(newMovieValue, newTypeValue, newProductorValue);
        setOpenModal(false);
    };
    return(
        <form onSubmit={onSubmit} >
      <label>Añade algo nuevo</label>
      <div className='label-container'>
        <h2 className='input-text'>Título:</h2>
        <input
        value = {newMovieValue}
        onChange = {onChange}
        placeholder = "Sherlock"
        />
      </div>
      <div className='label-container'>
        <h2 className='input-text'>Tipo:</h2>
        <select name="tipo" value={newTypeValue} onChange={onTypeChange}>
          <option ></option>
          <option value={"Serie"}>Serie</option>
          <option value={"Libro"}>Libro</option>
          <option value={"Película"}>Película</option>
        </select>
      </div>
      <div className='label-container'>
        <h2 className='input-text'>Productor:</h2>
        <input
        value = {newProductorValue}
        onChange = {onProductorChange}
        placeholder = "HBO"
        />
      </div>
      <div className="MovieForm-buttonContainer">
        <button
          type="button"
          className="MovieForm-button MovieForm-button-cancel"
          onClick = {onCancel}
        >
          Cancelar
        </button>

        <button
          className="MovieForm-button MovieForm-button-add"
          type= "submit"
        >
          Añadir
          </button>
      </div>
    </form>
    );
}

export { MovieForm }