import React from "react";
import Stock from "./Stock";

function PortfolioContainer({portfolioStocks, onStockClick}) {
  return (
    <div>
      <h2>My Portfolio</h2>
      {
        Array.isArray(portfolioStocks) && portfolioStocks.length > 0 ? portfolioStocks.map( s => <Stock key={s.name} stock={s} onStockClick={onStockClick}/>) : null
      }
    </div>
  );
}

export default PortfolioContainer;
