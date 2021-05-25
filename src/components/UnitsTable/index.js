import React from "react";
import styles from "./styles.module.scss";
import { units } from "../../constant/age-of-empires-units.json";
import { useHistory } from "react-router-dom";
function UnitsTable() {
  console.log(units);
  let history = useHistory();
  const handleClick = (unitId) => {
    history.push(`/unit/${unitId}`);
  };
  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>age</th>
            <th>costs</th>
          </tr>
        </thead>
        <tbody>
          {units.map((unit, i) => (
            <tr key={i} onClick={() => handleClick(unit.id)}>
              <td>{unit.id}</td>
              <td>{unit.name}</td>
              <td>{unit.age}</td>
              <td>
                {unit.cost === null
                  ? "no cost"
                  : Object.keys(unit.cost).map((e, i) => (
                      <div
                        key={i}
                        style={{
                          display: "block"
                        }}
                      >
                        <span>{`${e}: ${unit.cost[e]}`}</span>
                      </div>
                    ))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UnitsTable;
