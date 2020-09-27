import { FormControl, MenuItem, Select } from "@material-ui/core";
import React, { useState, useEffect, response } from "react";
import "./App.css";

function App() {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState(["worldwide"]); //!  worldwide and not Worldwide
  {
    /* API call to
            https://disease.sh/docs/#/COVID-19%3A%20Worldometers/get_v3_covid_19_countries */
  }
  useEffect(() => {
    // async -> send a request, wait for it, do something
    const getCountriesData = async () => {
      await fetch("https://disease.sh/v3/covid-19/countries")
        .then((response) => response.json())
        .then((data) => {
          const countries = data.map((country) => ({
            name: country.country,
            value: country.countryInfo.iso2,
          }));
          setCountries(countries);
        });
    };
    getCountriesData();
  }, []);
  // If [] left blank : runs one on the opening then never again
  const onCountryChange = async (event) => {
    const countryCode = event.target.value;
    setCountry(countryCode);
  };
  return (
    <div className="app">
      {/* Header */}
      <div className="app__header">
        {/* Title + select input dropdown field */}
        <h1>COVID-19 Tracker</h1>
        <FormControl className="app__drowpdown">
          <Select variant="outlined" value={country} onChange={onCountryChange}>
            <MenuItem value="worldwide">Worldwide</MenuItem>
            {countries.map((country) => (
              <MenuItem value={country.value}>{country.name}</MenuItem>
            ))}
          </Select>
        </FormControl>
        {/* BEM convention for class names : http://getbem.com/naming/ */}
      </div>

      {/* Infoboxes */}
      {/* Table */}
      {/* Graph */}
      {/* Map */}
    </div>
  );
}

export default App;
