/* eslint-disable no-unused-vars */
// 

import { useEffect, useState } from "react";
import Button from "./Button";

import styles from "./Form.module.css";

import BackButton from "./BackButton";
import useUrlPosition from "../hooks/useUrlPosition";

// eslint-disable-next-line react-refresh/only-export-components
export function convertToEmoji(countryCode) {
  const codePoints = countryCode
    .toUpperCase()
    .split("")
    .map((char) => 127397 + char.charCodeAt());
  return String.fromCodePoint(...codePoints);
}

const BASE_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function Form() {
  const [cityName, setCityName] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [mapLat,mapLng] = useUrlPosition()

  const [isLoadingGeocoding,setIsLoadingGeocoding] = useState(false)

  useEffect(()=>{
    async function fethCityData(){
      try {
        setIsLoadingGeocoding(true)
        const res = await fetch(`${BASE_URL}?latitude=${mapLat}&longitude=${mapLng}`)
        const data = await res.json()
        console.log(data)

      } catch (error) {
        console.log(error)
      }finally{
        setIsLoadingGeocoding(false)
      }
    }mn
    fethCityData()
  },[])

  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
      </div>
    </form>
  );
}

export default Form;
