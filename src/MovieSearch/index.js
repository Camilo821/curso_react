import React from "react";
import { MovieContext } from "../MovieContext";
import './MovieSearch.css'
function MovieSearch(){
    
  const {searchValue, setSearchValue} = React.useContext(MovieContext)
  
  const onSearchValueChange = (event) => {
    console.log(event.target.value);
    setSearchValue(event.target.value);
  };

  return [
    <input
      className="MovieSearch"
      placeholder="Game Of Thrones"
      value={searchValue}
      onChange={onSearchValueChange}
    />
  ];
}

export { MovieSearch };