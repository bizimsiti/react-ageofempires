import React from "react";
import styles from "./styles.module.scss";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
function index() {
  return (
    <header>
      <nav>
        <div className={styles.logo_wrapper}>
          <Link to="/">
            <AiOutlineHome />
          </Link>
        </div>
        <div className={styles.links_wrapper}>
          <ul className={styles.links_list}>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/units">UNITS</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default index;
