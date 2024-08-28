import React, { useEffect, useState } from "react";
import Chart from "react-google-charts";

const LineChart = ({ historicalData }) => {
  const [data, setData] = useState([["Date", "Prices"]]);

  useEffect(() => {
    if (historicalData && historicalData.prices) {
      const formattedData = historicalData.prices.map((item) => [
        new Date(item[0]).toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "numeric",
        }).slice(0,-5),
        item[1],
      ]);

      setData([["Date", "Prices"], ...formattedData]);
    }
  }, [historicalData]);

  return (
    <Chart
      chartType="LineChart"
      data={data}
      options={{
        title: "Historical Prices",
        hAxis: {
          title: "Date",
        },
        vAxis: {
          title: "Prices",
        },
      }}
      width="100%"
      height="400px"
      legendToggle
    />
  );
};

export default LineChart;
