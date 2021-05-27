import React from "react";
import styles from "./styles.module.scss";
import intro from "../../assets/age-of-empires-intro.mp4";
import homeImg from "../../assets/ageofempires_name_img.jpg";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className={styles.container}>
      <video autoPlay muted loop>
        <source src={intro} type="video/mp4" />
      </video>
      <div className={styles.content}>
        <div className={styles.img_wrapper}>
          <img src={homeImg} alt="" />
        </div>
        <button>
          <Link to="units">Search Units</Link>
        </button>
      </div>
    </div>
  );
};

export default Home;
