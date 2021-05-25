import React from "react";
import styles from "./styles.module.scss";
function UnitDetail() {
  return (
    <div className={styles.container}>
      <h1>Unit Details</h1>
      <div className={styles.content_container}>
        <ul>
          <li>
            <span>ID:</span>
            <span>1</span>
          </li>
          <li>
            <span>Name:</span>
            <span>1</span>
          </li>
          <li>
            <span>Description:</span>
            <span>1</span>
          </li>
          <li>
            <span>Min. Required Age:</span>
            <span>1</span>
          </li>
          <li>
            <span>wood cost:</span>
            <span>1</span>
          </li>
          <li>
            <span>Food Cost:</span>
            <span>1</span>
          </li>
          <li>
            <span>Gold Cost:</span>
            <span>1</span>
          </li>
          <li>
            <span>Build Time:</span>
            <span>1</span>
          </li>
          <li>
            <span>Reload Time:</span>
            <span>1</span>
          </li>
          <li>
            <span>Hit Points:</span>
            <span>1</span>
          </li>
          <li>
            <span>Attack:</span>
            <span>23</span>
          </li>
          <li>
            <span>Accuracy:</span>
            <span>19</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default UnitDetail;
