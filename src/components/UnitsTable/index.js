import styles from "./styles.module.scss";
import { useHistory } from "react-router-dom";
import { useContext } from "react";
import UnitsContext from "../../contexts/UnitsContext";
function UnitsTable() {
  const { data: units } = useContext(UnitsContext);
  let history = useHistory();
  //route unit-detail
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
          {units.length > 0 ? (
            units.map((unit, i) => (
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
            ))
          ) : (
            <tr>
              <td>No unit</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default UnitsTable;
