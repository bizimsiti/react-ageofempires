import React from "react";
import styles from "./styles.module.scss";
import MultiRange from "../../components/MultiRange";
import { useState } from "react";
import UnitsTable from "../../components/UnitsTable";
function Units() {
  const costFilterValues = [
    { name: "wood", isChecked: false },
    { name: "food", isChecked: false },
    { name: "gold", isChecked: false }
  ];
  const [visible, setVisible] = useState(costFilterValues);
  const handleVisible = (e) => {};
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.ages}>
          <ul>
            <li>
              <label>
                <input type="radio" name="ages" value="all" defaultChecked />
                <span className={styles.ages_text}>All</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="ages" value="dark" />
                <span className={styles.ages_text}>Dark</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="ages" value="feudal" />
                <span className={styles.ages_text}>Feudal</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="ages" value="castle" />
                <span className={styles.ages_text}>Castle</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="ages" value="impreial" />
                <span className={styles.ages_text}>Impreial</span>
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.costs}>
          <ul>
            <li>
              <div className={styles.checkbox_container}>
                <label className={styles.switch_checkbox}>
                  <input
                    type="checkbox"
                    name="wood"
                    checked={visible}
                    onChange={handleVisible}
                  />
                  <span className={styles.switch_slider}></span>
                </label>
                <span className={styles.switch_checkbox_text}>Wood</span>
              </div>
              <MultiRange name={"wood"} handleVisible={visible} />
            </li>
            <li>
              <div className={styles.checkbox_container}>
                <label className={styles.switch_checkbox}>
                  <input type="checkbox" name="food" />
                  <span className={styles.switch_slider}></span>
                </label>
                <span className={styles.switch_checkbox_text}>Food</span>
              </div>

              <MultiRange name={"food"} handleVisible={visible} />
            </li>
            <li>
              <div className={styles.checkbox_container}>
                <label className={styles.switch_checkbox}>
                  <input type="checkbox" name="gold" />
                  <span className={styles.switch_slider}></span>
                </label>
                <span className={styles.switch_checkbox_text}>Gold</span>
              </div>

              <MultiRange name={"gold"} handleVisible={visible} />
            </li>
          </ul>
        </div>
        <div className={styles.unit_table}>
          <UnitsTable />
        </div>
      </div>
    </div>
  );
}

export default Units;
