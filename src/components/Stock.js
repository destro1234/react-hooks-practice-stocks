import React from "react";



function Stock({stock, onStockClick}) {

  function handleStockClick(event) {
    onStockClick(stock)
    console.log(event)
  }

  return (
    <div onClick={handleStockClick}>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
