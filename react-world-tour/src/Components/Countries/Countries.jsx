import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedCountry = (i) => {
    // visitedCountries.push(i)
    const newVisitedCountries = [...visitedCountries, i];
    setVisitedCountries(newVisitedCountries);
  };

  const handleVisitedFlags = (i) => {
    const newVisitedFlags = [...visitedFlags, i];
    setVisitedFlags(newVisitedFlags);
  };
  // How can we remove item from an array in a state?
  // 1) Use filture to select all the element except the one you want to remove

  return (
    <div>
      <h3>Countries : {countries.length} </h3>
      {/* Visited Countries */}
      <div>
        <h5>Visited Countries :{visitedCountries.length} </h5>
        <ul>
          {visitedCountries.map((i) => (
            <li key={i.cca3}>{i.name.common}</li>
          ))}
        </ul>
      </div>
      <div className="flag-container">
        {visitedFlags.map((i, idx) => (
          <img key={idx} src={i}></img>
        ))}
      </div>
      {/* Display Countries */}
      <div className="country-container">
        {countries.map((i) => (
          <Country
            country={i}
            key={i.cca3}
            handleVisitedCountry={handleVisitedCountry}
            handleVisitedFlags = {handleVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
