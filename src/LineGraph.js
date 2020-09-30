import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
const options = {
  legend: { display: false },
  elements: {
    point: {
      radius: 0,
    },
  },
  maintainAspectRatio: false,
};
function LineGraph() {
  const [data, setData] = useState({});
  //https://disease.sh/v3/covid-19/historical/all?lastdays=30

  const buildChartData = (data, casesType = "cases") => {
    const chartData = [];
    let lastDataPoint;
    // lastDataPoint is used to be able to only get the NEW cases per day
    for (let date in data.cases) {
      if (lastDataPoint) {
        const newDataPoint = {
          x: date,
          y: data[casesType][date] - lastDataPoint,
        };
        chartData.push(newDataPoint);
      }
      lastDataPoint = data[casesType][date];
    }
    return chartData;
  };

  useEffect(() => {
    fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120")
      .then((response) => response.json())
      .then((data) => {
        //  console.log(data);
        let chartData = buildChartData(data, "cases");
        setData(chartData);
      });
  }, []);

  return (
    <div>
      <Line
        data={{
          datasets: [
            {
              backgroundColor: "rgba(204, 16, 52, 0.5",
              borderColor: "#CC1034",
              data: data,
            },
          ],
        }}
        options={options}
      />
    </div>
  );
}

export default LineGraph;
