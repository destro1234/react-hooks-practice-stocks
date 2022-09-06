import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, onStockClick}) {
  return (
    <div>
      <h2>Stocks</h2>
      {
        stocks.map( s => <Stock key={s.id} stock={s} onStockClick={onStockClick}/>)

      }
    </div>
  );
}

export default StockContainer;
