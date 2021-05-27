import { useState } from "react";
import styles from "./styles.module.scss";
import { useContext, useEffect } from "react";
import UnitsContext from "../../contexts/UnitsContext";
function MultiRange({ name, isChecked }) {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const { costFilter } = useContext(UnitsContext);
  useEffect(() => {
    costFilter(minValue, maxValue, name);
  }, [minValue, maxValue, name]);
  return (
    <div className={`${styles.container} `}>
      <input
        type="range"
        className={styles.range}
        value={minValue}
        onChange={(e) => setMinValue(e.target.value)}
        min="0"
        max="200"
        step="2"
        disabled={!isChecked}
      />
      <input
        type="range"
        className={styles.range}
        value={maxValue}
        min={minValue}
        max="200"
        step="2"
        disabled={!isChecked}
        onInput={(e) => setMaxValue(e.target.value)}
      />
      <div className={styles.range_values_wrapper}>
        <span className={`${styles.range_value} ${styles.range_min}`}>
          MİN:{minValue}
        </span>
        <span className={`${styles.range_value} ${styles.range_max}`}>
          MAX:{maxValue}
        </span>
      </div>
    </div>
  );
}

export default MultiRange;
