import { Data, StockData } from "./mock-data";

export interface StockPrice {
  name?: string;
  date?: string;
  amount?: number;
}

const stockPriceGenerator = (
  nameOfStock: string,
  date: string,
  data: StockData[]
): StockPrice[] | undefined => {
  const filteredStock: StockData | undefined = data.find(
    (data: StockData) => data.name === nameOfStock
  );
  const filterDate = filteredStock?.prices.find(
    (price: Data) => price.date === date
  );

  return filterDate
    ? [{ name: filteredStock?.name, ...filterDate }]
    : undefined;
};

export { stockPriceGenerator };
