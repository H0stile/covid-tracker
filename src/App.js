import {
  FormControl,
  MenuItem,
  Select,
  Card,
  CardContent,
} from "@material-ui/core";
import React, { useState, useEffect, response } from "react";
import InfoBox from "./InfoBox";
import Map from "./Map";
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
      <div className="app__left">
        {/* Header */}
        <div className="app__header">
          {/* Title + select input dropdown field */}
          <h1>COVID-19 Tracker</h1>
          <FormControl className="app__drowpdown">
            <Select
              variant="outlined"
              value={country}
              onChange={onCountryChange}
            >
              <MenuItem value="worldwide">Worldwide</MenuItem>
              {countries.map((country) => (
                <MenuItem value={country.value}>{country.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          {/* BEM convention for class names : http://getbem.com/naming/ */}
        </div>
        <div className="app__stats">
          {/* Infoboxes */}
          <InfoBox title="Coronavirus Cases" cases="123" total={3000} />
          <InfoBox title="Recovered" cases="1234" total={2000} />
          <InfoBox title="Deaths" cases="12345" total={1000} />
        </div>
        {/* Map */}
        <Map />
      </div>
      <Card className="app__right">
        <CardContent>
          <h3>Live cases by country</h3>
          <h3>Worldwide new cases</h3>
          {/* Table */}
          {/* Graph */}
        </CardContent>
      </Card>
    </div>
  );
}

export default App;
