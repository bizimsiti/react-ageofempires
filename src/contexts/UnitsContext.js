import { createContext, useState, useEffect } from "react";
import { units } from "../constant/age-of-empires-units.json";
const UnitsContext = createContext(null);

export const UnitsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [age, setAge] = useState("All");

  // get age value and set filtered age
  const ageFilter = (age) => {
    let filteredUnits;
    if (age === "All") {
      filteredUnits = units;
      setData(filteredUnits);
    } else {
      filteredUnits = units.filter((u) => u.age === age);
      setData(filteredUnits);
    }
  };

  const costFilter = (minValue, maxValue, name) => {
    // tamamlayamadım yanlış çalışıyor.
    if (name === "Wood") {
      const filteredUnits = units.filter(
        (unit) =>
          unit?.cost && unit.cost.Wood > minValue && unit.cost.Wood < maxValue
      );
      if (filteredUnits.length > 0) {
        setData(filteredUnits);
      }
    }
    if (name === "Food") {
      const filteredUnits = units.filter(
        (unit) =>
          unit?.cost && unit.cost.Wood > minValue && unit.cost.Wood < maxValue
      );
      if (filteredUnits.length > 0) {
        setData(filteredUnits);
      }
    }
    if (name === "Gold") {
      const filteredUnits = units.filter(
        (unit) =>
          unit?.cost && unit.cost.Wood > minValue && unit.cost.Wood < maxValue
      );
      if (filteredUnits.length > 0) {
        setData(filteredUnits);
      }
    }
  };

  //run ageFilter when age changes
  useEffect(() => {
    ageFilter(age);
  }, [age]);

  const values = {
    data,
    setAge,
    age,
    costFilter
  };
  return (
    <UnitsContext.Provider value={values}>{children}</UnitsContext.Provider>
  );
};

export default UnitsContext;
