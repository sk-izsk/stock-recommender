import React from "react";
import { Data, getRecommendation, StockPrice } from "../../utils";
import { SocialMediaCount } from "../../utils/socialMediaCountGenerator";
import styles from "./SearchResult.module.css";

interface Props {
  stockPrice?: StockPrice[];
  socialMedia?: SocialMediaCount[];
  handleAddedStockList: (name: string, date: string, amount: number) => void;
}

export const SearchResult: React.FC<Props> = ({
  stockPrice,
  socialMedia,
  handleAddedStockList,
}) => {
  return (
    <div className={styles.searchResult}>
      {stockPrice?.map(
        (stock: StockPrice, index: number) =>
          stock.date &&
          stock.amount && (
            <div className={styles.stockPrice} key={index}>
              <div className={styles.name}>Name: {stock.name}</div>
              <div className={styles.date}>date: {stock.date}</div>
              <div className={styles.amount}>price: $ {stock.amount}</div>
              <div className={styles.recommendationContainer}>
                Recommendation:{" "}
                <span className={styles[getRecommendation(stock.amount)]}>
                  {getRecommendation(stock.amount)}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  handleAddedStockList(
                    stock.name as string,
                    stock.date as string,
                    stock.amount as number
                  );
                }}
                className={styles.button}
              >
                Buy
              </button>
            </div>
          )
      )}
      {socialMedia?.map(
        (data: SocialMediaCount, index: number) =>
          data.data && (
            <div className={styles.socialMedia} key={index}>
              <h3> Platform: {data.name}</h3>
              {data.data.map((count: Data, id: number) => (
                <div className={styles.socialData} key={id}>
                  {count.date} : Post {count.amount}
                </div>
              ))}
            </div>
          )
      )}
    </div>
  );
};
