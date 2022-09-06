import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {

  const [stocks, setStocks] = useState([])
  const [portfolioStocks, setPortfolioStocks] = useState([])

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
    .then(r => r.json())
    .then(setStocks)
  }, [])

  function handleStockClick(stock) {
    
    // console.log(portfolioStocks.includes(stock))
    let addedStocks = []
   
       if (portfolioStocks.includes(stock)) {
        addedStocks = [...portfolioStocks]
        setPortfolioStocks(addedStocks)
       }
       else if(!portfolioStocks.includes(stock)) {
        addedStocks = [...portfolioStocks, stock]
        setPortfolioStocks(addedStocks)
       }
      
    }
 
    
  

  function handleDeleteClick(stock) {
    
    if (portfolioStocks.includes(stock)) {
      let deletedStocks = portfolioStocks.filter( ps => ps.name !== stock.name)
      setPortfolioStocks(deletedStocks)
    }
  }

  // function handleAlphabetSort(sortedStocks) {
  //   console.log(sortedStocks)
  //   setStocks(sortedStocks)
    
  // }

  

  return (
    <div>
      <SearchBar stocks={stocks} onAlphabetClick={setStocks}/>
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={stocks} onStockClick={handleStockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer portfolioStocks={portfolioStocks} onStockClick={handleDeleteClick}/>
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
