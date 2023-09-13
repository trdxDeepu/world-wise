/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useCities } from "../contexts/CitiesContext";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));



const CityItem = ({ city, key }) => {
  const { currentCity,deleteCity } = useCities();

  function handeClick(e){
    e.preventDefault()
   deleteCity(id)
  }
  const { cityName, emoji, date, id, position } = city;
  console.log(position);
  return (
    <li>
      <Link
        className={`${styles.cityItem} ${
          id === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${id}?lat=${position.lat}&lng=${position.lng}`}
        key={key}
      >
        <span className={styles.emoji}>{emoji}</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button className={styles.deleteBtn} onClick={handeClick}>&times;</button>
      </Link>
    </li>
  );
};

export default CityItem;
