import React from "react";
import styles from "./styles.module.scss";
import MultiRange from "../../components/MultiRange";
import { useState } from "react";
import UnitsTable from "../../components/UnitsTable";
import { useContext, useEffect } from "react";
import UnitsContext from "../../contexts/UnitsContext";
function Units() {
  //define checkbox properties
  const checkBoxes = [
    { name: "Wood", isChecked: false },
    { name: "Food", isChecked: false },
    { name: "Gold", isChecked: false }
  ];

  const { setAge } = useContext(UnitsContext);

  const [checkBox, setCheckbox] = useState(checkBoxes);

  const handleCheck = ({ target }) => {
    const { name } = target;
    const index = checkBox.findIndex((obj) => obj.name === name);
    setCheckbox([
      ...checkBox.slice(0, index),
      { name, isChecked: target.checked },
      ...checkBox.slice(index + 1)
    ]);
  };

  //get age value and setAge
  const changeAges = ({ target }) => {
    setAge(target.value);
  };

  //set radio input "All" when component mounted
  useEffect(() => {
    setAge("All");
  }, [setAge]);
  return (
    <div className={styles.container}>
      <div className={styles.content_container}>
        <div className={styles.ages}>
          <ul>
            <li>
              <label>
                <input
                  type="radio"
                  name="ages"
                  value="All"
                  defaultChecked
                  onChange={changeAges}
                />
                <span className={styles.ages_text}>All</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="ages"
                  value="Dark"
                  onChange={changeAges}
                />
                <span className={styles.ages_text}>Dark</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="ages"
                  value="Feudal"
                  onChange={changeAges}
                />
                <span className={styles.ages_text}>Feudal</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="ages"
                  value="Castle"
                  onChange={changeAges}
                />
                <span className={styles.ages_text}>Castle</span>
              </label>
            </li>
            <li>
              <label>
                <input
                  type="radio"
                  name="ages"
                  value="Imperial"
                  onChange={changeAges}
                />
                <span className={styles.ages_text}>Impreial</span>
              </label>
            </li>
          </ul>
        </div>
        <div className={styles.costs}>
          <ul>
            {checkBox.map((checkBox, i) => (
              <li key={i}>
                <div className={styles.checkbox_container}>
                  <label className={styles.switch_checkbox}>
                    <input
                      type="checkbox"
                      name={checkBox.name}
                      value={checkBox.isChecked}
                      onChange={handleCheck}
                    />
                    <span className={styles.switch_slider}></span>
                  </label>
                  <span className={styles.switch_checkbox_text}>
                    {checkBox.name}
                  </span>
                </div>
                <MultiRange
                  name={checkBox.name}
                  isChecked={checkBox.isChecked}
                />
              </li>
            ))}
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
/**
 * 
 * const changeAges = useCallback(
    ({ target }) => {
      setAge(target.value);
    },
    [setAge]
  );
 */
