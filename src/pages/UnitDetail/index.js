import React from "react";
import styles from "./styles.module.scss";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import UnitsContext from "../../contexts/UnitsContext";
function UnitDetail() {
  const { id } = useParams();

  const { data: units } = useContext(UnitsContext);
  const unit = units.filter((e) => e.id === parseInt(id));
  return (
    <div className={styles.container}>
      <h1>Unit Details</h1>
      <div className={styles.content_container}>
        <ul>
          <li>
            <span>ID:</span>
            <span>{unit[0].id}</span>
          </li>
          <li>
            <span>Name:</span>
            <span>{unit[0].name}</span>
          </li>
          <li>
            <span>Description:</span>
            <span>{unit[0].description}</span>
          </li>
          <li>
            <span>Min. Required Age:</span>
            <span>{unit[0].age}</span>
          </li>
          <li>
            <span>wood cost:</span>
            <span>{unit[0].cost === null ? "no" : unit[0].cost.Wood}</span>
          </li>
          <li>
            <span>Food Cost:</span>
            <span>{unit[0].cost === null ? "no" : unit[0].cost.Food}</span>
          </li>
          <li>
            <span>Gold Cost:</span>
            <span>{unit[0].cost === null ? `no` : unit[0].cost.Gold}</span>
          </li>
          <li>
            <span>Build Time:</span>
            <span>{unit[0].build_time}</span>
          </li>
          <li>
            <span>Reload Time:</span>
            <span>{unit[0].reload_time}</span>
          </li>
          <li>
            <span>Hit Points:</span>
            <span>{unit[0].hit_points}</span>
          </li>
          <li>
            <span>Attack:</span>
            <span>{unit[0].attack}</span>
          </li>
          <li>
            <span>Accuracy:</span>
            <span>{unit[0].accuracy}</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UnitDetail;
