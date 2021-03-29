import React, { ChangeEvent } from "react";
import styles from "./InputField.module.css";

interface Props {
  stockPriceValue: string;
  socialMediaCountValue: string;
  stockPriceHandler: (e: ChangeEvent<HTMLInputElement>) => void;
  socialMediaCountHandler: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField: React.FC<Props> = ({
  stockPriceValue,
  socialMediaCountValue,
  stockPriceHandler,
  socialMediaCountHandler,
}) => {
  return (
    <div className={styles.inputFieldContainer}>
      <div className={styles.inputField}>
        <label>Find the stock price</label>
        <input
          type="text"
          placeholder="eg: APPL,02-01-21"
          name="stockPrice"
          value={stockPriceValue}
          onChange={stockPriceHandler}
        />
      </div>
      <div className={styles.inputField}>
        <label>Find social media count</label>
        <input
          type="text"
          placeholder="eg: APPL,facebook"
          name="socialMediaCount"
          value={socialMediaCountValue}
          onChange={socialMediaCountHandler}
        />
      </div>
    </div>
  );
};

export { InputField };
