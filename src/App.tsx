import React, { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { InputField } from "./Components/InputField";
import { SearchResult } from "./Components/SearchResult";
import { Table } from "./Components/Table";
import { useForm } from "./hooks";
import {
  SocialMediaCount,
  socialMediaCountGenerator,
  stockData,
  StockData,
  StockPrice,
  stockPriceGenerator,
} from "./utils/";

interface InputFields {
  stockPrice: string;
  socialMediaCount: string;
}

const App: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>(stockData);
  const [stock, setStock] = useState<StockPrice[]>();
  const [addedStockList, setAddedStockList] = useState<StockPrice[]>([]);
  const [socialMedia, setSocialMedia] = useState<SocialMediaCount[]>();
  const [values, handleChange, reset] = useForm({
    stockPrice: "",
    socialMediaCount: "",
  });

  useEffect(() => {
    if (values.stockPrice) {
      const split: string[] = values.stockPrice.split(",");
      const nameOfStock: string = split[0].toUpperCase();
      const date: string = split[1];
      const stock = stockPriceGenerator(nameOfStock, date, stocks);

      setStock(stock);
    }
  }, [values.stockPrice]);

  useEffect(() => {
    if (values.socialMediaCount) {
      const split: string[] = values.socialMediaCount.split(",");
      const nameOfStock: string = split[0].toUpperCase();
      const socialMedia: string = split[1];
      const stockSocialMediaCount = socialMediaCountGenerator(
        nameOfStock,
        socialMedia,
        stocks
      );
      setSocialMedia(stockSocialMediaCount);
    }
  }, [values.socialMediaCount]);

  const handleAddedStockList = (name: string, date: string, amount: number) => {
    const duplicateAddedStockList = [...addedStockList, { name, date, amount }];
    setAddedStockList(duplicateAddedStockList);
    setStock(undefined);
    reset();
  };

  const handleSellStock = (index: number) => {
    const duplicateAddedStockList = [...addedStockList];
    duplicateAddedStockList.splice(index, 1);
    setAddedStockList(duplicateAddedStockList);
  };

  return (
    <div className="App">
      <Header />
      <InputField
        stockPriceValue={values.stockPrice}
        socialMediaCountValue={values.socialMediaCount}
        stockPriceHandler={handleChange}
        socialMediaCountHandler={handleChange}
      />
      <div className="searchContainer">
        {(stock || socialMedia) && (
          <SearchResult
            stockPrice={stock}
            socialMedia={socialMedia}
            handleAddedStockList={handleAddedStockList}
          />
        )}
      </div>
      {addedStockList.length > 0 && (
        <div className="tableContainer">
          <Table
            stockPrice={addedStockList}
            handleSellStock={handleSellStock}
          />
        </div>
      )}
    </div>
  );
};

export default App;
