import React from "react";
import styles from "./styles.module.scss";
function MultiRange({ name, handleVisible }) {
  console.log(handleVisible);
  return (
    <div className={styles.container}>
      <input
        type="range"
        className={styles.range}
        defaultValue="0"
        min="0"
        max="100"
      />
      <input
        type="range"
        className={styles.range}
        defaultValue="101"
        min="101"
        max="200"
      />
      <div className={styles.range_values_wrapper}>
        <span className={`${styles.range_value} ${styles.range_min}`}>
          MİN:0
        </span>
        <span className={`${styles.range_value} ${styles.range_max}`}>
          MAX:0
        </span>
      </div>
    </div>
  );
}

export default MultiRange;
