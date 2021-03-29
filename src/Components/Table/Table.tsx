import React from "react";
import { getRecommendation, StockPrice } from "../../utils";
import styles from "./Table.module.css";

interface Props {
  stockPrice?: StockPrice[];
  handleSellStock: (id: number) => void;
}

export const Table: React.FC<Props> = ({ stockPrice, handleSellStock }) => {
  return (
    <div className={styles.table}>
      <header>
        <div className={styles.headerItem}>name</div>
        <div className={styles.headerItem}>date</div>
        <div className={styles.headerItem}>price</div>
        <div className={styles.headerItem}>recommendation</div>
        <div className={styles.headerItem}>action</div>
      </header>
      <hr className={styles.solid} />
      {stockPrice?.map(
        (stock: StockPrice, index: number) =>
          stock.date &&
          stock.amount && (
            <div className={styles.tableItem} key={index}>
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
                onClick={() => handleSellStock(index)}
                className={styles.button}
              >
                Sell
              </button>
            </div>
          )
      )}
    </div>
  );
};
