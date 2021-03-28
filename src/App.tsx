import React, { useState } from "react";
import "./App.css";
import { Header } from "./Components/Header";
import { InputField } from "./Components/InputField";
import { useForm } from "./hooks";
import { stockData, StockData } from "./utils/";

interface InputFields {
  stockPrice: string;
  socialMediaCount: string;
  recommendation: string;
}

const App: React.FC = () => {
  const [stocks, setStocks] = useState<StockData[]>(stockData);
  const [values, handleChange, reset] = useForm({
    stockPrice: "",
    socialMediaCount: "",
    recommendation: "",
  });

  console.log("this is ", values);
  return (
    <div className="App">
      <Header />
      <InputField
        stockPriceValue={values.stockPrice}
        socialMediaCountValue={values.socialMediaCount}
        recommendationValue={values.recommendation}
        stockPriceHandler={handleChange}
        socialMediaCountHandler={handleChange}
        stockRecommendationHandler={handleChange}
      />
    </div>
  );
};

export default App;
