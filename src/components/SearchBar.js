import React, { useState} from "react";

function SearchBar({stocks, onAlphabetClick}) {



  // function handleAlphabetClick(event) {

    let sortedStocks = stocks.sort((a, b) => {


      
      if (a.name < b.name) {
        
        return -1;
      }
      else if (a.name > b.name) {
        return 1;
      }
      else {
        return 0;
      }
     
    });
    
  // } 

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input onClick={() => onAlphabetClick(sortedStocks)}
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={null}
          onChange={null}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={null}
          onChange={null}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={null}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
