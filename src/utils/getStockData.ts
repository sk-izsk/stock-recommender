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

const getStockData = (nameOfStock: NameOfStock): StockData => {
  return {
    name: nameOfStock,
    prices: new Array(10)
      .fill(null)
      .map(
        (elem: Data, index: number) =>
          (elem = { date: getDate(index), amount: getRandomNumber(1000, 800) })
      ),
    socialMedia: [
      {
        name: "Facebook",
        count: new Array(10)
          .fill(null)
          .map(
            (elem: Data, index: number) =>
              (elem = { date: getDate(index), amount: getRandomNumber(100) })
          ),
        prices: new Array(10).fill(null).map(
          (elem: Data, index: number) =>
            (elem = {
              date: getDate(index),
              amount: getRandomNumber(1000, 800),
            })
        ),
      },
      {
        name: "Twitter",
        count: new Array(10)
          .fill(null)
          .map(
            (elem: Data, index: number) =>
              (elem = { date: getDate(index), amount: getRandomNumber(100) })
          ),
        prices: new Array(10).fill(null).map(
          (elem: Data, index: number) =>
            (elem = {
              date: getDate(index),
              amount: getRandomNumber(1000, 800),
            })
        ),
      },
    ],
  };
};

export { getStockData };
