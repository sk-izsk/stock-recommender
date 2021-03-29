import { getDate } from "./getDate";
import { getRandomNumber } from "./getRandomNumber";
import { Data, StockData } from "./mock-data";

export type NameOfStock =
  | "APPL"
  | "MSFT"
  | "TSLA"
  | "LOGM"
  | "GOOGL"
  | "NOK"
  | "FUJIY"
  | "SNE"
  | "CAJ"
  | "NINOY";

const getArrayData = (max: number, min?: number): Data[] =>
  new Array(10)
    .fill(null)
    .map(
      (elem: Data, index: number) =>
        (elem = { date: getDate(index), amount: getRandomNumber(max, min) })
    );

const getStockData = (nameOfStock: NameOfStock): StockData => {
  return {
    name: nameOfStock,
    prices: getArrayData(1000, 800),
    socialMedia: [
      {
        name: "facebook",
        count: getArrayData(100),
        prices: getArrayData(1000, 800),
      },
      {
        name: "twitter",
        count: getArrayData(100),
        prices: getArrayData(1000, 800),
      },
    ],
  };
};

export { getStockData };
