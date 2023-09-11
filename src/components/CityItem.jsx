/* eslint-disable react/prop-types */
import styles from "./CityItem.module.css";

const CityItem = ({ city, key }) => {
    console.log(city)
  return (
    <li className={styles.CityItem}>
      <span className={styles.emoji}>{city.emoji}</span>
    </li>
  );
};

export default CityItem;
