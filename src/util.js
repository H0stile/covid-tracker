import { Circle, Popup } from "react-leaflet";
import React from "react";
import numeral from "numeral";

//  "Dictionnary" for the circles

const CasesTypeColors = {
  cases: {
    hex: " #CC1034",
    multiplier: 800,
  },
  recovered: {
    hex: " #7dd71d",
    multiplier: 1200,
  },
  death: {
    hex: " #fb4443",
    multiplier: 2000,
  },
};

export const sortData = (data) => {
  const sortedData = [...data];
  sortedData.sort((a, b) => {
    if (a.cases > b.cases) {
      return -1;
    } else {
      return 1;
    }
  });

  //  or in one line :
  //  sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1)

  return sortedData;
};

//  Draw circle on the map with interactive tooltip
export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      fillOpacity={0.4}
      color={CasesTypeColors[casesType].hex}
      fillColor={CasesTypeColors[casesType].hex}
      radius={
        Math.sqrt(country[casesType]) * CasesTypeColors[casesType].multiplier
      }
    >
      <Popup>
        <h1>Test Popup</h1>
      </Popup>
    </Circle>
  ));
