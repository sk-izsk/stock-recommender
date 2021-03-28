import { getStockData } from "./getStockData";

export interface Data {
  date: string;
  amount: number;
}

export type SocialMediaType = "Facebook" | "Twitter";

export interface SocialMedia {
  name: SocialMediaType;
  count: Data[];
  prices: Data[];
}

export interface StockData {
  name: string;
  prices: Data[];
  socialMedia: SocialMedia[];
}

const stockData: StockData[] = [
  getStockData("APPL"),
  getStockData("MSFT"),
  getStockData("TSLA"),
  getStockData("LOGM"),
  getStockData("GOOGL"),
  getStockData("NOK"),
  getStockData("FUJIY"),
  getStockData("SNE"),
  getStockData("CAJ"),
  getStockData("NINOY"),
];

export { stockData };
