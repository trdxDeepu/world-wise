/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { createContext, useContext } from "react";
import { useState, useEffect } from "react";

const CitiesContext = createContext();

const BASE_URL = "http://localhost:9000";

function CitiesProvider({ children }) {
  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchCities() {
      try {
        setIsLoading(true);
        const res = await fetch(`${BASE_URL}/cities`);
        const data = await res.json();
        setCities(data);
      } catch (error) {
        alert(error, "There is problem in loading Cities");
      } finally {
        setIsLoading(false);
      }
    }

    fetchCities();
  }, []);

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities(){
    const context = useContext(CitiesContext);
    if(context === undefined) throw new Error("Cities context is used outside the cities provider")
    return context;
}


export {CitiesProvider,useCities};